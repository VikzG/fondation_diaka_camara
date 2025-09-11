import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { cn } from "../../../../lib/utils";

export const CausesSubsection = (): JSX.Element => {
  const causesData = [
    {
      id: "item-1",
      number: "1",
      title: "Autonomisation des femmes",
      backgroundImage: "/causes_section/causes_img_1.png",
      content: {
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
    },
    {
      id: "item-2",
      number: "2",
      title: "Accès à l'éducation",
      backgroundImage: "/causes_section/causes_img_2.png",
      content: {
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
    },
    {
      id: "item-3",
      number: "3",
      title: "Santé et protection",
      backgroundImage: "/causes_section/causes_img_3.png",
      content: {
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
    },
  ];

  return (
    <section className="w-full items-center gap-[70px] pt-0 pb-5 px-0 flex flex-col">
      <header className="flex flex-col w-full max-w-[1240px] items-center gap-10 px-60 py-0 relative">
        <h2 className="text-pumpkin text-center font-[beautique-display-bold] text-5xl">
          NOS CAUSES
        </h2>
        <p className="text-licorice text-center font-corps">
          Nos programmes ciblent{" "}
          <span className="font-bold text-pumpkin">
            trois priorités stratégiques
          </span>{" "}
          pour améliorer la vie des filles et des communautés vulnérables en
          Guinée.
        </p>
      </header>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-2"
        className="w-full flex flex-col gap-5"
      >
        {causesData.map((cause) => (
<AccordionItem
  key={cause.id}
  value={cause.id}
  className={cn(
    "border-none transition-all duration-300 bg-vanilla",
    cause.number === "2"
      ? // Gradient foncé à droite (comme avant)
        "hover:bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] hover:bg-cover hover:bg-center hover:mix-blend-luminosity data-[state=open]:bg-[linear-gradient(90deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] data-[state=open]:bg-cover data-[state=open]:bg-center data-[state=open]:mix-blend-luminosity"
      : // Gradient foncé à gauche
        "hover:bg-[linear-gradient(270deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] hover:bg-cover hover:bg-center hover:mix-blend-luminosity data-[state=open]:bg-[linear-gradient(270deg,rgba(0,0,0,0.4)_18%,rgba(0,0,0,0)_94%),var(--bg-url)] data-[state=open]:bg-cover data-[state=open]:bg-center data-[state=open]:mix-blend-luminosity"
  )}
  style={
    {
      "--bg-url": `url(${cause.backgroundImage})`,
    } as React.CSSProperties
  }
>
            {/* Trigger */}
            <AccordionTrigger className="group/trigger w-full px-[100px] py-[15px] flex items-center justify-between hover:no-underline">
              {cause.number === "2" ? (
                <>
                  <h3 className="text-left font-[beautique-display] text-[32px] leading-[38px] text-licorice transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla">
                    {cause.title}
                  </h3>
                  <div className="text-[100px] font-[beautique-display-bold] leading-[150px] text-pumpkin transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla">
                    {cause.number}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-[100px] font-[beautique-display-bold] leading-[150px] text-pumpkin transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla">
                    {cause.number}
                  </div>
                  <h3 className="text-right font-[beautique-display] text-[32px] leading-[38px] text-licorice transition-colors group-hover/trigger:text-vanilla group-aria-expanded/trigger:text-vanilla">
                    {cause.title}
                  </h3>
                </>
              )}
            </AccordionTrigger>

            {/* Content → description sur le même fond */}
            <AccordionContent className="px-[100px] pb-[50px]">
              <div
                className={`text-[17.5px] leading-7 text-vanilla ${
                  cause.number !== "2" ? "text-right" : ""
                }`}
              >
                {cause.content.description}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
