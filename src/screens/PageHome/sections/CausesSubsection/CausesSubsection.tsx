import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { cn } from "../../../../lib/utils";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    heading: "NOS CAUSES",
    intro: (
      <>
        Nos programmes ciblent{" "}
        <span className="font-bold text-pumpkin">
          trois priorités stratégiques
        </span>{" "}
        pour améliorer la vie des filles et des communautés vulnérables en
        Guinée.
      </>
    ),
    causes: [
      {
        title: "Autonomisation des femmes",
        description: (
          <>
            <span className="font-corps">
              • Formation et mentorat pour entrepreneures
            </span>
            <br />
            <span className="font-corps">
              • Soutien financier et logistique à leurs projets <br />•
              "Investir dans une femme, c'est investir dans toute une
              communauté."
            </span>
          </>
        ),
      },
      {
        title: "Accès à l'éducation",
        description: (
          <>
            <span className="font-corps">
              • Scolarisation complète via la{" "}
              <strong>Bourse Zenab Soumah</strong>
              <br />
            </span>
            <span className="font-corps">
              • Création de bibliothèques scolaires <br />• Fourniture de
              matériel et allocation pour la cantine
            </span>
          </>
        ),
      },
      {
        title: "Santé et protection",
        description: (
          <>
            <span className="font-corps">
              • Lutte contre les violences basées sur le genre{" "}
              <strong>(#BrisonsLeSilence)</strong>
            </span>
            <br />
            <span className="font-corps">
              • Interventions médicales d'urgence <br />• Campagnes de
              sensibilisation
            </span>
          </>
        ),
      },
    ],
  },
  en: {
    heading: "OUR CAUSES",
    intro: (
      <>
        Our programmes target{" "}
        <span className="font-bold text-pumpkin">
          three strategic priorities
        </span>{" "}
        to improve the lives of girls and vulnerable communities in Guinea.
      </>
    ),
    causes: [
      {
        title: "Women's empowerment",
        description: (
          <>
            <span className="font-corps">
              • Training and mentoring for women entrepreneurs
            </span>
            <br />
            <span className="font-corps">
              • Financial and logistical support for their projects <br />•
              "Investing in a woman means investing in an entire community."
            </span>
          </>
        ),
      },
      {
        title: "Access to education",
        description: (
          <>
            <span className="font-corps">
              • Full schooling through the{" "}
              <strong>Zenab Soumah Scholarship</strong>
              <br />
            </span>
            <span className="font-corps">
              • Creation of school libraries <br />• School supplies and
              canteen allowances
            </span>
          </>
        ),
      },
      {
        title: "Health and protection",
        description: (
          <>
            <span className="font-corps">
              • Fighting gender-based violence{" "}
              <strong>(#BrisonsLeSilence)</strong>
            </span>
            <br />
            <span className="font-corps">
              • Emergency medical interventions <br />• Awareness campaigns
            </span>
          </>
        ),
      },
    ],
  },
};

export const CausesSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const causesData = [
    {
      id: "item-1",
      number: "1",
      title: t.causes[0].title,
      backgroundImage: "/causes_section/causes_img_1.webp",
      content: { description: t.causes[0].description },
    },
    {
      id: "item-2",
      number: "2",
      title: t.causes[1].title,
      backgroundImage: "/causes_section/causes_img_2.webp",
      content: { description: t.causes[1].description },
    },
    {
      id: "item-3",
      number: "3",
      title: t.causes[2].title,
      backgroundImage: "/causes_section/causes_img_3.webp",
      content: { description: t.causes[2].description },
    },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-[70px] pt-0 pb-5 max-[1200px]:pb-0 px-0">
      <header className="flex flex-col w-full max-w-[1240px] items-center gap-10 px-60 max-[1200px]:px-6 py-0 relative">
        <h2 className="text-pumpkin text-center font-[beautique-display-bold] text-5xl max-[1200px]:text-3xl">
          {t.heading}
        </h2>
        <p className="text-licorice text-center font-corps max-[1200px]:text-sm">
          {t.intro}
        </p>
      </header>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-2"
        className="w-full flex flex-col max-[1200px]:gap-0 gap-5"
      >
        {causesData.map((cause) => (
          <AccordionItem
            key={cause.id}
            value={cause.id}
            className={cn(
              "border-none transition-all duration-300 bg-vanilla",
              cause.number === "2"
                ? "hover:bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] hover:bg-cover hover:bg-center hover:mix-blend-luminosity data-[state=open]:bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] data-[state=open]:bg-cover data-[state=open]:bg-center data-[state=open]:mix-blend-luminosity"
                : "hover:bg-[linear-gradient(270deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] hover:bg-cover hover:bg-center hover:mix-blend-luminosity data-[state=open]:bg-[linear-gradient(270deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] data-[state=open]:bg-cover data-[state=open]:bg-center data-[state=open]:mix-blend-luminosity"
            )}
            style={
              {
                "--bg-url": `url(${cause.backgroundImage})`,
              } as React.CSSProperties
            }
          >
            <AccordionTrigger className="group/trigger w-full px-[100px] py-[15px] max-[1200px]:px-6 max-[1200px]:py-3 flex items-center justify-between hover:no-underline">
              {cause.number === "2" ? (
                <>
                  <h3 className="text-left font-[beautique-display] text-[32px] leading-[38px] text-licorice transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla max-[1200px]:text-[22px] max-[1200px]:leading-[26px]">
                    {cause.title}
                  </h3>
                  <div className="text-[100px] font-[beautique-display-bold] leading-[150px] text-pumpkin transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla max-[1200px]:text-[40px] max-[1200px]:leading-[60px]">
                    {cause.number}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[100px] font-[beautique-display-bold] leading-[150px] text-pumpkin transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla max-[1200px]:text-[40px] max-[1200px]:leading-[60px]">
                    {cause.number}
                  </div>
                  <h3 className="text-right font-[beautique-display] text-[32px] leading-[38px] text-licorice transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla max-[1200px]:text-[22px] max-[1200px]:leading-[26px]">
                    {cause.title}
                  </h3>
                </>
              )}
            </AccordionTrigger>

            <AccordionContent className="px-[100px] pb-[50px] max-[1200px]:px-6 max-[1200px]:pb-6">
              <div
                className={cn(
                  "mx-auto text-antiflash max-[1200px]:text-justify",
                  // En desktop : item 1 et 3 => texte à droite
                  cause.number !== "2" && "min-[1200px]:text-right"
                )}
              >
                <div className="max-[1200px]:bg-white/10 max-[1200px]:backdrop-blur-sm max-[1200px]:border max-[1200px]:border-antiflash max-[1200px]:rounded-lg max-[1200px]:p-4">
                  {cause.content.description}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
