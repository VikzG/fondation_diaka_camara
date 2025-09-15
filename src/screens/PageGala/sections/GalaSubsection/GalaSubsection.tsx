import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const GalaSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-20 py-20 relative bg-white">
      <div className="flex items-stretch justify-center max-h-[700px] max-w-[1400px] gap-20 px-20 py-0 relative w-full">
        
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex h-[619.73px] w-full">
            <img
              className="flex-1 object-cover h-full w-full"
              src="/gala_section/enveloppe_gala_anim.gif"
              alt="Enveloppe animation"
            />
          </div>

          <Button className="bg-antiflash text-carmin w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
            Acheter mes places
          </Button>
        </div>

        {/* Colonne droite */}
        <Card className="flex flex-col justify-between flex-1 h-full self-stretch bg-vanilla rounded-[15px] overflow-hidden border-0">
          <CardContent className="flex flex-col items-center justify-between h-full w-full px-10 py-14 gap-14">
            <img
              className="w-[47px] h-[25px]"
              alt="orange arrow"
              src="/orange_arrows/orange_arrow_top.svg"
            />

            <h2 className="text-center font-[beautique-display] text-4xl text-carmin text-[32px]">
              Vous êtes invité.e à un<br />événement exclusif
            </h2>

            <div className="text-center [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] leading-[17.5px]">
              <span className="tracking-[0] leading-7">Le </span>
              <span className="font-bold tracking-[0] leading-[0.1px]">
                Gala de la Fondation Diaka Camara
              </span>
              <span className="tracking-[0] leading-7">
                {" "}
                est bien plus qu&apos;un dîner de charité. C&apos;est un
                rendez-vous unique où se rencontrent personnalités publiques,
                philanthropes, décideurs économiques et acteurs de terrain pour
                unir leurs forces au service de causes majeures :
                l&apos;éducation, la culture et la protection des enfants et des
                femmes.
                <br />
                <br />
              </span>

              <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
                L&apos;ÉDITION 2025 SE DÉROULERA{" "}
              </span>

              <span className="font-legendes-bold text-[length:var(--legendes-bold-font-size)] tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)]">
                À CONAKRY DU 13 AU 15 NOVEMBRE
              </span>

              <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
                {" "}
                ET MARQUERA UN TOURNANT DANS NOTRE CAPACITÉ À AGIR À GRANDE
                ÉCHELLE.
              </span>
            </div>

            <img
              className="w-[47px] h-[25px]"
              alt="orange arrow"
              src="/orange_arrows/orange_arrow_bottom.svg"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
