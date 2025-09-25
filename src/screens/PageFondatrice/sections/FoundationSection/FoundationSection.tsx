import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FoundationSection = (): JSX.Element => {
  const foundationCards = [
    {
      icon: "/foundation_section/book_orange.svg",
      title: "ÉDUCATION",
      titleColor: "text-pumpkin",
      description: (
        <>
          <span className="text-licorice leading-7">avec la </span>
          <span className="font-bold text-pumpkin leading-7">
            Bourse Zenab Soumah
          </span>
          <span className="text-licorice leading-7">
            , qui vise la scolarisation de 100 jeunes filles issues de milieux
            précaires.
          </span>
        </>
      ),
    },
    {
      icon: "/foundation_section/globe_blue.svg",
      title: "CULTURE & LECTURE",
      titleColor: "text-colbat",
      description: (
        <>
          <span className="text-licorice leading-7">avec </span>
          <span className="font-bold text-colbat leading-7">
            "Une École, Une Bibliothèque"
          </span>
          <span className="text-licorice leading-7">
            , visant à équiper les écoles publiques et promouvoir l'accès à la
            lecture.
          </span>
        </>
      ),
    },
    {
      icon: "/foundation_section/care_red.svg",
      title: "PROTECTION & ÉGALITÉ",
      titleColor: "text-carmin",
      description: (
        <>
          <span className="text-licorice leading-7">avec la campagne </span>
          <span className="font-bold text-carmin leading-7">
            #BrisonsLeSilence
          </span>
          <span className="font-bold text-licorice leading-7">,</span>
          <span className="text-licorice leading-7">
            {" "}
            qui lutte contre les violences basées sur le genre et accompagne les
            victimes.
          </span>
        </>
      ),
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === Rendu Mobile (<1200px) ===
  if (isMobile) {
    return (
      <section
        id="fondation_fondatrice"
        className="flex flex-col w-full items-center justify-center gap-[50px] px-6 py-10 bg-blanc"
      >
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <header className="flex flex-col items-center justify-center gap-6 w-full">
            <img
              className="w-[150px] h-[50px]"
              alt="Logo primaire"
              src="/page_equipe_section/logo-primaire.svg"
            />

            <h1 className="font-[beautique-display-bold] text-3xl text-licorice text-center">
              NAISSANCE
              <br />
              DE LA FONDATION
            </h1>

            <p className="font-sans text-base text-licorice text-center leading-6">
              En <span className="font-bold">2017</span>, consciente de
              l&apos;urgence d&apos;agir face aux inégalités éducatives et
              sociales, elle crée la{" "}
              <span className="font-bold">Fondation Diaka Camara</span>. L&apos;
              organisation concentre ses efforts sur trois axes prioritaires :
            </p>
          </header>

          {/* Cards en colonne */}
          <div className="flex flex-col items-center gap-6 w-full">
            {foundationCards.map((card, index) => (
              <Card
                key={index}
                className="w-full bg-vanilla rounded-[20px] overflow-hidden border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <img
                    className="w-[90px] h-[90px]"
                    alt="Icone"
                    src={card.icon}
                  />
                  <h3
                    className={`font-legendes-bold ${card.titleColor} text-xl text-center`}
                  >
                    {card.title}
                  </h3>
                  <p className="font-sans text-base text-licorice text-center leading-6">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bloc logos en bas */}
          <Card className="w-full rounded-[20px] overflow-hidden shadow-md border-none">
            <CardContent className="p-0">
              <div className="px-6 py-8 w-full bg-antiflash rounded-t-[20px] flex flex-col items-center text-center">
                <p className="text-base text-colbat font-legendes-bold leading-6">
                  Depuis sa création, la Fondation a collaboré avec des
                  institutions et organisations de premier plan, parmi
                  lesquelles{" "}
                  <span className="font-bold">
                    L&apos;UNICEF, UNITED MINING SUPPLY (UMS), LE FRONTLINE
                    WOMEN&apos;S FUND ET LE CLUB DES JEUNES FILLES LEADERS DE
                    GUINÉE
                  </span>
                  , ainsi que de nombreux mentors et partenaires engagés.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-6 bg-white rounded-b-[20px]">
                <img
                  className="max-h-16 object-contain"
                  alt="Logo UNICEF"
                  src="/page_presidente_section/unicef.png"
                />
                <img
                  className="max-h-16 object-contain"
                  alt="Logo Frontline womens fund"
                  src="/page_presidente_section/frontline.png"
                />
                <img
                  className="max-h-16 object-contain"
                  alt="Logo UMS"
                  src="/page_presidente_section/ums.png"
                />
                <img
                  className="max-h-16 object-contain"
                  alt="Logo jeunes filles leaders"
                  src="/page_presidente_section/jfl.png"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // === Rendu Desktop (inchangé, ≥1200px) ===
  return (
    <section
      id="fondation_fondatrice"
      className="flex flex-col w-full items-center justify-center gap-[50px] px-[100px] py-[70px] bg-blanc"
    >
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <header className="flex flex-col items-center justify-center gap-10 px-60 py-0 w-full">
          <img
            className="w-[185px] h-[60px]"
            alt="Logo primaire"
            src="/page_equipe_section/logo-primaire.svg"
          />

          <h1 className="font-[beautique-display-bold] text-5xl text-licorice text-center">
            NAISSANCE
            <br />
            DE LA FONDATION
          </h1>

          <p className="font-sans text-[17.5px] text-licorice text-center leading-7">
            En <span className="font-bold">2017</span>, consciente de
            l&apos;urgence d&apos;agir face aux inégalités éducatives et
            sociales, elle crée la{" "}
            <span className="font-bold">Fondation Diaka Camara</span>. L&apos;
            organisation concentre ses efforts sur trois axes prioritaires :
          </p>
        </header>

        <div className="flex flex-col items-start gap-5 w-full max-w-[1600px]">
          {/* Cards en ligne */}
          <div className="w-full flex items-center justify-center gap-5">
            {foundationCards.map((card, index) => (
              <Card
                key={index}
                className="flex-1 bg-vanilla rounded-[20px] overflow-hidden border-none shadow-none"
              >
                <CardContent className="flex flex-col items-center justify-center gap-5 p-10 h-[350px]">
                  <img
                    className="w-[110px] h-[110px]"
                    alt="Icone"
                    src={card.icon}
                  />
                  <h3
                    className={`font-legendes-bold ${card.titleColor} text-2xl text-center`}
                  >
                    {card.title}
                  </h3>
                  <p className="font-sans text-[17.5px] text-licorice text-center leading-7">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bloc logos en bas */}
          <Card className="w-full rounded-[20px] overflow-hidden shadow-md border-none">
            <CardContent className="p-0">
              <div className="h-56 px-[100px] py-[70px] w-full bg-antiflash rounded-t-[20px] flex flex-col items-center justify-center text-center">
                <p className="text-lg text-colbat font-legendes-bold leading-7">
                  Depuis sa création, la Fondation a collaboré avec des
                  institutions et organisations de premier plan, parmi lesquelles{" "}
                  <span className="font-bold">
                    L&apos;UNICEF, UNITED MINING SUPPLY (UMS), LE FRONTLINE
                    WOMEN&apos;S FUND ET LE CLUB DES JEUNES FILLES LEADERS DE
                    GUINÉE
                  </span>
                  , ainsi que de nombreux mentors et partenaires engagés.
                </p>
              </div>

              <div className="flex items-center justify-center gap-10 px-20 py-10 w-full bg-white rounded-b-[20px]">
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo UNICEF"
                  src="/page_presidente_section/unicef.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo Frontline womens fund"
                  src="/page_presidente_section/frontline.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo UMS"
                  src="/page_presidente_section/ums.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo jeunes filles leaders"
                  src="/page_presidente_section/jfl.png"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
