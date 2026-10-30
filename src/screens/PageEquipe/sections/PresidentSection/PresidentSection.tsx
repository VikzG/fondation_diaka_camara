import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    name: "Madame Diaka Camara",
    role: <>FONDATRICE &amp; PRÉSIDENTE DE LA FONDATION</>,
    bio: (
      <>
        Femme de médias, entrepreneure culturelle et philanthrope, Diaka
        Camara a créé la Fondation en 2017 avec la volonté de donner aux
        jeunes filles et aux enfants les moyens de rêver, d&apos;apprendre
        et de réussir. Sous son impulsion, la Fondation est devenue un
        acteur reconnu en matière d&apos;éducation, de culture et de
        protection sociale en Guinée.
      </>
    ),
    wordShort: "Le mot de la présidente",
    word: "Lire le mot de la présidente",
    governance: "Notre gouvernance repose sur une Présidente fondatrice, un Conseil d’administration et un collège de membres fondateurs qui accompagnent la stratégie, la transparence et le développement de nos actions.",
  },
  en: {
    name: "Mrs Diaka Camara",
    role: <>FOUNDER &amp; PRESIDENT OF THE FOUNDATION</>,
    bio: "Media figure, cultural entrepreneur and philanthropist, Diaka Camara founded the Foundation in 2017 to give girls and children the means to dream, to learn and to succeed. Under her leadership, the Foundation has become a recognised player in education, culture and social protection in Guinea.",
    wordShort: "The President's message",
    word: "Read the President's message",
    governance: "Our governance is built on a founding President, a Board of Directors and a college of founding members who guide the strategy, transparency and development of our work.",
  },
};

export const PresidentSection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <section className="w-full bg-blanc flex flex-col items-center justify-center gap-12">
        {/* Image en haut */}
        <div className="w-full max-w-[500px] h-[400px] bg-[url(/page_equipe_section/presidente.webp)] bg-cover bg-[50%_40%] bg-no-repeat" />

        {/* Contenu texte en bas */}
        <div className="flex flex-col items-center gap-6 px-6 w-full max-w-[500px]">
          <h2 className="font-[beautique-display] text-3xl text-licorice text-center">
            {t.name}
          </h2>

          <p className="tracking-[0.5px] font-legendes-categories text-base text-colbat text-center uppercase">
            {t.role}
          </p>

          <p className="font-corps text-licorice text-base text-justify leading-6 tracking-[0.2px]">
            {t.bio}
          </p>

          {/* Bouton vers /fondatrice */}
          <Link to="/fondatrice" className="w-full">
          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-[#C30F28]">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              {t.wordShort}
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
              <img loading="lazy" decoding="async"
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
          </Link>
        </div>

        {/* Bandeau bas */}
      <div className="flex items-start px-10 py-10 relative self-stretch w-full flex-[0_0_auto] bg-pumpkin">
        <div className="flex items-start gap-10 relative flex-1 self-stretch grow max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
            <p className="relative self-stretch text-antiflash font-legendes-categories text-xl text-center uppercase">
              {t.governance}
            </p>
          </div>
        </div>
      </div>
      </section>
    );
  }
  return (
    <section className="w-full bg-blanc flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <div className="flex-1 h-full bg-[url(/page_equipe_section/presidente.webp)] bg-cover bg-center bg-no-repeat min-h-[780px] max-w-[750px]" />

        <div className="flex-1 gap-10 p-20 flex flex-col items-center justify-center max-w-[700px] mx-auto">
          <h2 className="w-full font-[beautique-display] text-5xl text-licorice text-center">
            {t.name}
          </h2>

          <p className="w-full tracking-[var(--legendes-categories-letter-spacing)] font-legendes-categories text-xl text-colbat text-center ">
            {t.role}
          </p>

          <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-justify tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
            {t.bio}
          </p>

          {/* Redirection vers /fondatrice */}
          <Link to="/fondatrice" className="w-full">
            <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
              <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
                {t.word}
              </span>

              <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin ">
                <img loading="lazy" decoding="async"
                  className="w-7 h-7"
                  alt="Icon"
                  src="/gala_arrow_button.svg"
                />
              </div>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-start px-10 py-20 relative self-stretch w-full flex-[0_0_auto] bg-pumpkin">
        <div className="flex items-start gap-10 relative flex-1 self-stretch grow max-w-[1600px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
            <p className="relative self-stretch text-antiflash font-legendes-categories text-xl text-center uppercase">
              {t.governance}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
