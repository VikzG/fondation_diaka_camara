import React from "react";
import { useState,useEffect } from "react";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    o1: "• Scolariser 100 jeunes filles via la Bourse Zenab Soumah",
    o2: "• Ouvrir 3 nouvelles bibliothèques scolaires",
    o3: "• Financer la création d'un fonds d'urgence pour les jeunes filles victimes de VBG",
    title: "OBJECTIFS 2025",
  },
  en: {
    o1: "• Put 100 girls through school with the Zenab Soumah Scholarship",
    o2: "• Open 3 new school libraries",
    o3: "• Fund an emergency fund for girls who are victims of GBV",
    title: "2025 GOALS",
  },
};

export const ObjectifsSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  const objectives = [
    t.o1,
    t.o2,
    t.o3,
  ];

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 1200);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  // === MOBILE RENDER ===
  if (isMobile) {
    return (
      <section className="w-full relative bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)] px-6 py-16 flex flex-col items-center gap-8">
        <h2 className="font-[beautique-display-bold] text-4xl text-vanilla text-center">
          {t.title}
        </h2>
        <div className="[font-family:'Mona_Sans',Helvetica] font-bold text-antiflash text-md text-center leading-7 flex flex-col gap-2">
          {objectives.map((objective, index) => (
            <span key={index}>{objective}</span>
          ))}
        </div>
      </section>
    );
  }

  // === DESKTOP RENDER ===
  return (
    <section className="w-full relative bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)]">
      <div className="flex items-start justify-between px-28 py-20">
        <div className="flex items-start gap-10 flex-1">
          <div className="flex items-center justify-between flex-1">
            <h2 className="flex-1 font-[beautique-display-bold] text-5xl text-vanilla">
              {t.title}
            </h2>

            <div className="flex-1 [font-family:'Mona_Sans',Helvetica] font-bold text-antiflash text-xl tracking-[0] leading-7">
              {objectives.map((objective, index) => (
                <React.Fragment key={index}>
                  {objective}
                  {index < objectives.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
