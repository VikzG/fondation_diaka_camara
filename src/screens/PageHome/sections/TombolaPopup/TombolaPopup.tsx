import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useTranslation } from "../../../../lib/i18n";
import { reservationsClosed, TOMBOLA_BACKGROUND } from "../../../PageTombola/lots";

// Passer à false après le tirage pour retirer le pop-up de l'accueil
const POPUP_ACTIVE = true;
const OPEN_DELAY_MS = 1500;
const DISMISSED_KEY = "tombola-popup-vu";

const content = {
  fr: {
    edition: "African Royalty 2026",
    title: "La tombola solidaire",
    tagline: "Des lots d'exception. Une chance de gagner. Une belle cause à soutenir.",
    price: "Prix du ticket : 100 USD",
    button: "Découvrir les lots",
    close: "Fermer",
  },
  en: {
    edition: "African Royalty 2026",
    title: "The charity raffle",
    tagline: "Exceptional prizes. A chance to win. A worthy cause to support.",
    price: "Ticket price: 100 USD",
    button: "Discover the prizes",
    close: "Close",
  },
};

const wasDismissed = (): boolean => {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
};

const rememberDismissal = () => {
  try {
    sessionStorage.setItem(DISMISSED_KEY, "1");
  } catch {
    // Stockage indisponible : le pop-up pourra simplement réapparaître
  }
};

export const TombolaPopup = (): JSX.Element | null => {
  const t = useTranslation(content);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Une seule fois par visite, et après l'affichage de la page
  useEffect(() => {
    if (!POPUP_ACTIVE || reservationsClosed() || wasDismissed()) return;
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    rememberDismissal();
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Rendu directement dans le body : la page d'accueil est animée et le fond ne couvrirait pas le menu
  return createPortal(
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {open && (
          <motion.div
            key="tombola-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="tombola-popup-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              style={{ backgroundImage: TOMBOLA_BACKGROUND }}
              className="relative flex max-h-full w-full max-w-lg flex-col items-center gap-4 overflow-y-auto rounded-2xl bg-licorice bg-cover bg-center px-6 py-10 text-center text-vanilla shadow-2xl sm:px-10"
            >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={t.close}
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-vanilla transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-vanilla"
        >
          <X size={24} />
        </button>
        <div className="font-legendes-bold text-sm uppercase tracking-[0.2em]">{t.edition}</div>
        <h2 id="tombola-popup-title" className="font-[beautique-display-bold] text-4xl uppercase leading-tight sm:text-5xl">
          {t.title}
        </h2>
        <p className="font-[beautique-display] text-2xl leading-snug">{t.tagline}</p>
        <p className="font-corps font-bold">{t.price}</p>
        <Link
          to="/tombola"
          onClick={rememberDismissal}
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-pumpkin px-8 py-3 text-center font-corps font-extrabold text-vanilla transition-all duration-300 hover:-translate-y-0.5 hover:underline"
        >
          {t.button}
        </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>,
    document.body,
  );
};
