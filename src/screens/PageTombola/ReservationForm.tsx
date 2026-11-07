import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  InfoRow,
  ORANGE_MONEY,
  PAYPAL_URL,
  useDonationMethods,
  ZELLE,
  type DonationMethodId,
} from "../../components/DonationMethods";
import { reservationsClosed } from "./lots";
import { useLanguage, useTranslation } from "../../lib/i18n";

// Application Web Google Apps Script reliée au Google Sheet de la tombola (voir tombola_apps_script/Code.gs)
const RESERVATION_URL =
  "https://script.google.com/macros/s/AKfycbz0obBjb-gYUVwBmjWqe4CKZjhEMmI8n3VtBRhTYq23Ms3u7Vwdi1GMjzvANMM-hmoz/exec";
const TOMBOLA_EMAIL = "tombola.fondationdiakacamara@gmail.com";
const TICKET_PRICE_USD = 100;
const TICKET_PRICE_GNF = 880000; // conversion arrondie de 100 USD, à garder identique dans Code.gs
const MAX_TICKETS = 20;

const content = {
  fr: {
    title: "Réserver mes tickets",
    intro: "Remplissez ce formulaire : vous recevrez votre référence et les instructions de paiement. Vos numéros de ticket vous seront envoyés par e-mail après vérification de votre paiement.",
    name: "Nom et prénom",
    email: "Adresse e-mail",
    emailHint: "Vérifiez bien votre adresse : votre ticket y sera envoyé.",
    phone: "Téléphone",
    quantity: "Nombre de tickets",
    total: "Total",
    method: "Moyen de paiement",
    privacy: "Vos coordonnées servent uniquement à gérer votre participation à la tombola.",
    submit: "Réserver mes tickets",
    sending: "Envoi en cours...",
    errorTooMany: "Plusieurs réservations ont déjà été faites avec cette adresse. Merci de réessayer dans une heure.",
    errorClosed: "La vente des tickets est terminée depuis 23 h (heure de Conakry).",
    errorGeneric: "La réservation n'a pas pu être envoyée. Vérifiez vos informations et réessayez, ou écrivez-nous à",
    doneTitle: "Votre réservation est enregistrée",
    payNowTitle: "Dernière étape : effectuez votre paiement",
    spamWarning: "Nos e-mails peuvent arriver dans vos courriers indésirables (spams) : pensez à les vérifier.",
    payNowText: "Votre ticket n'est pas encore validé. Réglez le montant ci-dessous avec le moyen de paiement choisi : vos numéros de ticket vous seront envoyés par e-mail dès réception du paiement.",
    reference: "Votre référence",
    tickets: (quantity: number, total: number) => `${quantity} ticket${quantity > 1 ? "s" : ""}, soit ${total} USD`,
    emailSent: "Ces instructions vous ont aussi été envoyées par e-mail. Pensez à vérifier vos courriers indésirables.",
    emailFailed: "L'e-mail de confirmation n'a pas pu être envoyé : notez bien votre référence.",
    payWithPaypal: (total: number) => `Payer ${total} USD avec PayPal`,
    paypalOpened: "Cliquez sur ce bouton pour payer avec PayPal :",
    paypalNote: "Indiquez votre référence dans la note du paiement si PayPal vous le propose.",
    orangeNote: "Depuis Orange Money, scannez le QR code ou utilisez le code marchand ci-dessous, puis réglez ce montant.",
    orangeNoteCode: "Depuis Orange Money, réglez ce montant au code marchand ci-dessous.",
    orangeQrAlt: "QR code Orange Money de la Fondation Diaka Camara",
    zelleNote: "Depuis votre application bancaire compatible Zelle, indiquez votre référence dans la note du paiement.",
    account: "Nom du compte",
    merchantCode: "Code marchand",
    number: "Numéro",
    recipient: "Bénéficiaire",
    zelleEmail: "Adresse e-mail",
    amount: "Montant",
    proof: "Une fois le paiement effectué, vous pouvez nous aider à le retrouver en envoyant votre preuve de paiement et votre référence à",
    again: "Faire une autre réservation",
  },
  en: {
    title: "Reserve my tickets",
    intro: "Fill in this form to receive your reference and payment instructions. Your ticket numbers will be emailed to you once we have checked your payment.",
    name: "Full name",
    email: "Email address",
    emailHint: "Please check your address carefully: your ticket will be sent there.",
    phone: "Phone",
    quantity: "Number of tickets",
    total: "Total",
    method: "Payment method",
    privacy: "Your details are only used to manage your entry in the raffle.",
    submit: "Reserve my tickets",
    sending: "Sending...",
    errorTooMany: "Several reservations have already been made with this address. Please try again in an hour.",
    errorClosed: "Ticket sales closed at 11 pm (Conakry time).",
    errorGeneric: "Your reservation could not be sent. Please check your details and try again, or write to us at",
    doneTitle: "Your reservation has been recorded",
    payNowTitle: "Final step: make your payment",
    spamWarning: "Our emails may land in your spam folder: please check it.",
    payNowText: "Your ticket is not confirmed yet. Pay the amount below with the payment method you chose: your ticket numbers will be emailed to you as soon as your payment is received.",
    reference: "Your reference",
    tickets: (quantity: number, total: number) => `${quantity} ticket${quantity > 1 ? "s" : ""}, ${total} USD in total`,
    emailSent: "These instructions have also been emailed to you. Please check your spam folder.",
    emailFailed: "The confirmation email could not be sent: please make a note of your reference.",
    payWithPaypal: (total: number) => `Pay ${total} USD with PayPal`,
    paypalOpened: "Click this button to pay with PayPal:",
    paypalNote: "Please include your reference in the payment note if PayPal offers this option.",
    orangeNote: "In Orange Money, scan the QR code or use the merchant code below, then pay this amount.",
    orangeNoteCode: "In Orange Money, pay this amount to the merchant code below.",
    orangeQrAlt: "Diaka Camara Foundation Orange Money QR code",
    zelleNote: "In your Zelle-enabled banking app, please include your reference in the payment note.",
    account: "Account name",
    merchantCode: "Merchant code",
    number: "Number",
    recipient: "Recipient",
    zelleEmail: "Email address",
    amount: "Amount",
    proof: "Once you have paid, you can help us find your payment by sending your proof of payment and your reference to",
    again: "Make another reservation",
  },
};

interface Reservation {
  reference: string;
  quantity: number;
  method: DonationMethodId;
  emailSent: boolean;
}

const formatGnf = (amount: number) => amount.toString().replace(/\B(?=(\d{3})+$)/g, " ");

const fieldClass =
  "w-full min-h-[44px] rounded-xl border-2 border-colbat/30 bg-white px-3 text-licorice focus:border-colbat focus:outline-none focus:ring-2 focus:ring-colbat";
const labelClass = "font-bold text-licorice";

const ReservationDone = ({
  reservation,
  onReset,
}: {
  reservation: Reservation;
  onReset: () => void;
}): JSX.Element => {
  const t = useTranslation(content);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { reference, quantity, method, emailSent } = reservation;
  const total = quantity * TICKET_PRICE_USD;

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  return (
    <div className="flex w-full max-w-[560px] flex-col items-center gap-4 rounded-2xl bg-antiflash/60 p-6 text-center font-corps sm:p-8">
      <h3 ref={titleRef} tabIndex={-1} className="font-[beautique-display] text-3xl text-colbat focus:outline-none">
        {t.doneTitle}
      </h3>
      <p className="text-licorice">{t.tickets(quantity, total)}</p>
      <div className="flex w-full flex-col gap-1 rounded-xl border-2 border-pumpkin bg-white p-4">
        <p className="font-extrabold text-licorice">{t.payNowTitle}</p>
        <p className="text-sm text-licorice">{t.payNowText}</p>
        <p className="text-sm font-bold text-carmin">{t.spamWarning}</p>
      </div>
      <InfoRow label={t.reference} value={reference} copyable />

      {method === "paypal" && (
        <>
          <p className="text-sm text-licorice">{t.paypalOpened}</p>
          <a
            href={`${PAYPAL_URL}/${total}USD`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-colbat px-8 py-3 text-lg font-bold text-white shadow transition hover:scale-105"
          >
            {t.payWithPaypal(total)}
            <ExternalLink size={18} />
          </a>
          <p className="text-sm text-licorice">{t.paypalNote}</p>
        </>
      )}

      {method === "orange" && (
        <>
          {ORANGE_MONEY.qrCode && <p className="hidden text-licorice md:block">{t.orangeNote}</p>}
          <p className={`text-licorice ${ORANGE_MONEY.qrCode ? "md:hidden" : ""}`}>{t.orangeNoteCode}</p>
          <InfoRow label={t.amount} value={`${formatGnf(quantity * TICKET_PRICE_GNF)} GNF`} />
          {/* Sur téléphone, on ne peut pas scanner son propre écran : le code marchand suffit */}
          {ORANGE_MONEY.qrCode && (
            <img src={ORANGE_MONEY.qrCode} alt={t.orangeQrAlt} className="hidden h-48 w-48 object-contain md:block" />
          )}
          <InfoRow label={t.account} value={ORANGE_MONEY.account} />
          <InfoRow label={t.merchantCode} value={ORANGE_MONEY.merchantCode} copyable />
          <InfoRow label={t.number} value={ORANGE_MONEY.number} copyable />
        </>
      )}

      {method === "zelle" && (
        <>
          <p className="text-licorice">{t.zelleNote}</p>
          <InfoRow label={t.recipient} value={ZELLE.recipient} />
          <InfoRow label={t.amount} value={`${total} USD`} />
          <InfoRow label={t.zelleEmail} value={ZELLE.email} copyable />
        </>
      )}

      <p className="text-sm text-licorice">
        {t.proof}{" "}
        <a href={`mailto:${TOMBOLA_EMAIL}`} className="break-all font-bold text-colbat underline">
          {TOMBOLA_EMAIL}
        </a>
      </p>
      <p className="text-sm font-bold text-licorice">{emailSent ? t.emailSent : t.emailFailed}</p>
      <button type="button" onClick={onReset} className="min-h-[44px] font-bold text-colbat underline">
        {t.again}
      </button>
    </div>
  );
};

export const ReservationForm = (): JSX.Element => {
  const t = useTranslation(content);
  const { lang } = useLanguage();
  const methods = useDonationMethods();
  const id = useId();
  const [quantity, setQuantity] = useState(1);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<"too_many" | "generic" | "closed" | null>(null);
  const [reservation, setReservation] = useState<Reservation | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    if (reservationsClosed()) {
      setError("closed");
      return;
    }

    const form = new FormData(event.currentTarget);
    const method = form.get("method") as DonationMethodId;
    setSending(true);
    setError(null);

    try {
      // Le format texte évite la requête préalable que Google Apps Script refuse
      const response = await fetch(RESERVATION_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          website: form.get("website"),
          quantity,
          method,
          lang,
        }),
      });
      const result = await response.json();

      if (result.ok && result.reference) {
        setReservation({ reference: result.reference, quantity, method, emailSent: result.emailSent });
      } else {
        setError(result.error === "too_many" ? "too_many" : "generic");
      }
    } catch {
      setError("generic");
    } finally {
      setSending(false);
    }
  };

  if (reservation) {
    return (
      <ReservationDone
        reservation={reservation}
        onReset={() => {
          setReservation(null);
          setQuantity(1);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[560px] flex-col gap-4 rounded-2xl bg-antiflash/60 p-6 text-left font-corps sm:p-8">
      <h3 className="text-center font-[beautique-display] text-3xl text-licorice">{t.title}</h3>
      <p className="text-center text-sm leading-6 text-licorice">{t.intro}</p>

      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-name`} className={labelClass}>{t.name}</label>
        <input id={`${id}-name`} name="name" required maxLength={120} autoComplete="name" className={fieldClass} />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-email`} className={labelClass}>{t.email}</label>
        <input id={`${id}-email`} name="email" type="email" required maxLength={200} autoComplete="email" aria-describedby={`${id}-email-hint`} className={fieldClass} />
        <p id={`${id}-email-hint`} className="text-sm text-licorice/80">{t.emailHint}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-phone`} className={labelClass}>{t.phone}</label>
        <input id={`${id}-phone`} name="phone" type="tel" required maxLength={40} autoComplete="tel" className={fieldClass} />
      </div>

      {/* Champ invisible pour les humains : seuls les robots le remplissent */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] h-px w-px" />

      <div className="flex flex-col gap-1">
        <label htmlFor={`${id}-quantity`} className={labelClass}>{t.quantity}</label>
        <select
          id={`${id}-quantity`}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className={fieldClass}
        >
          {Array.from({ length: MAX_TICKETS }, (_, index) => index + 1).map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </select>
      </div>
      <p className="font-bold text-colbat">
        {t.total} : {quantity * TICKET_PRICE_USD} USD
      </p>

      <fieldset className="flex flex-col gap-2">
        <legend className={`mb-1 ${labelClass}`}>{t.method}</legend>
        {methods.map((method) => (
          <label key={method.id} className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-xl bg-white px-3 font-bold text-colbat">
            <input type="radio" name="method" value={method.id} required className="h-5 w-5 accent-colbat" />
            {method.title}
          </label>
        ))}
      </fieldset>

      <p className="text-xs text-licorice/80">{t.privacy}</p>

      <button
        type="submit"
        disabled={sending}
        className="min-h-[48px] rounded-xl bg-pumpkin px-6 py-3 font-extrabold text-vanilla transition-all duration-300 hover:underline disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? t.sending : t.submit}
      </button>

      <div aria-live="polite" className="text-center text-sm font-bold text-carmin">
        {error === "too_many" && t.errorTooMany}
        {error === "closed" && t.errorClosed}
        {error === "generic" && (
          <>
            {t.errorGeneric}{" "}
            <a href={`mailto:${TOMBOLA_EMAIL}`} className="break-all underline">{TOMBOLA_EMAIL}</a>
          </>
        )}
      </div>
    </form>
  );
};
