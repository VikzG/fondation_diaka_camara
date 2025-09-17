import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GalaSubsection = (): JSX.Element => {
  const programmeEvents = [
    {
      date: "13 NOVEMBRE",
      description: "Conférence de presse",
    },
    {
      date: "14 NOVEMBRE",
      description: (
        <>
          <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-[#160a00] text-[17.5px] tracking-[0] leading-7">
            Visites des projets réalisés par la Fondation le matin{" "}
          </span>
          <span className="italic">
            (Orphelinats, Bibliothèques, Rencontre avec les filles scolarisées)
          </span>
          <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-[#160a00] text-[17.5px] tracking-[0] leading-7">
            {" "}
            + Match de football féminin amical{" "}
          </span>
          <span className="italic">(1 but = 1 don)</span>
        </>
      ),
    },
    {
      date: "15 NOVEMBRE",
      description: (
        <>
          <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
            Table ronde par le{" "}
          </span>
          <span className="[font-style:var(--corps-font-style)] leading-[var(--corps-line-height)] font-corps font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
            Cercle des Alliances
          </span>
          <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
            {" "}
            sur l&apos;autonomisation économique des femmes, le matin + Soirée
            gala de prestige à l&apos;
          </span>
          <span className="[font-style:var(--corps-font-style)] leading-[var(--corps-line-height)] font-corps font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
            Hôtel Le Palm Camayenne
          </span>
        </>
      ),
    },
  ];

  return (
    <section id="actualites_home"className="flex flex-col w-full items-center relative bg-[url(/actualites_section/bg_actualites.png)] bg-cover bg-[50%_50%]">
      <div className="flex items-start justify-center max-w-[1400px] gap-20 px-20 py-20 self-stretch m-auto w-full flex-[0_0_auto]">
        <div className="items-start gap-[30px] pl-0 pr-[30px] py-0 flex flex-col relative flex-1 grow">
          <h2 className="relative self-stretch font-[beautique-display-bold] text-5xl  text-carmin text-center whitespace-nowrap">
            ACTUALITÉS
          </h2>

          <div className="flex h-[619.73px] items-center gap-2.5 relative self-stretch w-full">
            <img
              className="relative flex-1 grow h-[619.73px] object-cover"
              src="/gala_section/enveloppe_gala_anim.gif"
              alt="Enveloppe animation"
            />
          </div>

    <Button
      className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-[#C30F28]"
    >
      <span
        className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#C30F28] group-hover:text-vanilla"
      >
        Informations & Participation
      </span>

      <div
        className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#C30F28]"
      >
        <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
      </div>
    </Button>
        </div>

        <Card className="flex flex-col items-center justify-between p-10 relative flex-1 self-stretch bg-[#faf2d7d9] rounded-[15px] overflow-hidden shadow-[0px_2px_3px_#00000040] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-0">
          <CardContent className="flex flex-col items-center justify-between w-full h-full p-0">
            <h3 className="relative font-[beautique-display] text-4xl text-carmin text-center whitespace-nowrap">
              Programme
            </h3>

            <img
              className="relative w-[47px] h-[25px]"
              alt="top arrow"
              src="/actualites_section/red_top_arrow.svg"
            />

            <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
              {programmeEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
                >
                  <div className="mt-[-1.00px] [font-family:'Libertinus_Sans',Helvetica] text-carmin text-lg text-center tracking-[0.90px] leading-[25px] relative self-stretch font-bold">
                    {event.date}
                  </div>
                  <div className="relative self-stretch font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-center tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
                    {event.description}
                  </div>
                </div>
              ))}
            </div>

            <img
              className="relative w-[47px] h-[25px]"
              alt="bottom arrow"
              src="/actualites_section/red_bottom_arrow.svg"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex items-start px-10 py-20 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)]">
        <div className="flex items-start gap-10 relative flex-1 self-stretch grow">
          <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
            <h4 className="relative self-stretch libertinus-sans-bold text-lg text-antiflash text-center">
              OBJECTIF
            </h4>
            <p className="relative self-stretch font-[beautique-display] text-3xl text-antiflash  text-center ">
              Financer la scolarisation de 100 jeunes filles et l&apos;ouverture
              de nouvelles bibliothèques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
