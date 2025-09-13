import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full min-h-[1000px] p-20 items-start justify-center relative bg-[url('/page_presidente_section/presidente_banner.png')] bg-cover bg-[center_top] lg:mt-20">
      <div className="flex flex-col items-center gap-[100px] p-[100px] relative flex-1 self-stretch grow">
        <div className="flex flex-col items-center justify-center gap-[50px] flex-1 grow relative self-stretch w-full">
          <img
            className="relative w-[114px] h-[115px]"
            alt="presidente banner"
            src="/cercle_section/cercle_logo.svg"
          />

          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-titres font-[number:var(--titres-font-weight)] text-vanilla text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
              UN MOT DE LA PRÉSIDENTE
            </h1>

            <h2 className="relative self-stretch font-[beautique-display] text-vanilla text-4xl text-center tracking-[0.64px] leading-[38px]">
              Parcours d&apos;une femme de coeur
            </h2>
          </div>
        </div>

        <div className="flex items-start gap-[50px] relative self-stretch w-full flex-[0_0_auto]">
          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              Découvrir la biographie
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin ">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
          <Button className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
              Fondation et Ambitions
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};
