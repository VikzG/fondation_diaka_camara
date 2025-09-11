import { Button } from "../../../../components/ui/button";

export const EquipeSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[60px] px-20 py-20">
      <div className="flex items-start justify-center gap-[70px] w-full max-w-[1300px]">
<div className="flex flex-col items-center flex-1 gap-32">
  <div className="flex flex-col items-start gap-14 w-full">
    <h2 className="w-full font-[beautique-display] text-4xl text-licorice text-center">
      La Présidente
    </h2>

    <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-justify tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
      À travers sa trajectoire, Diaka Camara illustre la force d’un leadership féminin engagé. Son ambition est claire : offrir à chaque enfant et à chaque jeune fille la possibilité d’apprendre, de rêver et de s’accomplir, en bâtissant des ponts entre les institutions, les communautés et la société civile.
    </p>
  </div>

  <Button
    className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin"
  >
    <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
      Lire le mot de la présidente
    </span>

      <div
        className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin "
      >
        <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
      </div>
    </Button>
        </div>

        <div className="w-[300px] h-[467px] rounded-[500px] bg-gray-200 bg-[url(/equipe_section/presidente_img.png)] bg-cover bg-[50%_50%]" />

        <div className="flex flex-col items-center flex-1 gap-32">
          <Button
            className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]"
          >
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
              Rencontrez notre équipe
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
              <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
            </div>
          </Button>

          <div className="flex flex-col items-start gap-14 w-full">
            <h2 className="w-full font-[beautique-display] text-4xl text-licorice text-center">
              Notre équipe
            </h2>

            <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-justify tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
              La Fondation Diaka Camara est portée par une équipe de femmes et
              d&apos;hommes engagés, issus de parcours variés mais unis par une
              conviction commune : l&apos;éducation, la culture et la protection
              sont les clés d&apos;un avenir meilleur pour la jeunesse guinéenne
              et africaine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
