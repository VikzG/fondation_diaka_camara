import { Card, CardContent } from "../../../../components/ui/card";

export const PartenaireSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-[150px] p-[100px] relative">
      <h2 className="mt-[-1.00px] font-titres font-[number:var(--titres-font-weight)] text-vanilla text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] relative self-stretch [font-style:var(--titres-font-style)]">
        LE CERCLE DES ALLIANCES
      </h2>

      <div className="flex flex-col items-start justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Beautique_Display_Condensed-MediumItalic',Helvetica] font-medium italic text-vanilla text-[32px] text-center tracking-[0.64px] leading-[38px]">
          Pourquoi devenir partenaire?
        </h3>

        <p className="relative self-stretch [font-family:'Libertinus_Sans',Helvetica] font-normal text-vanilla text-lg text-center tracking-[0.54px] leading-[25px]">
          ASSOCIER VOTRE IMAGE À UN ÉVÉNEMENT PRESTIGIEUX ET PORTEUR DE SENS
          <br />
          ACCÉDER À UN RÉSEAU EXCLUSIF DE DÉCIDEURS ET PHILANTHROPES
          <br />
          CONTRIBUER DIRECTEMENT À DES PROJETS CONCRETS
        </p>
      </div>

      <Card className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto] bg-vanilla rounded-[500px] shadow-[0px_1px_2px_#00000040] border-0">
        <CardContent className="flex items-center justify-center pl-0 pr-[50px] py-0 relative self-stretch w-full flex-[0_0_auto] p-0">
          <img className="relative w-[50px] h-[50px]" alt="Group" />

          <div className="relative flex-1 [font-family:'Mona_Sans',Helvetica] font-extrabold text-pumpkin text-xl text-center tracking-[0] leading-[35px]">
            S&apos;inscrire au Cercle des Alliances
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
