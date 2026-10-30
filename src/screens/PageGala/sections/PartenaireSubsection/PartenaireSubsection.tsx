import { Button } from "../../../../components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    title: "LE CERCLE DES ALLIANCES",
    whyMobile: <>Pourquoi devenir<br/>partenaire?</>,
    why: "Pourquoi devenir partenaire?",
    benefitsMobile: (
      <>
        • ASSOCIER VOTRE IMAGE À UN ÉVÉNEMENT PRESTIGIEUX ET PORTEUR DE SENS
        <br />
        • ACCÉDER À UN RÉSEAU EXCLUSIF DE DÉCIDEURS ET PHILANTHROPES
        <br />
        • CONTRIBUER DIRECTEMENT À DES PROJETS CONCRETS
      </>
    ),
    benefits: (
      <>
        • ASSOCIER VOTRE IMAGE À UN ÉVÉNEMENT PRESTIGIEUX ET PORTEUR DE SENS
        <br />
        • ACCÉDER À UN RÉSEAU EXCLUSIF DE DÉCIDEURS ET PHILANTHROPES
        <br />• CONTRIBUER DIRECTEMENT À DES PROJETS CONCRETS
      </>
    ),
    joinShort: "S'inscrire au Cercle",
    join: "S'inscrire au Cercle des Alliances",
  },
  en: {
    title: "THE CIRCLE OF ALLIANCES",
    whyMobile: <>Why become<br/>a partner?</>,
    why: "Why become a partner?",
    benefitsMobile: (
      <>
        • ASSOCIATE YOUR IMAGE WITH A PRESTIGIOUS, MEANINGFUL EVENT
        <br />
        • ACCESS AN EXCLUSIVE NETWORK OF DECISION-MAKERS AND PHILANTHROPISTS
        <br />
        • CONTRIBUTE DIRECTLY TO CONCRETE PROJECTS
      </>
    ),
    benefits: (
      <>
        • ASSOCIATE YOUR IMAGE WITH A PRESTIGIOUS, MEANINGFUL EVENT
        <br />
        • ACCESS AN EXCLUSIVE NETWORK OF DECISION-MAKERS AND PHILANTHROPISTS
        <br />• CONTRIBUTE DIRECTLY TO CONCRETE PROJECTS
      </>
    ),
    joinShort: "Join the Circle",
    join: "Join the Circle of Alliances",
  },
};

export const PartenaireSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // === MOBILE RENDER ===
  if (isMobile) {
    return (
    <section
      id="cercle_gala"
      className="flex flex-col w-full items-center justify-center bg-[url(/cercle_section/cercle_bg.webp)] bg-cover bg-center bg-no-repeat gap-28 px-6 py-12 relative"
    >
      {/* Titre principal */}
      <h2 className="text-vanilla text-center font-[beautique-display-bold] text-3xl md:text-4xl lg:text-5xl leading-tight">
        {t.title}
      </h2>

      {/* Bloc texte */}
      <div className="flex flex-col items-center justify-center gap-4 w-full px-8 max-w-[400px]">
        <h3 className="font-[beautique-display] text-2xl md:text-3xl text-vanilla text-center leading-snug">
          {t.whyMobile}
        </h3>

        <p className="font-legendes-categories text-vanilla text-base md:text-lg text-center tracking-[0.3px] leading-6 md:leading-7">
          {t.benefitsMobile}
        </p>
      </div>

      {/* Bouton */}
      <Link to="/cercle" className="w-full max-w-[300px] mt-6">
        <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
          <span className="flex-1 text-center font-corps font-bold text-base md:text-lg tracking-[0] leading-6 md:leading-7 text-pumpkin group-hover:text-vanilla">
            {t.joinShort}
          </span>

          <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-40px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
            <img loading="lazy" decoding="async" className="w-5 h-5 md:w-7 md:h-7" alt="Icon" src="/gala_arrow_button.svg" />
          </div>
        </Button>
      </Link>
    </section>
  );
};
  // === DESKTOP RENDER ===
  return (
      <section
        id="cercle_gala"
        className="flex flex-col w-full items-start justify-center bg-[url(/cercle_section/cercle_bg.webp)] bg-cover bg-no-repeat gap-40 p-28 relative"
      >
        <h2 className="text-vanilla text-center relative self-stretch font-[beautique-display-bold] text-5xl">
        {t.title}
      </h2>

      <div className="flex flex-col items-start justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative self-stretch font-[beautique-display] text-vanilla text-4xl text-center">
          {t.why}
        </h3>

        <p className="relative self-stretch [font-family:'Libertinus_Sans',Helvetica] font-normal text-vanilla text-lg text-center tracking-[0.54px] leading-[25px]">
          {t.benefits}
        </p>
      </div>

      <Link to="/cercle" className="w-full">
        <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
          <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
            {t.join}
          </span>

          <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin">
            <img loading="lazy" decoding="async" className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
          </div>
        </Button>
      </Link>
    </section>
      );
};
