import { Button } from "../../../../components/ui/button";

export const PreActusSubsection = (): JSX.Element => {
  return (
<section className="grid grid-cols-3 items-center px-20 py-14 bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)]">
  <img alt="Actus" src="/dc_symbole.svg" className="justify-self-start" />

  <div className="flex flex-col items-center justify-center gap-5">
    <h1 className="w-fit font-[beautique-display-bold] text-vanilla text-5xl text-center whitespace-nowrap">
      GALA 2025
    </h1>
    <p className="[font-family:'Libertinus_Sans',Helvetica] font-bold text-antiflash text-base text-center">
      CONAKRY, DU 13 AU 15 NOVEMBRE
    </p>
  </div>

  <Button className="justify-self-end inline-flex items-center justify-center gap-2.5 pt-[5px] pb-[7px] px-[25px] bg-antiflash rounded-[10px] text-carmin [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg text-center leading-[30px] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
    Voir les actualités
  </Button>
</section>

  );
};
