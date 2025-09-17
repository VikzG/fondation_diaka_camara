import { Button } from "../../../../components/ui/button";
import { HashLink } from "react-router-hash-link";

export const HeroSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full min-h-[1000px] justify-between px-0 py-[70px] bg-[url(/page_gala_section/gala_2025_bg.png)] bg-cover bg-[50%_50%]">
      <div className="flex justify-end px-28 py-40 w-full">
        <div className="flex flex-col items-center justify-center gap-[30px] flex-1">
          <h1 className="w-full font-[beautique-display-bold] text-vanilla text-[200px] text-right leading-[0.9]">
            GALA
          </h1>
          <h1 className="w-full font-[beautique-display-bold] text-vanilla text-[200px] text-right leading-[0.9]">
            2025
          </h1>

          <p className="w-full font-[beautique-display] font-medium italic text-vanilla text-[32px] text-right">
            Trois jours pour inspirer, unir
            <br />
            et transformer l&apos;engagement en action
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5 px-[100px] py-0 w-full">
        <HashLink smooth to="#billeterie_gala" className="w-full">
          <Button className="group relative flex items-center bg-vanilla justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-carmin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-carmin group-hover:text-antiflash">
              Acheter vos places
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-carmin">
              <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
            </div>
          </Button>
        </HashLink>

        <HashLink smooth to="#encheres_gala" className="w-full">
          <Button className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
              Participer aux enchères
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
              <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
            </div>
          </Button>
        </HashLink>

        <HashLink smooth to="#cercle_gala" className="w-full">
          <Button className="group relative flex items-center bg-vanilla justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-pumpkin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              Devenir partenaire
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
