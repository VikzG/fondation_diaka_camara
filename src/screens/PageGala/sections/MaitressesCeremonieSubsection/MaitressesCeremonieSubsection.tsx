import { useEffect, useState } from "react";

export const MaitressesCeremonieSubsection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState<"deborah" | "aisha">("deborah");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Switch toutes les 5s en mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === "deborah" ? "aisha" : "deborah"));
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
      <section className="relative w-full pt-10 h-[700px] bg-antiflash overflow-hidden group">
        {/* Bloc texte */}
        <div className="flex flex-col items-center justify-start gap-6 px-6 text-center max-w-[800px] mx-auto h-full relative z-20 transform translate-y-10 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <img
            className="w-[47px] h-[25px]"
            alt="red arrow"
            src="/actualites_section/red_top_arrow.svg"
          />

          <h2 className="font-[beautique-display] text-carmin text-3xl">
            Les maitresses de cérémonie
          </h2>

          <p className="font-corps text-licorice text-base leading-relaxed">
            La soirée de Gala sera animée par deux personnalités
            exceptionnelles : <b>Déborah Mutund</b>, entrepreneure et militante
            engagée, et <b>Aïcha Kaporo</b>, voix médiatique reconnue. Elles
            accompagneront chaque moment fort de la soirée avec talent et
            élégance.
          </p>
        </div>

        {/* Déborah */}
        <img
          src="/page_gala_section/deborah-detour.svg"
          alt="Deborah"
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[45%] max-w-[350px] transition-opacity duration-1000 z-10 ${
            current === "deborah" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Aïcha */}
        <img
          src="/page_gala_section/aisha_mobile.svg"
          alt="Aïcha"
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] max-w-[400px] transition-opacity duration-1000 z-10 ${
            current === "aisha" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Rideau droit */}
        <img
          className="absolute w-[50%] h-full top-0 right-0 object-cover z-30 transform transition-transform duration-700 group-hover:translate-x-full"
          src="/page_gala_section/rideau-rouge-1.svg"
          alt="Rideau rouge droite"
        />

        {/* Rideau gauche */}
        <img
          className="absolute w-[50%] h-full top-0 left-0 object-cover z-30 transform transition-transform duration-700 group-hover:-translate-x-full"
          src="/page_gala_section/rideau-rouge-2.svg"
          alt="Rideau rouge gauche"
        />
      </section>
    );
  }

  // === VERSION DESKTOP === (inchangée)
  return (
    <section className="relative w-full h-[800px] bg-antiflash overflow-hidden group">
      {/* Bloc texte centré */}
      <div className="flex flex-col items-center justify-center gap-[50px] px-[10%] max-w-[1000px] mx-auto h-full relative z-20 transform translate-y-20 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
        <img
          className="w-[47px] h-[25px]"
          alt="red arrow"
          src="/actualites_section/red_top_arrow.svg"
        />

        <h2 className="relative font-[beautique-display] text-carmin text-4xl text-center">
          Les maitresses de cérémonie
        </h2>

        <p className="relative font-corps font-normal text-licorice text-lg text-center">
          La soirée de Gala sera animée par deux personnalités exceptionnelles:{" "}
          <span className="font-bold">Déborah Mutund</span>, entrepreneure et
          militante engagée, et{" "}
          <span className="font-bold">Aïcha Kaporo</span>, voix médiatique
          reconnue. Elles accompagneront avec talent, énergie et élégance chaque
          moment fort de la soirée, aux côtés des artistes et intervenants.
        </p>

        <img
          className="w-[47px] h-[25px]"
          alt="red arrow"
          src="/actualites_section/red_bottom_arrow.svg"
        />
      </div>

      {/* Deborah en bas à gauche */}
      <img
        className="absolute w-[20%] max-w-[350px] h-auto bottom-0 left-0 object-cover z-10"
        src="/page_gala_section/deborah-detour.svg"
        alt="Deborah detour"
      />

      {/* Aisha en bas à droite */}
      <img
        className="absolute w-[30%] max-w-[500px] h-auto bottom-0 right-0 object-cover z-10"
        src="/page_gala_section/aisha-detour.svg"
        alt="Aisha detour"
      />

      {/* Rideaux */}
      <img
        className="absolute w-[50%] h-full top-0 right-0 object-cover z-30 transform transition-transform duration-700 group-hover:translate-x-full"
        src="/page_gala_section/rideau-rouge-1.svg"
        alt="Rideau rouge droite"
      />
      <img
        className="absolute w-[50%] h-full top-0 left-0 object-cover z-30 transform transition-transform duration-700 group-hover:-translate-x-full"
        src="/page_gala_section/rideau-rouge-2.svg"
        alt="Rideau rouge gauche"
      />
    </section>
  );
};
