import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    president: "La Présidente",
    team: "Notre équipe",
    readWord: "Lire le mot de la présidente",
    readWordShort: "Le mot de la présidente",
    meetTeam: "Rencontrez notre équipe",
    meetTeamShort: "Rencontrez l'équipe",
    presidentText:
      "À travers sa trajectoire, Diaka Camara illustre la force d’un leadership féminin engagé. Son ambition est claire : offrir à chaque enfant et à chaque jeune fille la possibilité d’apprendre, de rêver et de s’accomplir, en bâtissant des ponts entre les institutions, les communautés et la société civile.",
    presidentTextShort:
      "À travers sa trajectoire, Diaka Camara illustre la force d’un leadership féminin engagé. Son ambition est claire : offrir à chaque enfant et à chaque jeune fille la possibilité d’apprendre, de rêver et de s’accomplir.",
    teamText:
      "La Fondation Diaka Camara est portée par une équipe de femmes et d'hommes engagés, issus de parcours variés mais unis par une conviction commune : l'éducation, la culture et la protection sont les clés d'un avenir meilleur pour la jeunesse guinéenne et africaine.",
    teamTextShort:
      "La Fondation Diaka Camara est portée par une équipe de femmes et d'hommes engagés, issus de parcours variés mais unis par une conviction commune : l'éducation, la culture et la protection sont les clés d'un avenir meilleur.",
  },
  en: {
    president: "The President",
    team: "Our team",
    readWord: "Read the President's message",
    readWordShort: "The President's message",
    meetTeam: "Meet our team",
    meetTeamShort: "Meet the team",
    presidentText:
      "Through her journey, Diaka Camara embodies the strength of committed female leadership. Her ambition is clear: to give every child and every girl the chance to learn, to dream and to fulfil their potential, by building bridges between institutions, communities and civil society.",
    presidentTextShort:
      "Through her journey, Diaka Camara embodies the strength of committed female leadership. Her ambition is clear: to give every child and every girl the chance to learn, to dream and to fulfil their potential.",
    teamText:
      "The Diaka Camara Foundation is driven by a team of committed women and men from diverse backgrounds, united by a shared conviction: education, culture and protection are the keys to a better future for young people in Guinea and across Africa.",
    teamTextShort:
      "The Diaka Camara Foundation is driven by a team of committed women and men from diverse backgrounds, united by a shared conviction: education, culture and protection are the keys to a better future.",
  },
};

export const EquipeSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ======================
  // DESKTOP VERSION
  // ======================
  if (isDesktop) {
    return (
      <section className="w-full flex flex-col items-center gap-[60px] px-20 py-20">
        <div className="flex items-start justify-center gap-[70px] w-full max-w-[1300px]">
          {/* Présidente */}
          <div className="flex flex-col items-center flex-1 gap-32">
            <div className="flex flex-col items-start gap-14 w-full">
              <h2 className="w-full font-[beautique-display] text-4xl text-licorice text-center">
                {t.president}
              </h2>
              <p className="w-full font-corps text-licorice text-justify leading-[var(--corps-line-height)]">
                {t.presidentText}
              </p>
            </div>

            <Link to="/fondatrice" className="w-full">
              <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
                <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
                  {t.readWord}
                </span>
                <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
                  <img loading="lazy" decoding="async" className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
                </div>
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-[300px] h-[467px] rounded-[500px] bg-[url(/equipe_section/fondation_presidente.webp)] bg-cover bg-center" />

          {/* Équipe */}
          <div className="flex flex-col items-center flex-1 gap-32">
            <Link to="/equipe" className="w-full">
              <Button className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]">
                <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
                  {t.meetTeam}
                </span>
                <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
                  <img loading="lazy" decoding="async" className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
                </div>
              </Button>
            </Link>

            <div className="flex flex-col items-start gap-14 w-full">
              <h2 className="w-full font-[beautique-display] text-4xl text-licorice text-center">
                {t.team}
              </h2>
              <p className="w-full font-corps text-licorice text-justify leading-[var(--corps-line-height)]">
                {t.teamText}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ======================
  // MOBILE VERSION
  // ======================
  return (
  <section className="w-full flex flex-col items-center gap-12 px-6 py-10">
    {/* Image en cercle */}
    <div className="w-[220px] h-[220px] rounded-full bg-[length:150%] bg-[50%_20%] bg-[url(/equipe_section/fondation_presidente.webp)]" />

    {/* Présidente */}
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="w-full font-[beautique-display] text-3xl text-licorice text-center">
        {t.president}
      </h2>
      <p className="w-full font-corps text-licorice text-base text-justify leading-relaxed">
        {t.presidentTextShort}
      </p>
      <Link to="/fondatrice" className="w-full">
<Button
  className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin"
>
  <span className="flex-1 text-center font-mona font-bold text-xl tracking-[0] leading-[35px] text-pumpkin transition-colors duration-500 group-hover:text-vanilla">
    {t.readWordShort}
  </span>

  <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
    <img loading="lazy" decoding="async" className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
  </div>
</Button>

      </Link>
    </div>

    {/* Équipe */}
    <div className="flex flex-col items-center gap-6 w-full">
      <h2 className="w-full font-[beautique-display] text-3xl text-licorice text-center">
        {t.team}
      </h2>
      <p className="w-full font-corps text-licorice text-base text-justify leading-relaxed">
        {t.teamTextShort}
      </p>
      <Link to="/equipe" className="w-full">
<Button
  className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-antiflash hover:bg-[#0A4BA5]"
>
  <span className="flex-1 text-center font-mona font-bold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] transition-colors duration-500 group-hover:text-antiflash">
    {t.meetTeamShort}
  </span>

  <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
    <img loading="lazy" decoding="async" className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
  </div>
</Button>

      </Link>
    </div>
  </section>
  );
};
