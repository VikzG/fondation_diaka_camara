// Tombola Fondation Diaka Camara : réservations du site, validation manuelle et envoi des tickets.
// Sur Google : Extensions > Apps Script, coller ce fichier, puis lancer setup() une seule fois.

const CONFIG = {
  sheetName: "Réservations",
  senderName: "Fondation Diaka Camara",
  replyTo: "contact@fondationdiakacamara.org",
  ticketPriceUsd: 100,
  ticketPriceGnf: 880000, // conversion arrondie de 100 USD, à garder identique dans ReservationForm.tsx
  maxTicketsPerReservation: 20,
  maxReservationsPerEmailPerHour: 5,
  paypalUrl: "https://www.paypal.me/diakacamara1",
  orangeMoney: { account: "Fondation Diaka Camara", merchantCode: "691560", number: "613125478" },
  zelle: { recipient: "Diaka Camara", email: "diakacamara@live.com" },
};

const COLUMNS = [
  "Date",
  "Référence",
  "Nom",
  "E-mail",
  "Téléphone",
  "Tickets",
  "Montant (USD)",
  "Montant (GNF)",
  "Paiement",
  "Langue",
  "Statut",
  "Numéros de tickets",
  "Suivi des e-mails",
];
const COL = {};
COLUMNS.forEach((title, index) => (COL[title] = index + 1));

const STATUS = { pending: "En attente", paid: "Payé", cancelled: "Annulé" };
const METHODS = ["paypal", "orange", "zelle"];

// À lancer une seule fois : prépare la feuille et active l'envoi des tickets au passage sur « Payé »
function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(CONFIG.sheetName) || spreadsheet.getSheets()[0];
  sheet.setName(CONFIG.sheetName);

  sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS]).setFontWeight("bold");
  sheet.setFrozenRows(1);
  // Relancer setup après un ajout de colonne remet le menu « Statut » à la bonne place
  sheet.getRange(2, 1, sheet.getMaxRows() - 1, sheet.getMaxColumns()).clearDataValidations();
  sheet.getRange(2, COL["Montant (GNF)"], sheet.getMaxRows() - 1, 1).setNumberFormat("#,##0");
  sheet.getRange(2, COL["Statut"], sheet.getMaxRows() - 1, 1).setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList([STATUS.pending, STATUS.paid, STATUS.cancelled], true)
      .setAllowInvalid(false)
      .build()
  );

  const properties = PropertiesService.getScriptProperties();
  if (!properties.getProperty("nextReference")) properties.setProperty("nextReference", "1");
  if (!properties.getProperty("nextTicket")) properties.setProperty("nextTicket", "1");

  ScriptApp.getProjectTriggers()
    .filter((trigger) => trigger.getHandlerFunction() === "handleEdit")
    .forEach((trigger) => ScriptApp.deleteTrigger(trigger));
  ScriptApp.newTrigger("handleEdit").forSpreadsheet(spreadsheet).onEdit().create();
}

// Réception du formulaire du site
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Champ invisible rempli : c'est un robot, on répond sans rien enregistrer
    if (data.website) return respond({ ok: true });

    const reservation = validate(data);
    if (!reservation) return respond({ ok: false, error: "invalid" });
    if (isRateLimited(reservation.email)) return respond({ ok: false, error: "too_many" });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    let reference;
    let row;
    try {
      reference = "TOMB-" + pad(nextNumber("nextReference", 1));
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.sheetName);
      sheet.appendRow([
        new Date(),
        reference,
        toCell(reservation.name),
        toCell(reservation.email),
        toCell(reservation.phone),
        reservation.quantity,
        reservation.quantity * CONFIG.ticketPriceUsd,
        reservation.method === "orange" ? reservation.quantity * CONFIG.ticketPriceGnf : "",
        reservation.method,
        reservation.lang,
        STATUS.pending,
        "",
        "",
      ]);
      row = sheet.getLastRow();
    } finally {
      lock.releaseLock();
    }

    let emailSent = true;
    try {
      sendEmail(reservation.email, reservation.lang, reservationEmail(reservation, reference));
    } catch (error) {
      emailSent = false;
      SpreadsheetApp.getActiveSpreadsheet()
        .getSheetByName(CONFIG.sheetName)
        .getRange(row, COL["Suivi des e-mails"])
        .setValue("Réservation : e-mail non envoyé");
    }
    return respond({ ok: true, reference: reference, emailSent: emailSent });
  } catch (error) {
    console.error(error);
    return respond({ ok: false, error: "server" });
  }
}

// Déclencheur : un passage sur « Payé » attribue les numéros et envoie le ticket
function handleEdit(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== CONFIG.sheetName) return;

  const firstColumn = e.range.getColumn();
  const lastColumn = firstColumn + e.range.getNumColumns() - 1;
  if (COL["Statut"] < firstColumn || COL["Statut"] > lastColumn) return;

  const firstRow = Math.max(e.range.getRow(), 2);
  const lastRow = e.range.getRow() + e.range.getNumRows() - 1;
  for (let row = firstRow; row <= lastRow; row++) {
    if (sheet.getRange(row, COL["Statut"]).getValue() === STATUS.paid) issueTickets(sheet, row);
  }
}

function issueTickets(sheet, row) {
  const numbersCell = sheet.getRange(row, COL["Numéros de tickets"]);
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  let numbers;
  try {
    // Déjà attribués : un même achat ne reçoit jamais de seconds numéros
    if (numbersCell.getValue()) return;
    const quantity = Number(sheet.getRange(row, COL["Tickets"]).getValue());
    if (!quantity) return;
    const first = nextNumber("nextTicket", quantity);
    numbers = [];
    for (let i = 0; i < quantity; i++) numbers.push("T-" + pad(first + i));
    numbersCell.setValue(numbers.join(", "));
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }

  const value = (title) => String(sheet.getRange(row, COL[title]).getValue());
  const trackingCell = sheet.getRange(row, COL["Suivi des e-mails"]);
  try {
    const lang = value("Langue") === "en" ? "en" : "fr";
    sendEmail(value("E-mail"), lang, ticketEmail(value("Nom"), value("Référence"), numbers, lang));
    trackingCell.setValue("Ticket envoyé");
  } catch (error) {
    console.error(error);
    trackingCell.setValue("Ticket : e-mail non envoyé");
  }
}

function validate(data) {
  const clean = (value, max) => String(value == null ? "" : value).trim().slice(0, max);
  const name = clean(data.name, 120);
  const email = clean(data.email, 200).toLowerCase();
  const phone = clean(data.phone, 40);
  const quantity = Number(data.quantity);
  const method = clean(data.method, 20);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > CONFIG.maxTicketsPerReservation) return null;
  if (METHODS.indexOf(method) === -1) return null;

  return { name, email, phone, quantity, method, lang: data.lang === "en" ? "en" : "fr" };
}

// Évite qu'une même adresse reçoive des e-mails en boucle via le formulaire
function isRateLimited(email) {
  const cache = CacheService.getScriptCache();
  const key = "rate_" + Utilities.base64EncodeWebSafe(email);
  const count = Number(cache.get(key) || 0);
  if (count >= CONFIG.maxReservationsPerEmailPerHour) return true;
  cache.put(key, String(count + 1), 3600);
  return false;
}

function nextNumber(property, count) {
  const properties = PropertiesService.getScriptProperties();
  const current = Number(properties.getProperty(property) || 1);
  properties.setProperty(property, String(current + count));
  return current;
}

function pad(number) {
  return String(number).padStart(4, "0");
}

// Empêche une saisie comme « =... » ou « +224... » d'être interprétée comme une formule
function toCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function sendEmail(to, lang, message) {
  const escapeHtml = (text) =>
    text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  MailApp.sendEmail({
    to: to,
    subject: message.subject,
    name: CONFIG.senderName,
    replyTo: CONFIG.replyTo,
    body: message.paragraphs.join("\n\n"),
    htmlBody: message.paragraphs.map((p) => "<p>" + escapeHtml(p).replace(/\n/g, "<br>") + "</p>").join(""),
  });
}

function paymentInstructions(reservation, reference) {
  const fr = reservation.lang !== "en";
  const total = reservation.quantity * CONFIG.ticketPriceUsd;

  if (reservation.method === "paypal") {
    return fr
      ? `Payez ${total} USD avec PayPal :\n${CONFIG.paypalUrl}/${total}USD\nIndiquez la référence ${reference} dans la note du paiement.`
      : `Pay ${total} USD with PayPal:\n${CONFIG.paypalUrl}/${total}USD\nPlease include the reference ${reference} in the payment note.`;
  }

  if (reservation.method === "zelle") {
    return fr
      ? `Envoyez ${total} USD par Zelle :\nBénéficiaire : ${CONFIG.zelle.recipient}\nAdresse e-mail : ${CONFIG.zelle.email}\nIndiquez la référence ${reference} dans la note du paiement.`
      : `Send ${total} USD with Zelle:\nRecipient: ${CONFIG.zelle.recipient}\nEmail address: ${CONFIG.zelle.email}\nPlease include the reference ${reference} in the payment note.`;
  }

  const gnf = reservation.quantity * CONFIG.ticketPriceGnf;
  const formatted = String(gnf).replace(/\B(?=(\d{3})+$)/g, " ");
  const om = CONFIG.orangeMoney;
  const amount = gnf
    ? fr
      ? `Payez ${formatted} GNF avec Orange Money :`
      : `Pay ${formatted} GNF with Orange Money:`
    : fr
      ? "Répondez à cet e-mail pour connaître le montant en GNF, puis payez avec Orange Money :"
      : "Reply to this email to get the amount in GNF, then pay with Orange Money:";
  return fr
    ? `${amount}\nNom du compte : ${om.account}\nCode marchand : ${om.merchantCode}\nNuméro : ${om.number}\nGardez bien votre preuve de paiement.`
    : `${amount}\nAccount name: ${om.account}\nMerchant code: ${om.merchantCode}\nNumber: ${om.number}\nPlease keep your proof of payment.`;
}

function reservationEmail(reservation, reference) {
  const instructions = paymentInstructions(reservation, reference);
  if (reservation.lang === "en") {
    return {
      subject: `Your raffle reservation ${reference}`,
      paragraphs: [
        `Hello ${reservation.name},`,
        `We have received your reservation for ${reservation.quantity} raffle ticket(s). Your reference is ${reference}.`,
        instructions,
        "Once you have paid, reply to this email with your proof of payment. Your ticket number(s) will be sent to you after we have checked your payment.",
        "Thank you for supporting the Diaka Camara Foundation.",
      ],
    };
  }
  return {
    subject: `Votre réservation de tombola ${reference}`,
    paragraphs: [
      `Bonjour ${reservation.name},`,
      `Nous avons bien reçu votre réservation de ${reservation.quantity} ticket(s) de tombola. Votre référence est ${reference}.`,
      instructions,
      "Une fois le paiement effectué, répondez à cet e-mail avec votre preuve de paiement. Votre ou vos numéros de ticket vous seront envoyés après vérification.",
      "Merci de votre soutien à la Fondation Diaka Camara.",
    ],
  };
}

function ticketEmail(name, reference, numbers, lang) {
  const list = numbers.join(", ");
  if (lang === "en") {
    return {
      subject: `Your raffle ticket(s): ${list}`,
      paragraphs: [
        `Hello ${name},`,
        `We have confirmed your payment for reservation ${reference}.`,
        `Your ticket number(s): ${list}`,
        "Please keep this email: it is proof of your entry in the Diaka Camara Foundation charity raffle.",
        "Thank you, and good luck!",
      ],
    };
  }
  return {
    subject: `Votre ou vos tickets de tombola : ${list}`,
    paragraphs: [
      `Bonjour ${name},`,
      `Nous avons bien confirmé votre paiement pour la réservation ${reference}.`,
      `Votre ou vos numéros de ticket : ${list}`,
      "Conservez bien cet e-mail : il atteste de votre participation à la tombola solidaire de la Fondation Diaka Camara.",
      "Merci, et bonne chance !",
    ],
  };
}
