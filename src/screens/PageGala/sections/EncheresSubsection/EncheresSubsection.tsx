import { Card, CardContent } from "../../../../components/ui/card";

export const EncheresSubsection = (): JSX.Element => {
  const auctionDetails = [
    {
      label: "DÉBUT",
      date: "8 NOV.",
    },
    {
      label: "FIN",
      date: "15 NOV.",
    },
  ];

  const auctionFeatures = [
    "Catalogue en ligne avec photos, description et prix de départ",
    "Enchères ouvertes 1 semaine avant le Gala et clôture le soir de l'événement",
    "Participation possible sur place ou à distance",
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-[50px] pt-[50px] pb-[100px] px-[100px] bg-antiflash">
      <div className="flex flex-col items-center gap-[100px] px-0 py-[50px] w-full max-w-[1240px]">
        <Card className="w-full h-[170px] bg-colbat rounded-[20px] border-0">
          <CardContent className="flex items-center px-[50px] py-0 h-full">
            <div className="flex flex-col items-start flex-1">
              {auctionDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[30px] w-full"
                >
                  <div className="w-[70px] font-legendes-bold font-[number:var(--legendes-bold-font-weight)] text-vanilla text-[length:var(--legendes-bold-font-size)] tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)] [font-style:var(--legendes-bold-font-style)]">
                    {detail.label}
                  </div>
                  <div className="w-fit mt-[-1.00px] font-titres font-[number:var(--titres-font-weight)] text-vanilla text-[length:var(--titres-font-size)] tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] whitespace-nowrap [font-style:var(--titres-font-style)]">
                    {detail.date}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex-1 h-[220px] mt-[-25.00px] mb-[-25.00px] relative">
              <img
                className="absolute w-[281px] h-[276px] top-[-27px] left-[50px] object-cover"
                alt="Mali"
              />
              <img
                className="absolute w-[274px] h-[270px] top-[-7017px] left-[-12243px] object-cover"
                alt="Serge"
              />
              <img
                className="absolute w-[275px] h-[270px] top-[-7017px] left-[-12243px] object-cover"
                alt="Ousmane"
              />
            </div>

            <div className="flex flex-col items-end justify-end gap-2.5 flex-1">
              <div className="self-stretch mt-[-1.00px] font-sous-titres font-[number:var(--sous-titres-font-weight)] [font-style:var(--sous-titres-font-style)] text-vanilla text-[length:var(--sous-titres-font-size)] text-right tracking-[var(--sous-titres-letter-spacing)] leading-[var(--sous-titres-line-height)]">
                Mali watta
              </div>
              <div className="self-stretch font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-vanilla text-[length:var(--legendes-categories-font-size)] text-right tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] [font-style:var(--legendes-categories-font-style)]">
                TABLEAU &quot; NOM DE L&apos;OEUVRE &quot;
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 px-60 py-0 w-full">
        <h2 className="mt-[-1.00px] font-titres font-[number:var(--titres-font-weight)] text-colbat text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
          VENTE AUX ENCHÈRES
        </h2>
        <p className="[font-family:'Beautique_Display_Condensed-MediumItalic',Helvetica] font-medium italic text-licorice text-[32px] text-center tracking-[0.64px] leading-[38px]">
          Participez à nos enchères caritatives pour acquérir des pièces uniques
          et soutenir nos actions
        </p>
      </div>

      <Card className="w-full bg-white rounded-[20px] border-0 overflow-hidden shadow-[0px_1px_3px_#0000004c]">
        <CardContent className="flex items-center justify-center p-0">
          <div className="flex flex-col w-[620px] h-[390px] items-center gap-[30px] p-[50px]">
            <img
              className="w-[47px] h-[25px]"
              alt="Vector"
              src="/vector-1.svg"
            />

            <div className="flex flex-col items-start gap-5 w-full opacity-0">
              {auctionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="w-full mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-medium text-licorice text-[17.5px] text-center tracking-[0] leading-7"
                >
                  {feature}
                </div>
              ))}
            </div>

            <img
              className="w-[47px] h-[25px]"
              alt="Vector"
              src="/vector-5.svg"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-[50px] p-[50px] flex-1 self-stretch bg-colbat rounded-[0px_20px_20px_0px] overflow-hidden">
            <div className="[font-family:'Libertinus_Sans',Helvetica] font-bold text-vanilla text-lg text-center tracking-[0.54px] leading-[25px] w-full">
              LE LIEN DU CATALOGUE S&apos;AFFICHERA ICI
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
