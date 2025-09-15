import React from "react";

export const ObjectifsSubsection = (): JSX.Element => {
  const objectives = [
    "• Scolariser 100 jeunes filles via la Bourse Zenab Soumah",
    "• Ouvrir 3 nouvelles bibliothèques scolaires",
    "• Financer la création d'un fonds d'urgence pour les jeunes filles victimes de VBG",
  ];

  return (
    <section className="w-full relative bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)]">
      <div className="flex items-start justify-between px-28 py-20">
        <div className="flex items-start gap-10 flex-1">
          <div className="flex items-center justify-between flex-1">
            <h2 className="flex-1 font-titres font-[number:var(--titres-font-weight)] text-vanilla text-[length:var(--titres-font-size)] tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
              OBJECTIFS 2025
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
