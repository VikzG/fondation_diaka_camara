import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ScrollToTop } from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

import { PageHome } from "./screens/PageHome/PageHome";
import { PageDon } from "./screens/PageDon/PageDon";
import { PageEquipe } from "./screens/PageEquipe/PageEquipe";
import { PageFondatrice } from "./screens/PageFondatrice/PageFondatrice";
import { PageCercle } from "./screens/PageCercle/PageCercle";
import { PageNotFound } from "./screens/PageNotFound/PageNotFound";
import { PageGala } from "./screens/PageGala/PageGala";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><PageHome /></PageTransition>} />
        <Route path="/don" element={<PageTransition><PageDon /></PageTransition>} />
        <Route path="/equipe" element={<PageTransition><PageEquipe /></PageTransition>} />
        <Route path="/fondatrice" element={<PageTransition><PageFondatrice /></PageTransition>} />
        <Route path="/cercle" element={<PageTransition><PageCercle /></PageTransition>} />
        <Route path="/gala" element={<PageTransition><PageGala /></PageTransition>} />
        {/* Catch-all route pour les pages inexistantes */}
        <Route path="*" element={<PageTransition><PageNotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
