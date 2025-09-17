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

  return (
    <section id="fondation_fondatrice" className="flex flex-col w-full items-center justify-center gap-[50px] px-[100px] py-[70px] bg-blanc">
      <div className="flex flex-col items-center justify-center gap-20 w-full">
        <header className="flex flex-col items-center justify-center gap-10 px-60 py-0 w-full">
          <img
            className="w-[185px] h-[60px]"
            alt="Logo primaire"
            src="/page_equipe_section/logo-primaire.svg"
          />

          <h1 className="font-titres font-[number:var(--titres-font-weight)] text-licorice text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
            NAISSANCE
            <br />
            DE LA FONDATION
          </h1>

          <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center tracking-[0] leading-[17.5px]">
            <span className="leading-7">En </span>
            <span className="font-bold leading-7">2017</span>
            <span className="leading-7">
              , consciente de l'urgence d'agir face aux inégalités éducatives et
              sociales, elle crée la <br />
            </span>
            <span className="font-bold leading-7">Fondation Diaka Camara</span>
            <span className="leading-7">
              . L'organisation concentre ses efforts sur trois axes prioritaires
              :
            </span>
          </p>
        </header>

        <div className="flex flex-col items-start gap-5 w-full max-w-[1600px]">
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
                    className={`font-legendes-bold font-[number:var(--legendes-bold-font-weight)] ${card.titleColor} text-[length:var(--legendes-bold-font-size)] text-center tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)] [font-style:var(--legendes-bold-font-style)]`}
                  >
                    {card.title}
                  </h3>

                  <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center tracking-[0] leading-[17.5px]">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full rounded-[20px] overflow-hidden shadow-[0px_1px_3px_#00000040] border-none">
            <CardContent className="p-0">
              <div className="h-56 items-center justify-center gap-2.5 px-[100px] py-[70px] w-full bg-antiflash rounded-[20px_20px_0px_0px] flex flex-col">
                <p className="leading-5 text-lg text-center text-colbat tracking-[var(--legendes-bold-letter-spacing)] font-legendes-bold [font-style:var(--legendes-bold-font-style)] text-[length:var(--legendes-bold-font-size)]">
                  <span className="text-licorice uppercase">
                    Depuis sa création, la Fondation a collaboré avec des
                    institutions et organisations de premier plan, parmi
                    lesquelles{" "}
                  </span>
                  <span className="font-bold">
                    L'UNICEF, UNITED MINING SUPPLY (UMS), LE FRONTLINE WOMEN'S
                    FUND ET LE CLUB DES JEUNES FILLES LEADERS DE GUINÉE
                  </span>
                  <span className="text-licorice uppercase">
                    , ainsi que de nombreux mentors et partenaires engagés.
                  </span>
                </p>
              </div>

              {/* Logos alignés */}
              <div className="flex items-center justify-center gap-10 px-20 py-10 w-full rounded-[0px_0px_20px_20px]">
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo de UNICEF"
                  src="/page_presidente_section/unicef.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo de Frontline womens fund"
                  src="/page_presidente_section/frontline.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo de UMS"
                  src="/page_presidente_section/ums.png"
                />
                <img
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo de jeunes filles leaders"
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
