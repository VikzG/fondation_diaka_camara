import { useState, useEffect } from "react";

export const FamilySection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <section className="flex flex-col w-full items-center justify-center gap-12 p-10 bg-vanilla">
        <div className="flex flex-col items-center gap-6">
          <img
            className="w-[180px]"
            alt="Logo Diaka Camara"
            src="/page_presidente_section/logo_camara_presidente.svg"
          />
        </div>
                  <img
            className="w-10"
            alt="fleche bas"
            src="/orange_arrows/orange_arrow_bottom.svg"
          />

        <div className="flex flex-col items-center gap-6 w-full">
          <h2 className="font-[beautique-display] text-2xl text-center">
            Famille &amp; Origines
          </h2>
          <p className="font-[Mona_Sans] text-base text-licorice text-center leading-6">
            <span className="leading-7">Née à Conakry, </span>
            <span className="font-bold leading-7">Diaka Camara</span>
            <span className="leading-7">
              {" "}
              est une femme de médias, entrepreneure culturelle et philanthrope,
              reconnue pour son engagement en faveur de l&apos;éducation, de la
              culture et de la protection des jeunes filles. Profondément
              attachée à ses racines guinéennes, elle incarne une nouvelle
              génération de leaders africains : audacieux, visionnaires et
              engagés.
            </span>
          </p>
        </div>
      </section>
    );
  }

  // === Rendu Desktop (≥1200px) ===
  return (
    <section className="flex flex-col w-full items-center justify-center gap-20 p-[100px] relative bg-vanilla">
      <div className="flex flex-row items-center justify-between w-full">
        <img
          className="flex-[0_0_auto]"
          alt="fleche gauche"
          src="/orange_arrows/arrow_orange_left.svg"
        />
        <img
          className="flex-[0_0_auto]"
          alt="Logo Diaka Camara"
          src="/page_presidente_section/logo_camara_presidente.svg"
        />
        <img
          className="flex-[0_0_auto]"
          alt="fleche droite"
          src="/orange_arrows/arrow_orange_right.svg"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 px-60 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch font-[beautique-display] text-4xl text-center">
          Famille &amp; Origines
        </h2>

        <p className="relative self-stretch [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center tracking-[0] leading-[17.5px]">
          <span className="leading-7">Née à Conakry, </span>
          <span className="font-bold leading-7">Diaka Camara</span>
          <span className="leading-7">
            {" "}
            est une femme de médias, entrepreneure culturelle et philanthrope,
            reconnue pour son engagement en faveur de l&apos;éducation, de la
            culture et de la protection des jeunes filles. Profondément attachée
            à ses racines guinéennes, elle incarne une nouvelle génération de
            leaders africains : audacieux, visionnaires et engagés.
          </span>
        </p>
      </div>
    </section>
  );
};
