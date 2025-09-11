import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHome } from "./screens/PageHome/PageHome";
import { PageDon } from "./screens/PageDon/PageDon";
import { PageEquipe } from "./screens/PageEquipe/PageEquipe";
import { PageFondatrice } from "./screens/PageFondatrice/PageFondatrice";
import { PageCercle } from "./screens/PageCercle/PageCercle";
import { PageNotFound } from "./screens/PageNotFound/PageNotFound";
import { PageGala } from "./screens/PageGala/PageGala";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/don" element={<PageDon />} />
        <Route path="/equipe" element={<PageEquipe />} />
        <Route path="/fondatrice" element={<PageFondatrice />} />
        <Route path="/cercle" element={<PageCercle />} />
        <Route path="/gala" element={<PageGala />} />
        {/* Catch-all route pour les pages inexistantes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
