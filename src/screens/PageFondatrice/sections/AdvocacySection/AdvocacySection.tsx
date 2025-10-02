import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const AdvocacySection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- RENDU DESKTOP ---
  if (!isMobile) {
    return (
      <section className="w-full flex items-center justify-center px-20 py-32 bg-antiflash">
        <div className="flex items-center justify-between gap-20 w-full max-w-[1600px]">
          {/* Colonne gauche */}
          <div className="flex items-center justify-center gap-[50px] flex-1 flex-col">
            <img
              className="w-[47px] h-[25px]"
              alt="Vector"
              src="/actualites_section/red_top_arrow.svg"
            />
            <h2 className="self-stretch font-[beautique-display] text-licorice text-4xl text-center">
              Plaidoyer et rayonnement
            </h2>
            <div className="self-stretch [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-justify leading-7">
              Diaka Camara est également à l&apos;initiative du{" "}
              <span className="font-bold">Gala de la Fondation</span>, un
              rendez-vous caritatif de prestige qui réunit chaque année à Conakry des
              personnalités publiques, des fondations internationales et des mécènes.
              Ce Gala deviendra une plateforme de levée de fonds et de plaidoyer,
              tournée vers des projets concrets et mesurables.
              <br />
              <br />
              Elle est aussi à l&apos;origine du{" "}
              <span className="font-bold">Cercle des Alliances (CDA)</span>, un espace
              unique de collaboration et de solidarité entre fondations,
              philanthropes et décideurs, destiné à amplifier l&apos;impact collectif.
            </div>
            <Card className="self-stretch w-full bg-vanilla rounded-[500px] shadow-[0px_1px_2px_#00000040] border-0">
              <CardContent className="p-0">
                <Link to="/gala2025">
                  <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-carmin">
                    <span className="flex-1 text-center font-extrabold text-xl text-carmin group-hover:text-vanilla">
                      Participer au Gala 2025
                    </span>
                    <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-carmin ">
                      <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
                    </div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Colonne droite */}
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative w-[500px] aspect-square rounded-full overflow-hidden group">
              <img
                className="w-full h-full object-cover"
                alt="image cercle"
                src="/cercle_section/cercle_bg.png"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-40 h-40 bg-transparent rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-[1.2] group-hover:mix-blend-color-dodge">
                    <img
                      className="w-full h-full object-contain"
                      alt="logo"
                      src="cercle_section/cercle_logo.svg"
                    />
                  </div>
                  <Link to="/cercle">
                    <Button className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 z-10 bg-antiflash
                        text-carmin font-bold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040]
                        transition-all duration-300 ease-in-out hover:underline">
                      Rejoindre le Cercle des Alliances
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // --- RENDU MOBILE ---
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-16 bg-antiflash">
      <div className="flex flex-col items-center gap-12 w-full max-w-[1000px]">
        {/* Partie texte en haut */}
        <div className="flex flex-col items-center gap-6">
          <img
            className="w-[40px] h-[20px]"
            alt="Vector"
            src="/actualites_section/red_top_arrow.svg"
          />
          <h2 className="font-[beautique-display] text-licorice text-3xl text-center">
            Plaidoyer et rayonnement
          </h2>
          <div className="text-licorice text-base text-justify leading-6">
            Diaka Camara est également à l&apos;initiative du{" "}
            <span className="font-bold">Gala de la Fondation</span>, un rendez-vous
            caritatif de prestige qui réunit chaque année à Conakry des personnalités
            publiques, des fondations internationales et des mécènes. Ce Gala deviendra
            une plateforme de levée de fonds et de plaidoyer, tournée vers des projets
            concrets et mesurables.
            <br />
            <br />
            Elle est aussi à l&apos;origine du{" "}
            <span className="font-bold">Cercle des Alliances (CDA)</span>, un espace
            unique de collaboration et de solidarité entre fondations, philanthropes et
            décideurs, destiné à amplifier l&apos;impact collectif.
          </div>
          <Card className="w-full bg-vanilla rounded-[500px] shadow-[0px_1px_2px_#00000040] border-0">
            <CardContent className="p-0">
              <Link to="/gala2025">
                <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-carmin">
                  <span className="flex-1 text-center font-extrabold text-lg text-carmin group-hover:text-vanilla">
                    Participer au Gala 2025
                  </span>
                  <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-40px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-carmin">
                    <img className="w-6 h-6" alt="Icon" src="/gala_arrow_button.svg" />
                  </div>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Cercle en bas */}
        <div className="flex justify-center">
          <div className="relative w-[280px] sm:w-[350px] aspect-square rounded-full overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              alt="image cercle"
              src="/cercle_section/cercle_bg.png"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="w-28 h-28 bg-transparent rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-[1.2] group-hover:mix-blend-color-dodge">
                  <img
                    className="w-full h-full object-contain"
                    alt="logo"
                    src="cercle_section/cercle_logo.svg"
                  />
                </div>
                <Link to="/cercle">
                  <Button className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 z-10 bg-antiflash
                      text-carmin font-bold text-sm px-6 py-2 rounded-lg shadow-[0px_1px_2px_#00000040]
                      transition-all duration-300 ease-in-out hover:underline">
                    Rejoindre le Cercle des Alliances
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
