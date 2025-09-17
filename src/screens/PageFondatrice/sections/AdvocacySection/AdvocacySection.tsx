import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Link } from "react-router-dom";

export const AdvocacySection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center px-20 py-32 bg-antiflash">
      {/* Conteneur centré avec largeur max */}
      <div className="flex items-center justify-between gap-20 w-full max-w-[1600px]">
        <div className="flex items-center justify-center gap-[50px] flex-1 flex-col">
          <img
            className="w-[47px] h-[25px]"
            alt="Vector"
            src="/actualites_section/red_top_arrow.svg"
          />

          <h2 className="self-stretch font-[beautique-display] text-licorice text-4xl text-center">
            Plaidoyer et rayonnement
          </h2>

          <div className="self-stretch [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-justify tracking-[0] leading-[17.5px]">
            <span className="leading-7">
              Diaka Camara est également à l&apos;initiative du{" "}
            </span>

            <span className="font-bold leading-7">Gala de la Fondation</span>

            <span className="leading-7">
              , un rendez-vous caritatif de prestige qui réunit chaque année à
              Conakry des personnalités publiques, des fondations
              internationales et des mécènes. Ce Gala deviendra une plateforme
              de levée de fonds et de plaidoyer, tournée vers des projets
              concrets et mesurables.
              <br />
              <br />
              Elle est aussi à l&apos;origine du{" "}
            </span>

            <span className="font-bold leading-7">
              Cercle des Alliances (CDA)
            </span>

            <span className="leading-7">
              , un espace unique de collaboration et de solidarité entre
              fondations, philanthropes et décideurs, destiné à amplifier
              l&apos;impact collectif.
            </span>
          </div>

          <Card className="self-stretch w-full bg-vanilla rounded-[500px] shadow-[0px_1px_2px_#00000040] border-0">
            <CardContent className="p-0">
              <Link to="/gala">
                <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-carmin">
                  <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-carmin group-hover:text-vanilla">
                    Participer au Gala 2025
                  </span>

                  <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-carmin ">
                    <img
                      className="w-7 h-7"
                      alt="Icon"
                      src="/gala_arrow_button.svg"
                    />
                  </div>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <div className="relative w-[500px] aspect-square rounded-full overflow-hidden group">
            {/* Image cercle */}
            <img
              className="w-full h-full object-cover"
              alt="image cercle"
              src="/cercle_section/cercle_bg.png"
            />

            {/* Logo + bouton agrandi au centre */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                {/* Logo */}
                <div
                  className="w-40 h-40 bg-transparent rounded-full flex items-center justify-center shadow-lg 
                        transition-transform duration-500 ease-in-out
                        group-hover:scale-[1.2] group-hover:mix-blend-color-dodge"
                >
                  <img
                    className="w-full h-full object-contain"
                    alt="logo"
                    src="cercle_section/cercle_logo.svg"
                  />
                </div>

                {/* Bouton */}
                <Link to="/cercle">
                  <Button
                    className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 z-10 bg-antiflash
                      text-carmin font-bold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040]
                      transition-all duration-300 ease-in-out hover:underline"
                  >
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
