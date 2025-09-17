import { Button } from "../../../../components/ui/button";
import { HashLink } from "react-router-hash-link";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start min-h-[1200px] gap-2.5 px-20 py-20 relative bg-[url(/cercle_section/cercle_bg.png)] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center justify-center gap-[30px] relative flex-1 self-stretch w-full grow">
        <h1 className="font-titres font-[number:var(--titres-font-weight)] text-vanilla text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] relative self-stretch [font-style:var(--titres-font-style)]">
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
              <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
            </div>
          </Button>
        </HashLink>
      </div>
    </section>
  );
};
