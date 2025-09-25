import { Button } from "../../../../components/ui/button";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

export const HeroSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isMobile) {
    return (
      <section
        id="hero_cercle_mobile"
        className="flex flex-col mt-14 w-full items-center justify-around min-h-[600px] h-[800px] px-6 py-12 relative bg-[url(/cercle_section/cercle_bg.png)] bg-no-repeat bg-cover bg-center"
      >
        {/* Titre principal */}
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <h1 className="text-vanilla text-center font-[beautique-display-bold] text-3xl md:text-4xl lg:text-5xl leading-tight">
            LE CERCLE DES ALLIANCES
          </h1>

          {/* Bouton découvrir */}
          <HashLink
            smooth
            to="#introduction_cercle"
            className="w-full max-w-[300px] flex items-center justify-center"
          >
            <Button className="h-auto flex items-center px-6 md:px-8 justify-center gap-2.5 relative bg-pumpkin rounded-[10px] hover:underline hover:-translate-y-1 transition-all duration-300 border-0 shadow-[0px_1px_2px_#00000040]">
              <span className="text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-base md:text-lg text-vanilla tracking-[0] leading-6 md:leading-7">
                Découvrir les détails
              </span>
            </Button>
          </HashLink>
        </div>

        {/* Bouton inscription */}
        <div className="flex flex-col items-center justify-center w-full mt-6 max-w-[300px]">
          <HashLink smooth to="#footer" className="w-full">
            <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
              <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-base md:text-lg text-pumpkin group-hover:text-vanilla leading-6 md:leading-7">
                S'inscrire au Cercle
              </span>

              <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-40px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
                <img
                  className="w-5 h-5 md:w-7 md:h-7"
                  alt="Icon"
                  src="/gala_arrow_button.svg"
                />
              </div>
            </Button>
          </HashLink>
        </div>
      </section>
    );
  }
  return (
    <section className="flex flex-col w-full items-start min-h-[1200px] gap-2.5 px-20 py-20 relative bg-[url(/cercle_section/cercle_bg.png)] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-[30px] relative flex-1 self-stretch w-full grow">
        <h1 className="text-vanilla text-center relative self-stretch font-[beautique-display-bold] text-5xl">
          LE CERCLE DES ALLIANCES
        </h1>

        <div className="flex items-center justify-center gap-2.5 px-0 py-0.5 relative self-stretch w-full flex-[0_0_auto] rounded-[10px]">
          <HashLink smooth to="#introduction_cercle">
            <Button className="h-auto flex items-center px-8 justify-center gap-2.5 relative bg-pumpkin rounded-[10px] hover:underline hover:-translate-y-1 transition-all duration-300 border-0 shadow-[0px_1px_2px_#00000040]">
              <span className="relative w-fit [font-family:'Mona_Sans',Helvetica] font-extrabold text-vanilla text-lg text-center tracking-[0] leading-[30px] whitespace-nowrap">
                Découvrir les détails
              </span>
            </Button>
          </HashLink>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-vanilla rounded-[500px] shadow-[0px_1px_2px_#00000040]">
        <HashLink smooth to="#footer" className="w-full">
          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              S'inscrire au Cercle des Alliances
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
        </HashLink>
      </div>
    </section>
  );
};
