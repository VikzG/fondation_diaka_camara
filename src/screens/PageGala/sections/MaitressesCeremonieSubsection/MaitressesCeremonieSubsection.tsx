export const MaitressesCeremonieSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[800px] bg-antiflash overflow-hidden">
      <div className="flex flex-col w-full h-full items-center justify-center gap-[50px] px-[380px] py-0 relative">
        <h2 className="relative self-stretch [font-family:'Beautique_Display_Condensed-MediumItalic',Helvetica] font-medium italic text-carmin text-[32px] text-center tracking-[0.64px] leading-[38px]">
          Les maîtresses de cérémonie
        </h2>

        <p className="relative self-stretch [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center tracking-[0] leading-7">
          <span className="text-[#160a00]">
            La soirée de Gala sera animée par deux personnalités
            exceptionnelles:{" "}
          </span>
          <span className="font-bold text-[#160a00]">Déborah Mutund</span>
          <span className="text-[#160a00]">
            , entrepreneure et militante engagée, et{" "}
          </span>
          <span className="font-bold text-[#160a00]">Aïcha Kaporo</span>
          <span className="text-[#160a00]">
            , voix médiatique reconnue. Elles accompagneront avec talent,
            énergie et élégance chaque moment fort de la soirée, aux côtés des
            artistes et intervenants.
          </span>
        </p>

        <img
          className="absolute w-[517px] h-[461px] top-[339px] left-[923px] object-cover"
          src="/page_gala_section/aisha-detour.svg"
          alt="Aisha detour"
        />

        <img
          className="absolute w-[329px] h-[656px] top-36 left-0 object-cover"
          src="/page_gala_section/deborah-detour.svg"
          alt="Deborah detour"
        />

        <img
          className="absolute w-[696px] h-[800px] top-0 left-[744px] object-cover"
          src="/page_gala_section/rideau-rouge-1.svg"
          alt="Rideau rouge"
        />

        <img
          className="absolute w-[696px] h-[800px] top-0 left-0 object-cover"
          src="/page_gala_section/rideau-rouge-2.svg"
          alt="Rideau rouge"
        />
      </div>
    </section>
  );
};
