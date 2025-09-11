import { Button } from "../../../../components/ui/button";

export const PresidentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-blanc flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <div className="flex-1 h-full bg-[url(/page_equipe_section/presidente.png)] bg-cover bg-center bg-no-repeat min-h-[780px] max-w-[750px]" />

        <div className="flex-1 gap-[50px] p-[100px] flex flex-col items-center justify-center">
          <h2 className="w-full font-[beautique-display] text-5xl text-licorice text-center">
            Madame Diaka Camara
          </h2>

          <p className="w-full tracking-[var(--legendes-categories-letter-spacing)] font-legendes-categories text-xl text-colbat text-center ">
            FONDATRICE &amp; PRÉSIDENTE DE LA FONDATION
          </p>

          <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-justify tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
            Femme de médias, entrepreneure culturelle et philanthrope, Diaka
            Camara a créé la Fondation en 2017 avec la volonté de donner aux
            jeunes filles et aux enfants les moyens de rêver, d&apos;apprendre
            et de réussir. Sous son impulsion, la Fondation est devenue un
            acteur reconnu en matière d&apos;éducation, de culture et de
            protection sociale en Guinée.
          </p>

          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              Lire le mot de la présidente
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin ">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
        </div>
      </div>
      <div className="flex items-start px-10 py-20 relative self-stretch w-full flex-[0_0_auto] bg-pumpkin">
        <div className="flex items-start gap-10 relative flex-1 self-stretch grow max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
            <p className="relative self-stretch text-antiflash font-legendes-categories text-xl text-center uppercase">
              Notre gouvernance repose sur une Présidente fondatrice, un Conseil
              d’administration et un collège de membres fondateurs qui
              accompagnent la stratégie, la transparence et le développement de
              nos actions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
