import { useId, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useLanguage, useTranslation } from "../lib/i18n";

export const PAYPAL_URL = "https://www.paypal.me/diakacamara1";
export const CONTACT_EMAIL = "contact@fondationdiakacamara.org";

// Repasser à false pour masquer le QR code si le test dans l'application Orange Money échoue
const ORANGE_QR_VERIFIED = true;

export const ORANGE_MONEY = {
  account: "Fondation Diaka Camara",
  merchantCode: "691560",
  number: "613125478",
  qrCode: ORANGE_QR_VERIFIED ? "/paiements/qr_orange_money.svg" : "",
};

export const ZELLE = {
  email: "diakacamara@live.com",
  recipient: "Diaka Camara",
};

export type DonationMethodId = "paypal" | "orange" | "zelle";

const PRESET_AMOUNTS = [1000, 500, 100, 50];

const content = {
  fr: {
    panelTitle: "Faites un don",
    chooseAmount: "Choisissez un montant",
    customAmount: "Montant personnalisé",
    enterAmount: "Entrez le montant",
    chooseMethod: "Choisissez un moyen de paiement",
    donationAmount: "Montant de votre don",
    paypalAmountButton: (amount: number) => `Donner ${amount} USD avec PayPal`,
    copy: "Copier",
    copied: "Copié !",
    paypalText: "Faites votre don en quelques clics sur la page sécurisée de PayPal.",
    paypalButton: "Donner avec PayPal",
    orangeText: "Depuis Orange Money, réglez au code marchand ci-dessous en indiquant le montant de votre don.",
    account: "Nom du compte",
    merchantCode: "Code marchand",
    number: "Numéro",
    qrAlt: "QR code Orange Money de la Fondation Diaka Camara",
    zelleText: "Depuis votre application bancaire compatible Zelle (États-Unis), envoyez votre don à l'adresse ci-dessous.",
    email: "Adresse e-mail",
    recipient: "Bénéficiaire",
    receipt: "Pour recevoir votre reçu, envoyez-nous votre nom et le montant de votre don à",
  },
  en: {
    panelTitle: "Make a donation",
    chooseAmount: "Choose an amount",
    customAmount: "Custom amount",
    enterAmount: "Enter the amount",
    chooseMethod: "Choose a payment method",
    donationAmount: "Your donation amount",
    paypalAmountButton: (amount: number) => `Donate ${amount} USD with PayPal`,
    copy: "Copy",
    copied: "Copied!",
    paypalText: "Make your donation in a few clicks on PayPal's secure page.",
    paypalButton: "Donate with PayPal",
    orangeText: "In Orange Money, pay the merchant code below and enter the amount of your donation.",
    account: "Account name",
    merchantCode: "Merchant code",
    number: "Number",
    qrAlt: "Diaka Camara Foundation Orange Money QR code",
    zelleText: "In your Zelle-enabled banking app (United States), send your donation to the address below.",
    email: "Email address",
    recipient: "Recipient",
    receipt: "To receive your receipt, send us your name and the amount of your donation at",
  },
};

const methodTitles: Record<"fr" | "en", Record<DonationMethodId, string>> = {
  fr: { paypal: "PayPal", orange: "Orange Money", zelle: "Zelle" },
  en: { paypal: "PayPal", orange: "Orange Money", zelle: "Zelle" },
};

export const useDonationMethods = (): { id: DonationMethodId; title: string }[] => {
  const { lang } = useLanguage();
  const titles = methodTitles[lang];
  return [
    { id: "paypal", title: titles.paypal },
    { id: "orange", title: titles.orange },
    { id: "zelle", title: titles.zelle },
  ];
};

const copyToClipboard = async (value: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    // Navigateurs sans accès au presse-papiers : on passe par une sélection temporaire
    const field = document.createElement("textarea");
    field.value = value;
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    return copied;
  }
};

export const InfoRow = ({
  label,
  value,
  copyable = false,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}): JSX.Element => {
  const t = useTranslation(content);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (await copyToClipboard(value)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 w-full rounded-xl bg-antiflash px-4 py-3 text-left">
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wide text-colbat">{label}</div>
        <div className="font-bold text-licorice break-all">{value}</div>
      </div>
      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`${t.copy} : ${label}`}
          className="flex shrink-0 items-center gap-1.5 min-h-[44px] px-3 rounded-lg bg-colbat text-white text-sm font-bold transition-colors hover:bg-blue-700"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span aria-live="polite">{copied ? t.copied : t.copy}</span>
        </button>
      )}
    </div>
  );
};

const ReceiptNote = (): JSX.Element => {
  const t = useTranslation(content);
  return (
    <p className="text-sm text-licorice/80 text-center">
      {t.receipt}{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-colbat underline break-all">
        {CONTACT_EMAIL}
      </a>
    </p>
  );
};

export const DonationAmountPicker = ({
  amount,
  onChange,
}: {
  amount: number | null;
  onChange: (amount: number | null) => void;
}): JSX.Element => {
  const t = useTranslation(content);
  const [showCustom, setShowCustom] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const inputId = useId();

  const selectPreset = (preset: number) => {
    setShowCustom(false);
    setCustomValue("");
    onChange(preset);
  };

  const openCustom = () => {
    setShowCustom(true);
    onChange(null);
  };

  const handleCustomChange = (value: string) => {
    setCustomValue(value);
    const parsed = Number(value);
    onChange(Number.isFinite(parsed) && parsed > 0 ? parsed : null);
  };

  return (
    <div className="flex flex-col gap-3 w-full font-corps">
      <div className="font-bold text-colbat text-center">{t.chooseAmount}</div>
      <div className="grid grid-cols-2 gap-2">
        {PRESET_AMOUNTS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => selectPreset(preset)}
            aria-pressed={!showCustom && amount === preset}
            className={`min-h-[44px] px-2 rounded-xl font-bold text-lg transition-colors ${
              !showCustom && amount === preset
                ? "bg-colbat text-white"
                : "bg-antiflash text-colbat hover:bg-blue-100"
            }`}
          >
            {preset}$
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={openCustom}
        aria-pressed={showCustom}
        className={`min-h-[44px] px-2 rounded-xl font-bold transition-colors ${
          showCustom ? "bg-colbat text-white" : "bg-antiflash text-colbat hover:bg-blue-100"
        }`}
      >
        {t.customAmount}
      </button>
      {showCustom && (
        <div className="flex items-center gap-2">
          <label htmlFor={inputId} className="sr-only">
            {t.enterAmount}
          </label>
          <input
            id={inputId}
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={customValue}
            onChange={(event) => handleCustomChange(event.target.value)}
            placeholder={t.enterAmount}
            className="min-w-0 flex-1 min-h-[44px] px-3 rounded-xl border-2 border-colbat bg-white text-licorice focus:outline-none focus:ring-2 focus:ring-colbat"
          />
          <span className="font-bold text-colbat">$</span>
        </div>
      )}
    </div>
  );
};

export const DonationMethodDetails = ({
  method,
  amount = null,
  showTitle = true,
}: {
  method: DonationMethodId;
  amount?: number | null;
  showTitle?: boolean;
}): JSX.Element => {
  const t = useTranslation(content);
  const titles = methodTitles[useLanguage().lang];

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-[560px] p-6 sm:p-8 bg-white rounded-2xl shadow-md font-corps">
      {showTitle && (
        <h3 className="font-[beautique-display] text-3xl text-colbat text-center">{titles[method]}</h3>
      )}

      {method === "paypal" && (
        <>
          <p className="text-licorice text-center">{t.paypalText}</p>
          <a
            href={amount ? `${PAYPAL_URL}/${amount}USD` : PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-3 rounded-xl bg-colbat text-white font-bold text-lg shadow transition hover:scale-105"
          >
            {amount ? t.paypalAmountButton(amount) : t.paypalButton}
            <ExternalLink size={18} />
          </a>
        </>
      )}

      {method === "orange" && (
        <>
          <p className="text-licorice text-center">{t.orangeText}</p>
          {/* Sur téléphone, on ne peut pas scanner son propre écran : le code marchand suffit */}
          {ORANGE_MONEY.qrCode && (
            <img
              src={ORANGE_MONEY.qrCode}
              alt={t.qrAlt}
              className="hidden md:block w-48 h-48 object-contain"
            />
          )}
          <InfoRow label={t.account} value={ORANGE_MONEY.account} />
          <InfoRow label={t.merchantCode} value={ORANGE_MONEY.merchantCode} copyable />
          <InfoRow label={t.number} value={ORANGE_MONEY.number} copyable />
          <ReceiptNote />
        </>
      )}

      {method === "zelle" && (
        <>
          <p className="text-licorice text-center">{t.zelleText}</p>
          <InfoRow label={t.recipient} value={ZELLE.recipient} />
          {amount && <InfoRow label={t.donationAmount} value={`${amount} USD`} />}
          <InfoRow label={t.email} value={ZELLE.email} copyable />
          <ReceiptNote />
        </>
      )}
    </div>
  );
};

// Version compacte pour le slider de l'accueil
export default function DonationPanel(): JSX.Element {
  const t = useTranslation(content);
  const methods = useDonationMethods();
  const [selected, setSelected] = useState<DonationMethodId>("paypal");
  const [amount, setAmount] = useState<number | null>(null);

  return (
    // Avec un QR code, le panneau dépasse la hauteur du slider : il défile alors à l'intérieur de son cadre
    <div className="flex flex-col items-center gap-5 w-full max-w-[600px] max-h-[80vh] overflow-y-auto p-6 bg-white/50 backdrop-blur-md rounded-3xl shadow-2xl">
      <h3 className="font-[beautique-display] text-4xl text-gray-800 text-center">{t.panelTitle}</h3>
      <DonationAmountPicker amount={amount} onChange={setAmount} />
      <div className="font-corps font-bold text-colbat text-center">{t.chooseMethod}</div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => setSelected(method.id)}
            aria-pressed={selected === method.id}
            className={`min-h-[44px] px-2 rounded-xl font-bold transition-colors ${
              selected === method.id
                ? "bg-colbat text-white"
                : "bg-antiflash text-colbat hover:bg-blue-100"
            }`}
          >
            {method.title}
          </button>
        ))}
      </div>
      <DonationMethodDetails method={selected} amount={amount} showTitle={false} />
    </div>
  );
}
