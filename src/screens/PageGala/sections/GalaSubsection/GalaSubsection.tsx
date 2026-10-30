import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    invitedMobile: (
      <>
        Vous êtes invité.e à un<br />
        événement exclusif
      </>
    ),
    invited: (
      <>
        Vous êtes invité.e à un
        <br />
        événement exclusif
      </>
    ),
    tickets: "Acheter mes places",
    galaTitle: "Le Gala de la Fondation Diaka Camara",
    the: "Le ",
    galaName: "Gala de la Fondation Diaka Camara",
    body: <>est bien plus qu&apos;un dîner de charité. C&apos;est un rendez-vous unique où se rencontrent personnalités publiques, philanthropes, décideurs économiques et acteurs de terrain pour unir leurs forces au service de causes majeures : l&apos;éducation, la culture et la protection des enfants et des femmes.</>,
    edition: <>L&apos;ÉDITION 2025 SE DÉROULERA{" "}</>,
    where: "À CONAKRY DU 13 AU 15 NOVEMBRE",
    turning: <>{" "}ET MARQUERA UN TOURNANT DANS NOTRE CAPACITÉ À AGIR À GRANDE ÉCHELLE.</>,
  },
  en: {
    invitedMobile: (
      <>
        You are invited to an<br />
        exclusive event
      </>
    ),
    invited: (
      <>
        You are invited to an
        <br />
        exclusive event
      </>
    ),
    tickets: "Buy my tickets",
    galaTitle: "The Diaka Camara Foundation Gala",
    the: "The ",
    galaName: "Diaka Camara Foundation Gala",
    body: "is much more than a charity dinner. It is a unique gathering where public figures, philanthropists, business leaders and grassroots actors join forces for major causes: education, culture and the protection of children and women.",
    edition: <>THE 2025 EDITION WILL TAKE PLACE{" "}</>,
    where: "IN CONAKRY FROM 13 TO 15 NOVEMBER",
    turning: <>{" "}AND WILL MARK A TURNING POINT IN OUR ABILITY TO ACT ON A LARGE SCALE.</>,
  },
};

export const GalaSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === MOBILE ===
  if (isMobile) {
    return (
      <section className="flex flex-col w-full items-center gap-4 bg-white">
        {/* Titre + enveloppe + bouton */}
        <div className="flex flex-col items-center gap-52 py-10 px-3">
          <h2 className="text-center font-[beautique-display] text-3xl text-carmin">
            {t.invitedMobile}
          </h2>
          <div className="flex flex-col items-center gap-4 w-full max-w-sm">
            <img loading="lazy" decoding="async"
              className="w-full h-auto object-contain"
              src="/gala_section/enveloppe_gala_anim.webp"
              alt="Enveloppe animation"
            />
            <HashLink smooth to="#billeterie_gala" className="w-full">
              <Button className="bg-antiflash text-carmin w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-6 py-3 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
                {t.tickets}
              </Button>
            </HashLink>
          </div>
        </div>

      {/* Partie droite full width */}
      <Card className="flex flex-col w-full bg-vanilla overflow-hidden border-0">
        <CardContent className="flex flex-col items-center gap-10 px-6 py-14">
          {/* Arrow top */}
          <img loading="lazy" decoding="async"
            className="w-[47px] h-[25px]"
            alt="orange arrow"
            src="/orange_arrows/orange_arrow_top.svg"
          />
          
          {/* Nouveau titre colbat */}
          <h3 className="text-center font-[beautique-display] text-2xl text-colbat">
            {t.galaTitle}
          </h3>

          <div className="text-center [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] leading-[1.6]">
            {t.body}
            <br />
            <br />
            <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
              {t.edition}
            </span>
            <span className="font-legendes-bold text-[length:var(--legendes-bold-font-size)] tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)]">
           <strong>   {t.where}</strong>
            </span>
            <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
              {t.turning}
            </span>
          </div>
        </CardContent>
      </Card>
      </section>
    );
  }

  // === DESKTOP ===
  return (
    <section className="flex flex-col w-full items-center gap-10 px-10 py-20 relative bg-white">
      <div className="flex items-stretch justify-center max-h-[700px] max-w-[1400px] gap-20 px-20 py-0 relative w-full">
        {/* Colonne gauche */}
        <div className="flex flex-col items-start gap-[30px] flex-1">
          <div className="flex h-[619.73px] w-full">
            <img loading="lazy" decoding="async"
              className="flex-1 object-cover h-full w-full"
              src="/gala_section/enveloppe_gala_anim.webp"
              alt="Enveloppe animation"
            />
          </div>
          <HashLink smooth to="#billeterie_gala" className="w-full">
            <Button className="bg-antiflash text-carmin w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
              {t.tickets}
            </Button>
          </HashLink>
        </div>

        {/* Colonne droite */}
        <Card className="flex flex-col max-h-[700px] justify-between flex-1 h-full self-stretch bg-vanilla rounded-[15px] overflow-hidden border-0">
          <CardContent className="flex flex-col items-center justify-between h-full w-full px-10 py-14 gap-14">
            <img loading="lazy" decoding="async"
              className="w-[47px] h-[25px]"
              alt="orange arrow"
              src="/orange_arrows/orange_arrow_top.svg"
            />
            <h2 className="text-center font-[beautique-display] text-4xl text-carmin text-[32px]">
              {t.invited}
            </h2>
            <div className="text-center [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] leading-[17.5px]">
              <span className="tracking-[0] leading-7">{t.the}</span>
              <span className="font-bold tracking-[0] leading-[0.1px]">
                {t.galaName}
              </span>
              <span className="tracking-[0] leading-7">
                {" "}
                {t.body}
                <br />
                <br />
              </span>
              <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
                {t.edition}
              </span>
              <span className="font-legendes-bold text-[length:var(--legendes-bold-font-size)] tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)]">
                {t.where}
              </span>
              <span className="[font-family:'Libertinus_Sans',Helvetica] text-lg tracking-[0.16px]">
                {t.turning}
              </span>
            </div>
            <img loading="lazy" decoding="async"
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
