import { Button } from "../../../../components/ui/button";

export const PartenaireSubsection = (): JSX.Element => {
  return (
    <section
      id="cercle_gala"
      className="flex flex-col w-full items-start justify-center bg-[url(/cercle_section/cercle_bg.png)] bg-cover bg-no-repeat gap-40 p-28 relative"
    >
      <h2 className="text-vanilla text-center relative self-stretch font-[beautique-display-bold] text-5xl">
        LE CERCLE DES ALLIANCES
      </h2>

      <div className="flex flex-col items-start justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative self-stretch font-[beautique-display] text-vanilla text-4xl text-center">
          Pourquoi devenir partenaire?
        </h3>

        <p className="relative self-stretch [font-family:'Libertinus_Sans',Helvetica] font-normal text-vanilla text-lg text-center tracking-[0.54px] leading-[25px]">
          • ASSOCIER VOTRE IMAGE À UN ÉVÉNEMENT PRESTIGIEUX ET PORTEUR DE SENS
          <br />
          • ACCÉDER À UN RÉSEAU EXCLUSIF DE DÉCIDEURS ET PHILANTHROPES
          <br />• CONTRIBUER DIRECTEMENT À DES PROJETS CONCRETS
        </p>
      </div>

      <a href="/cercle" className="w-full">
        <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
          <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
            S'inscrire au Cercle des Alliances
          </span>

          <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin ">
            <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
          </div>
        </Button>
      </a>
    </section>
  );
};
