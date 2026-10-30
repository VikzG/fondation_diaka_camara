import { useEffect, useState } from "react";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    title: "NOTRE ÉQUIPE",
    introMobile: (
      <>
        La Fondation Diaka Camara est portée par une équipe de femmes et
        d&apos;hommes engagés, issus de parcours variés mais unis par une
        conviction commune :{" "}
        <strong>
        l&apos;éducation, la culture et la protection sont les clés
        d&apos;un avenir meilleur pour la jeunesse guinéenne et africaine.
        </strong>
      </>
    ),
    introLead: (
      <>
        La Fondation Diaka Camara est portée par une équipe de femmes et
        d&apos;hommes engagés, issus de parcours variés mais unis par une
        conviction commune :
      </>
    ),
    introStrong: (
      <>
        l&apos;éducation, la culture et la protection sont les clés
        d&apos;un avenir meilleur pour la jeunesse guinéenne et
        africaine.
      </>
    ),
  },
  en: {
    title: "OUR TEAM",
    introMobile: (
      <>
        The Diaka Camara Foundation is driven by a team of committed women
        and men from diverse backgrounds, united by a shared
        conviction:{" "}
        <strong>
        education, culture and protection are the keys to a better
        future for young people in Guinea and across Africa.
        </strong>
      </>
    ),
    introLead: "The Diaka Camara Foundation is driven by a team of committed women and men from diverse backgrounds, united by a shared conviction:",
    introStrong: "education, culture and protection are the keys to a better future for young people in Guinea and across Africa.",
  },
};

export const TeamIntroductionSection = (): JSX.Element => {
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
      <section className="flex flex-col w-full items-center justify-center mt-14 gap-12 px-6 py-20 bg-vanilla">
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-[500px]">
          {/* Logo */}
          <img
            className="w-[140px] h-[60px]"
            alt="Logo fondation Diaka Camara"
            src="/page_equipe_section/logo-primaire.svg"
          />

          {/* Titre */}
          <h1 className="font-[beautique-display-bold] text-3xl text-licorice text-center">
            {t.title}
          </h1>

          {/* Description */}
          <p className="font-corps text-licorice text-base text-center tracking-[0.2px] leading-6">
            {t.introMobile}
          </p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="flex flex-col w-full items-center justify-center gap-20 px-10 py-40 pt-52 bg-vanilla">
      <div className="flex flex-col items-center justify-center gap-10 relative w-full max-w-[1600px]">
        <img
          className="w-[185px] h-[60px]"
          alt="Logo fondation Diaka Camara"
          src="/page_equipe_section/logo-primaire.svg"
        />

        <div className="flex items-center justify-center gap-2.5 w-full">
          <div className="flex flex-col items-center gap-5 flex-1">
            <h1 className="font-[beautique-display-bold] text-5xl text-licorice text-center whitespace-nowrap">
              {t.title}
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 px-60 py-0 w-full">
          <p className="font-corps text-licorice text-[length:var(--corps-font-size)] text-center tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
            <span className="font-corps">
              {t.introLead}
            </span>

            <span className="font-[number:var(--corps-font-weight)] leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
              {" "}
              <strong>
                {t.introStrong}
              </strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
