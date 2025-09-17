export const MaitressesCeremonieSubsection = (): JSX.Element => {
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
          Les maîtresses de cérémonie
        </h2>

        <p className="relative font-corps font-normal text-licorice text-lg text-center">
          <span className="text-licorice">
            La soirée de Gala sera animée par deux personnalités exceptionnelles:{" "}
          </span>
          <span className="font-bold">Déborah Mutund</span>
          <span>, entrepreneure et militante engagée, et </span>
          <span className="font-bold">Aïcha Kaporo</span>
          <span>
            , voix médiatique reconnue. Elles accompagneront avec talent, énergie et élégance chaque moment fort de la soirée, aux côtés des artistes et intervenants.
          </span>
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
};
