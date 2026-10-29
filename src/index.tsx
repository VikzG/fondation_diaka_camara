import { StrictMode, useEffect, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import PageTransition from "./components/PageTransition";
import { TopBarSubsection } from "./screens/PageHome/sections/TopBarSubsection/TopBarSubsection";

import { PageHome } from "./screens/PageHome/PageHome";
import { PageDon } from "./screens/PageDon/PageDon";
import { PageEquipe } from "./screens/PageEquipe/PageEquipe";
import { PageFondatrice } from "./screens/PageFondatrice/PageFondatrice";
import { PageCercle } from "./screens/PageCercle/PageCercle";
import { PageNotFound } from "./screens/PageNotFound/PageNotFound";
import { PageGala } from "./screens/PageGala/PageGala";

// Pages qui affichent la barre de navigation (la page 404 n'en a pas)
const PAGES_WITH_TOPBAR = ["/", "/don", "/equipe", "/fondatrice", "/cercle", "/gala2025"];

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

const preloadPageAssets = () => {
  HERO_IMAGES.forEach((url) => {
    const img = new Image();
    img.src = url;
    img.decode().catch(() => {});
  });
  FONTS.forEach((font) => document.fonts.load(font).catch(() => {}));
};

function AnimatedRoutes() {
  const location = useLocation();

  // Remonte en haut avant l'affichage de la nouvelle page, pour qu'on ne voie aucun saut
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
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
      {PAGES_WITH_TOPBAR.includes(location.pathname) && <TopBarSubsection />}

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><PageHome /></PageTransition>} />
        <Route path="/don" element={<PageTransition><PageDon /></PageTransition>} />
        <Route path="/equipe" element={<PageTransition><PageEquipe /></PageTransition>} />
        <Route path="/fondatrice" element={<PageTransition><PageFondatrice /></PageTransition>} />
        <Route path="/cercle" element={<PageTransition><PageCercle /></PageTransition>} />
        <Route path="/gala2025" element={<PageTransition><PageGala /></PageTransition>} />
        {/* Catch-all route pour les pages inexistantes */}
        <Route path="*" element={<PageTransition><PageNotFound /></PageTransition>} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
