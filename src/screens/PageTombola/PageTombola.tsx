import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowLeft } from "lucide-react";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection";
import { useLanguage, useTranslation } from "../../lib/i18n";
import { lots, RESERVATIONS_OPEN, type Lot } from "./lots";
import { ReservationForm } from "./ReservationForm";

const content = {
  fr: {
    title: "LA TOMBOLA SOLIDAIRE",
    edition: "AFRICAN ROYALTY 2026",
    tagline: "Des lots d'exception. Une chance de gagner. Une belle cause à soutenir.",
    price: "Prix du ticket : 100 USD",
    lotsTitle: "Les lots à gagner",
    lotsNote: "Les lots ne sont pas vendus : chaque ticket vous donne une chance de les remporter lors du tirage au sort.",
    lotNumber: "LOT N°",
    featured: "À la une",
    offeredBy: "Offert par :",
    seeLot: "Voir le lot",
    aboutTitle: "Participer à la tombola",
    about1: "À l'occasion de l'African Royalty Gala 2026, la Fondation Diaka Camara vous invite à participer à sa tombola solidaire.",
    about2: "En achetant un ticket à 100 USD, vous prenez part à une initiative destinée à soutenir les programmes éducatifs et sociaux de la Fondation, tout en ayant la possibilité de remporter l'un des lots mis en jeu.",
    about3: "Chaque participation contribue à faire avancer notre engagement en faveur des jeunes filles et des communautés que nous accompagnons.",
    buy: "Réserver mon ticket de tombola",
    buyShort: "Réserver un ticket — 100 USD",
    soon: "Vente des tickets bientôt ouverte",
    backToLots: "Tous les lots",
    conditions: "Conditions",
    photo: "Photo",
  },
  en: {
    title: "THE CHARITY RAFFLE",
    edition: "AFRICAN ROYALTY 2026",
    tagline: "Exceptional prizes. A chance to win. A worthy cause to support.",
    price: "Ticket price: 100 USD",
    lotsTitle: "The prizes to win",
    lotsNote: "The prizes are not for sale: each ticket gives you a chance to win them in the prize draw.",
    lotNumber: "PRIZE NO. ",
    featured: "Featured",
    offeredBy: "Offered by:",
    seeLot: "See the prize",
    aboutTitle: "Take part in the raffle",
    about1: "On the occasion of the African Royalty Gala 2026, the Diaka Camara Foundation invites you to take part in its charity raffle.",
    about2: "By buying a ticket for 100 USD, you take part in an initiative that supports the Foundation's educational and social programmes, while having the chance to win one of the prizes.",
    about3: "Every entry helps advance our commitment to the girls and communities we support.",
    buy: "Reserve my raffle ticket",
    buyShort: "Reserve a ticket — 100 USD",
    soon: "Ticket sales opening soon",
    backToLots: "All prizes",
    conditions: "Conditions",
    photo: "Photo",
  },
};

// Lots affichés : sans les lots masqués, et avec les lots mis en avant en premier
const visibleLots = lots
  .filter((lot) => !lot.hidden)
  .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

const BuyButton = ({ label, className = "" }: { label: string; className?: string }): JSX.Element => {
  const t = useTranslation(content);
  const base = "inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl font-extrabold text-center";

  if (!RESERVATIONS_OPEN) {
    return <span className={`${base} bg-gray-300 text-gray-600 cursor-not-allowed ${className}`}>{t.soon}</span>;
  }

  return (
    <HashLink
      smooth
      to="/tombola#reserver"
      className={`${base} bg-pumpkin text-vanilla transition-all duration-300 hover:underline hover:-translate-y-0.5 ${className}`}
    >
      {label}
    </HashLink>
  );
};

const LotCard = ({ lot, index }: { lot: Lot; index: number }): JSX.Element => {
  const t = useTranslation(content);
  const { lang } = useLanguage();

  return (
    <Link
      to={`/tombola/${lot.id}`}
      state={{ fromList: true }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square overflow-hidden bg-white" style={{ backgroundColor: lot.imageBackground }}>
        <img
          src={lot.images[0]}
          alt={lot.name[lang]}
          // Seuls les premiers visuels sont chargés d'emblée : la page reste rapide au scan du QR code
          loading={index < 2 ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {lot.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-carmin px-3 py-1 text-xs font-bold uppercase tracking-wide text-vanilla">
            {t.featured}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="font-legendes-bold text-sm tracking-widest text-pumpkin">
          {t.lotNumber}
          {lot.number}
        </div>
        <h3 className="font-[beautique-display] text-2xl text-licorice">{lot.name[lang]}</h3>
        <p className="flex-1 font-corps text-sm leading-6 text-licorice/80">{lot.shortDescription[lang]}</p>
        {lot.partner && (
          <p className="font-corps text-sm text-licorice/70">
            {t.offeredBy} <span className="font-bold">{lot.partner}</span>
          </p>
        )}
        <span className="mt-1 font-corps font-bold text-colbat group-hover:underline">{t.seeLot} →</span>
      </div>
    </Link>
  );
};

// La fiche s'ouvre par-dessus la liste : au retour, le visiteur retrouve sa position dans la galerie
const LotDetails = ({ lot }: { lot: Lot }): JSX.Element => {
  const t = useTranslation(content);
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const titleId = `${lot.id}-title`;

  const close = () => {
    if ((location.state as { fromList?: boolean } | null)?.fromList) {
      navigate(-1);
    } else {
      navigate("/tombola", { replace: true });
    }
  };

  useEffect(() => {
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-30 overflow-y-auto bg-vanilla pb-28 pt-[72px] min-[1200px]:pb-12 min-[1200px]:pt-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-4 sm:px-6">
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          className="inline-flex min-h-[44px] w-fit items-center gap-2 rounded-lg font-corps font-bold text-colbat hover:underline"
        >
          <ArrowLeft size={20} />
          {t.backToLots}
        </button>

        <div className="grid gap-8 min-[900px]:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="aspect-square overflow-hidden rounded-2xl bg-white" style={{ backgroundColor: lot.imageBackground }}>
              <img
                src={lot.images[activeImage]}
                alt={lot.name[lang]}
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
            {lot.images.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {lot.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`${t.photo} ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeImage === index ? "border-pumpkin" : "border-transparent"
                    }`}
                  >
                    <img src={image} alt="" decoding="async" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-legendes-bold tracking-widest text-pumpkin">
              {t.lotNumber}
              {lot.number}
            </div>
            <h2 id={titleId} className="font-[beautique-display] text-4xl text-licorice">
              {lot.name[lang]}
            </h2>
            <p className="font-corps leading-7 text-licorice">
              {lot.description ? lot.description[lang] : lot.shortDescription[lang]}
            </p>
            {(lot.partner || lot.partnerLogo) && (
              <div className="flex items-center gap-3 font-corps text-licorice">
                <span>{t.offeredBy}</span>
                {lot.partnerLogo && (
                  <img src={lot.partnerLogo} alt={lot.partner ?? ""} className="max-h-12 max-w-[120px] object-contain" />
                )}
                {lot.partner && <span className="font-bold">{lot.partner}</span>}
              </div>
            )}
            {lot.conditions && (
              <div className="rounded-xl bg-antiflash p-4 font-corps text-sm leading-6 text-licorice">
                <div className="mb-1 font-bold">{t.conditions}</div>
                {lot.conditions[lang]}
              </div>
            )}
            <p className="font-corps text-sm text-licorice/70">{t.lotsNote}</p>
            <div className="hidden flex-col gap-2 min-[1200px]:flex">
              <BuyButton label={t.buyShort} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PageTombola = (): JSX.Element => {
  const t = useTranslation(content);
  const { lotId } = useParams();
  const selectedLot = visibleLots.find((lot) => lot.id === lotId);

  if (lotId && !selectedLot) {
    return <Navigate to="/tombola" replace />;
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-vanilla pb-20 min-[1200px]:pb-0">
      {/* En-tête court : au scan du QR code, les lots doivent apparaître tout de suite */}
      <header className="flex flex-col items-center gap-3 bg-licorice px-6 pb-8 pt-24 text-center text-vanilla min-[1200px]:gap-4 min-[1200px]:pb-12 min-[1200px]:pt-32">
        <h1 className="font-[beautique-display-bold] text-3xl leading-tight min-[1200px]:text-5xl">{t.title}</h1>
        <div className="font-legendes-bold tracking-[0.2em] text-pumpkin">{t.edition}</div>
        <p className="max-w-2xl font-[beautique-display] text-xl min-[1200px]:text-3xl">{t.tagline}</p>
        <p className="font-corps font-bold">{t.price}</p>
        <div className="hidden flex-col items-center gap-2 min-[1200px]:flex">
          <BuyButton label={t.buy} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="font-[beautique-display] text-3xl text-carmin min-[1200px]:text-4xl">{t.lotsTitle}</h2>
          <p className="max-w-2xl font-corps text-sm text-licorice">{t.lotsNote}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleLots.map((lot, index) => (
            <LotCard key={lot.id} lot={lot} index={index} />
          ))}
        </div>
      </main>

      <section className="flex flex-col items-center gap-4 bg-white px-6 py-12 text-center">
        <h2 className="font-[beautique-display] text-3xl text-licorice">{t.aboutTitle}</h2>
        <div className="flex max-w-3xl flex-col gap-3 font-corps leading-7 text-licorice">
          <p>{t.about1}</p>
          <p>{t.about2}</p>
          <p>{t.about3}</p>
        </div>
        {RESERVATIONS_OPEN ? (
          <div id="reserver" className="flex w-full scroll-mt-24 justify-center">
            <ReservationForm />
          </div>
        ) : (
          <BuyButton label={t.buy} />
        )}
      </section>

      <FooterSubsection />

      {selectedLot && <LotDetails key={selectedLot.id} lot={selectedLot} />}

      {/* Bouton d'achat toujours accessible sur mobile, y compris depuis une fiche */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-licorice/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-2px_8px_#00000040] min-[1200px]:hidden">
        <BuyButton label={t.buyShort} className="w-full" />
      </div>
    </div>
  );
};
