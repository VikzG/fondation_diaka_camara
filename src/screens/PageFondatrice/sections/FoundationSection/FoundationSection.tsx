import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    c1title: "ÉDUCATION",
    c2title: "CULTURE & LECTURE",
    c3title: "PROTECTION & ÉGALITÉ",
    c1: (
      <>
        <span className="text-licorice leading-7">avec la </span>
        <span className="font-bold text-pumpkin leading-7">
        Bourse Zenab Soumah
        </span>
        <span className="text-licorice leading-7">
        , qui vise la scolarisation de 100 jeunes filles issues de milieux précaires.
        </span>
      </>
    ),
    c2: (
      <>
        <span className="text-licorice leading-7">avec </span>
        <span className="font-bold text-colbat leading-7">
        "Une École, Une Bibliothèque"
        </span>
        <span className="text-licorice leading-7">
        , visant à équiper les écoles publiques et promouvoir l'accès à la lecture.
        </span>
      </>
    ),
    c3: (
      <>
        <span className="text-licorice leading-7">avec la campagne </span>
        <span className="font-bold text-carmin leading-7">
        #BrisonsLeSilence
        </span>
        <span className="font-bold text-licorice leading-7">,</span>
        <span className="text-licorice leading-7">
        {" "}
        qui lutte contre les violences basées sur le genre et accompagne les victimes.
        </span>
      </>
    ),
    title: (
      <>
        NAISSANCE
        <br />
        DE LA FONDATION
      </>
    ),
    intro: (
      <>
        En <span className="font-bold">2017</span>, consciente de l&apos;urgence d&apos;agir face aux inégalités éducatives et sociales, elle crée la{" "}
        <span className="font-bold">Fondation Diaka Camara</span>. L&apos;
        organisation concentre ses efforts sur trois axes prioritaires :
      </>
    ),
    partners: (
      <>
        Depuis sa création, la Fondation a collaboré avec des institutions et organisations de premier plan, parmi lesquelles{" "}
        <span className="font-bold">
        L&apos;UNICEF, UNITED MINING SUPPLY (UMS), LE FRONTLINE WOMEN&apos;S FUND ET LE CLUB DES JEUNES FILLES LEADERS DE GUINÉE
        </span>
        , ainsi que de nombreux mentors et partenaires engagés.
      </>
    ),
  },
  en: {
    c1title: "EDUCATION",
    c2title: "CULTURE & READING",
    c3title: "PROTECTION & EQUALITY",
    c1: (
      <>
        <span className="text-licorice leading-7">with the </span>
        <span className="font-bold text-pumpkin leading-7">
        Zenab Soumah Scholarship
        </span>
        <span className="text-licorice leading-7">
        , which aims to put 100 girls from disadvantaged backgrounds through school.
        </span>
      </>
    ),
    c2: (
      <>
        <span className="text-licorice leading-7">with </span>
        <span className="font-bold text-colbat leading-7">
        "One School, One Library"
        </span>
        <span className="text-licorice leading-7">
        , which equips public schools and promotes access to reading.
        </span>
      </>
    ),
    c3: (
      <>
        <span className="text-licorice leading-7">with the </span>
        <span className="font-bold text-carmin leading-7">
        #BrisonsLeSilence
        </span>
        <span className="text-licorice leading-7">
        {" "}
        campaign, which fights gender-based violence and supports victims.
        </span>
      </>
    ),
    title: (
      <>
        THE BIRTH
        <br />
        OF THE FOUNDATION
      </>
    ),
    intro: (
      <>
        In <span className="font-bold">2017</span>, aware of the urgent need to tackle educational and social inequalities, she created the{" "}
        <span className="font-bold">Diaka Camara Foundation</span>. The
        organisation focuses its efforts on three priority areas:
      </>
    ),
    partners: (
      <>
        Since its creation, the Foundation has worked with leading institutions and organisations, including{" "}
        <span className="font-bold">
        UNICEF, UNITED MINING SUPPLY (UMS), THE FRONTLINE WOMEN&apos;S FUND AND THE CLUB DES JEUNES FILLES LEADERS DE GUINÉE
        </span>
        , as well as many committed mentors and partners.
      </>
    ),
  },
};

// Contenu des cartes révélé une par une (de gauche à droite) quand la rangée arrive à l'écran
const MotionCardContent = motion.create(CardContent);

const cardsVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};

const cardContentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export const FoundationSection = (): JSX.Element => {
  const t = useTranslation(content);
  const foundationCards = [
    {
      icon: "/foundation_section/book_orange.svg",
      title: t.c1title,
      titleColor: "text-pumpkin",
      description: (
        <>
          {t.c1}
        </>
      ),
    },
    {
      icon: "/foundation_section/globe_blue.svg",
      title: t.c2title,
      titleColor: "text-colbat",
      description: (
        <>
          {t.c2}
        </>
      ),
    },
    {
      icon: "/foundation_section/care_red.svg",
      title: t.c3title,
      titleColor: "text-carmin",
      description: (
        <>
          {t.c3}
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
            <img loading="lazy" decoding="async"
              className="w-[150px] h-[50px]"
              alt="Logo primaire"
              src="/page_equipe_section/logo-primaire.svg"
            />

            <h1 className="font-[beautique-display-bold] text-3xl text-licorice text-center">
              {t.title}
            </h1>

            <p className="font-sans text-base text-licorice text-center leading-6">
              {t.intro}
            </p>
          </header>

          {/* Cards en colonne */}
          <motion.div
            className="flex flex-col items-center gap-6 w-full"
            variants={cardsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {foundationCards.map((card, index) => (
              <Card
                key={index}
                className="w-full bg-vanilla rounded-[20px] overflow-hidden border-none shadow-none"
              >
                <MotionCardContent
                  variants={cardContentVariants}
                  className="flex flex-col items-center justify-center gap-4 p-6"
                >
                  <img loading="lazy" decoding="async"
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
                </MotionCardContent>
              </Card>
            ))}
          </motion.div>

          {/* Bloc logos en bas */}
          <Card className="w-full rounded-[20px] overflow-hidden shadow-md border-none">
            <CardContent className="p-0">
              <div className="px-6 py-8 w-full bg-antiflash rounded-t-[20px] flex flex-col items-center text-center">
                <p className="text-base text-colbat font-legendes-bold leading-6">
                  {t.partners}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-6 bg-white rounded-b-[20px]">
                <img loading="lazy" decoding="async"
                  className="max-h-16 object-contain"
                  alt="Logo UNICEF"
                  src="/page_presidente_section/unicef.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-16 object-contain"
                  alt="Logo Frontline womens fund"
                  src="/page_presidente_section/frontline.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-16 object-contain"
                  alt="Logo UMS"
                  src="/page_presidente_section/ums.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-16 object-contain"
                  alt="Logo jeunes filles leaders"
                  src="/page_presidente_section/jfl.webp"
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
          <img loading="lazy" decoding="async"
            className="w-[185px] h-[60px]"
            alt="Logo primaire"
            src="/page_equipe_section/logo-primaire.svg"
          />

          <h1 className="font-[beautique-display-bold] text-5xl text-licorice text-center">
            {t.title}
          </h1>

          <p className="font-sans text-[17.5px] text-licorice text-center leading-7">
            {t.intro}
          </p>
        </header>

        <div className="flex flex-col items-start gap-5 w-full max-w-[1600px]">
          {/* Cards en ligne */}
          <motion.div
            className="w-full flex items-center justify-center gap-5"
            variants={cardsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {foundationCards.map((card, index) => (
              <Card
                key={index}
                className="flex-1 bg-vanilla rounded-[20px] overflow-hidden border-none shadow-none"
              >
                <MotionCardContent
                  variants={cardContentVariants}
                  className="flex flex-col items-center justify-center gap-5 p-10 h-[350px]"
                >
                  <img loading="lazy" decoding="async"
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
                </MotionCardContent>
              </Card>
            ))}
          </motion.div>

          {/* Bloc logos en bas */}
          <Card className="w-full rounded-[20px] overflow-hidden shadow-md border-none">
            <CardContent className="p-0">
              <div className="h-56 px-[100px] py-[70px] w-full bg-antiflash rounded-t-[20px] flex flex-col items-center justify-center text-center">
                <p className="text-lg text-colbat font-legendes-bold leading-7">
                  {t.partners}
                </p>
              </div>

              <div className="flex items-center justify-center gap-10 px-20 py-10 w-full bg-white rounded-b-[20px]">
                <img loading="lazy" decoding="async"
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo UNICEF"
                  src="/page_presidente_section/unicef.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo Frontline womens fund"
                  src="/page_presidente_section/frontline.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo UMS"
                  src="/page_presidente_section/ums.webp"
                />
                <img loading="lazy" decoding="async"
                  className="max-h-20 xl:max-h-28 object-contain"
                  alt="Logo jeunes filles leaders"
                  src="/page_presidente_section/jfl.webp"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
