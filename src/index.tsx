import { StrictMode, useEffect, useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Routes, Route, useLocation } from "react-router-dom";

import PageTransition from "./components/PageTransition";
import { LanguageProvider } from "./lib/i18n";
import { TopBarSubsection } from "./screens/PageHome/sections/TopBarSubsection/TopBarSubsection";

import { PageHome } from "./screens/PageHome/PageHome";
import { PageDon } from "./screens/PageDon/PageDon";
import { PageEquipe } from "./screens/PageEquipe/PageEquipe";
import { PageFondatrice } from "./screens/PageFondatrice/PageFondatrice";
import { PageCercle } from "./screens/PageCercle/PageCercle";
import { PageNotFound } from "./screens/PageNotFound/PageNotFound";
import { PageGala } from "./screens/PageGala/PageGala";
import { PageTombola } from "./screens/PageTombola/PageTombola";

// Pages qui affichent la barre de navigation (la page 404 n'en a pas)
const PAGES_WITH_TOPBAR = ["/", "/don", "/equipe", "/fondatrice", "/cercle", "/gala2026"];

// Grandes images du haut de chaque page, préchargées en arrière-plan
// pour qu'elles soient prêtes au moment du changement de page
const HERO_IMAGES = [
  "/slider_section_1/img_slide_1.webp",
  "/donation_section/don_bg.webp",
  "/page_equipe_section/presidente.webp",
  "/page_presidente_section/banner_presidente.webp",
  "/cercle_section/cercle_bg.webp",
  "/page_gala_section/gala_2025_bg.webp",
];

// Polices du site : le navigateur ne les télécharge qu'au moment où une page s'en sert,
// et masque le texte en attendant. On les charge toutes dès le départ.
const FONTS = [
  '400 1em "Mona Sans"',
  '500 1em "Mona Sans"',
  '700 1em "Mona Sans"',
  '800 1em "Mona Sans"',
  '400 1em "Libertinus Sans"',
  '700 1em "Libertinus Sans"',
  "1em beautique-display",
  "1em beautique-display-bold",
  "1em beautique-display-black",
];

// La galerie de la tombola s'ouvre au scan du QR code, souvent sur une connexion mobile :
// on n'y charge pas les grandes images des autres pages
const isTombola = (pathname: string) => pathname === "/tombola" || pathname.startsWith("/tombola/");

const preloadPageAssets = () => {
  if (!isTombola(window.location.pathname)) {
    HERO_IMAGES.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.decode().catch(() => {});
    });
  }
  FONTS.forEach((font) => document.fonts.load(font).catch(() => {}));
};

function AnimatedRoutes() {
  const location = useLocation();

  // Remonte en haut avant l'affichage de la nouvelle page, pour qu'on ne voie aucun saut
  const previousPathname = useRef(location.pathname);
  useLayoutEffect(() => {
    // Ouvrir ou fermer une fiche de lot ne change pas de page : la galerie garde sa position
    const insideTombola = isTombola(previousPathname.current) && isTombola(location.pathname);
    previousPathname.current = location.pathname;
    if (!insideTombola) window.scrollTo(0, 0);
  }, [location.pathname]);

  // Précharge images et polices une fois la page courante chargée, sans ralentir son affichage
  useEffect(() => {
    if (document.readyState === "complete") {
      preloadPageAssets();
      return;
    }
    window.addEventListener("load", preloadPageAssets, { once: true });
    return () => window.removeEventListener("load", preloadPageAssets);
  }, []);

  return (
    <>
      {/* Barre de navigation hors des transitions : elle reste en place pendant le changement de page */}
      {(PAGES_WITH_TOPBAR.includes(location.pathname) || isTombola(location.pathname)) && <TopBarSubsection />}

      <Routes location={location} key={isTombola(location.pathname) ? "/tombola" : location.pathname}>
        <Route path="/" element={<PageTransition><PageHome /></PageTransition>} />
        <Route path="/don" element={<PageTransition><PageDon /></PageTransition>} />
        <Route path="/equipe" element={<PageTransition><PageEquipe /></PageTransition>} />
        <Route path="/fondatrice" element={<PageTransition><PageFondatrice /></PageTransition>} />
        <Route path="/cercle" element={<PageTransition><PageCercle /></PageTransition>} />
        <Route path="/gala2026" element={<PageTransition><PageGala /></PageTransition>} />
        {/* Les anciens liens vers l'édition 2025 mènent à l'édition en cours */}
        <Route path="/gala2025" element={<Navigate to="/gala2026" replace />} />
        <Route path="/tombola/:lotId?" element={<PageTransition><PageTombola /></PageTransition>} />
        {/* Catch-all route pour les pages inexistantes */}
        <Route path="*" element={<PageTransition><PageNotFound /></PageTransition>} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
