import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GalaSubsection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const programmeEvents = [
    {
      date: "13 NOVEMBRE",
      description: "Conférence de presse",
    },
    {
      date: "14 NOVEMBRE",
      description: (
        <>
          <span className="font-normal text-[#160a00] text-base leading-6">
            Visites des projets réalisés par la Fondation le matin{" "}
          </span>
          <span className="italic">
            (Orphelinats, Bibliothèques, Rencontre avec les filles scolarisées)
          </span>
          <span className="font-normal text-[#160a00] text-base leading-6">
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
          <span className="font-corps">Table ronde par le </span>
          <span className="font-corps">Cercle des Alliances</span>
          <span className="font-corps">
            {" "}
            sur l&apos;autonomisation économique des femmes, le matin + Soirée
            gala de prestige à l&apos;
          </span>
          <span className="font-corps">Hôtel Le Palm Camayenne</span>
        </>
      ),
    },
  ];

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
      <section
        id="actualites_home"
        className="flex flex-col w-full items-center relative bg-[url(/actualites_section/bg_actualites.png)] bg-cover bg-[50%_50%]"
      >
        {/* Bloc ACTUALITÉS en haut */}
        <div className="flex flex-col items-center gap-8 px-6 py-10 w-full max-w-[600px]">
          <h2 className="font-[beautique-display-bold] text-3xl text-carmin text-center">
            ACTUALITÉS
          </h2>

          <img
            className="w-full max-h-[400px] object-cover rounded-md"
            src="/gala_section/enveloppe_gala_anim.gif"
            alt="Enveloppe animation"
          />

          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-[#C30F28]">
            <span className="flex-1 text-center font-mona font-bold text-xl tracking-[0] leading-[35px] text-[#C30F28] transition-colors duration-500 group-hover:text-vanilla">
              Infos & Participation
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#C30F28]">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
        </div>

        {/* Bloc Programme en bas */}
        <Card className="flex flex-col items-center gap-5 p-6 mx-6 mb-6 w-[90%] bg-[#faf2d7d9] rounded-[15px] shadow backdrop-blur border-0">
          <CardContent className="flex flex-col items-center gap-6 w-full p-0">
            <h3 className="font-[beautique-display] text-2xl text-carmin text-center">
              Programme
            </h3>

            <img
              className="w-[30px] h-[15px]"
              alt="top arrow"
              src="/actualites_section/red_top_arrow.svg"
            />

            <div className="flex flex-col gap-5 w-full">
              {programmeEvents.map((event, index) => (
                <div key={index} className="flex flex-col gap-2 w-full">
                  <div className="text-carmin text-base font-bold text-center">
                    {event.date}
                  </div>
                  <div className="font-corps text-sm text-licorice text-center leading-6">
                    {event.description}
                  </div>
                </div>
              ))}
            </div>

            <img
              className="w-[30px] h-[15px]"
              alt="bottom arrow"
              src="/actualites_section/red_bottom_arrow.svg"
            />
          </CardContent>
        </Card>

        {/* Bloc Objectif en bas */}
        <div className="flex flex-col items-center gap-4 px-6 py-10 w-full bg-gradient-to-r from-[#F06419] to-[#C30F28]">
          <h4 className="libertinus-sans-bold text-base text-antiflash text-center">
            OBJECTIF
          </h4>
          <p className="font-[beautique-display] text-xl text-antiflash text-center">
            Financer la scolarisation de 100 jeunes filles et l&apos;ouverture
            de nouvelles bibliothèques.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="actualites_home"
      className="flex flex-col w-full items-center relative bg-[url(/actualites_section/bg_actualites.png)] bg-cover bg-[50%_50%]"
    >
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

          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-[#C30F28]">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#C30F28] group-hover:text-vanilla">
              Informations & Participation
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#C30F28]">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
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
