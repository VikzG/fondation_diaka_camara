"use client";

import { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const AboutMeSection = (): JSX.Element => {
  const aboutMeCards = [
    {
      icon: "/page_presidente_section/orange_books.svg",
      iconAlt: "Icone study",
      title: "Études & Formation",
      description:
        "Diaka Camara a poursuivi ses études aux États-Unis, où elle s’est spécialisée en journalisme et communication. Cette formation académique internationale lui a permis d’acquérir une solide expertise dans la création de contenus et la gestion d’initiatives médiatiques et culturelles, qu’elle mettra plus tard au service du développement et de la philanthropie.",
    },
    {
      icon: "/page_presidente_section/blue_case.svg",
      iconAlt: "Icone pro",
      title: "Parcours Professionnel",
      description:
        "De retour en Guinée, Diaka Camara fonde CBC Worldwide, une société de production à travers laquelle elle produit et présente des émissions qui modernisent le paysage médiatique guinéen. Sa créativité et son professionnalisme en font rapidement une figure reconnue du secteur audiovisuel, capable de bâtir des passerelles entre culture, entrepreneuriat et engagement citoyen.",
    },
  ];

  // état pour savoir quelles cards sont ouvertes
  const [openedCards, setOpenedCards] = useState<boolean[]>(
    aboutMeCards.map(() => false)
  );

  const handleHover = (index: number) => {
    const newOpened = [...openedCards];
    newOpened[index] = true; // on ouvre définitivement la card
    setOpenedCards(newOpened);
  };

  return (
    <section id="about_fondatrice" className="w-full flex items-center justify-center gap-20 p-10 bg-[url(/page_presidente_section/presidente_bg.png)] bg-cover bg-[50%_40%] bg-no-repeat min-h-[800px]">
      {aboutMeCards.map((card, index) => (
        <motion.div
          key={index}
          onMouseEnter={() => handleHover(index)}
          className="group flex-1 max-w-[700px] bg-[#ffffffcc] rounded-[20px] shadow-[0px_1px_3px_#00000040] backdrop-blur-[7.5px] border-0 overflow-hidden"
          initial={{ height: 350 }}
          animate={{ height: openedCards[index] ? "auto" : 350 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <CardContent className="flex flex-col items-center gap-6 p-[50px]">
            {/* Icon + title */}
            <div className="flex flex-col items-center gap-[30px] w-full">
              <img className="w-[110px] h-[110px]" alt={card.iconAlt} src={card.icon} />

              <h3 className="text-center font-[beautique-display] text-licorice text-4xl">
                {card.title}
              </h3>
            </div>

            {/* Description */}
            <motion.p
              className="text-licorice text-[16px] leading-7 text-justify w-full"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: openedCards[index] ? 1 : 0, y: openedCards[index] ? 0 : -8 }}
              transition={{ duration: 0.5 }}
            >
              {card.description}
            </motion.p>

            {/* Arrow */}
            <img
              className="w-[47px] h-[25px] mt-4"
              alt="arrow bottom"
              src={
                index === 1
                  ? "/page_presidente_section/bottom_arrow_blue.svg"
                  : "/page_presidente_section/bottom_arrow_orange.svg"
              }
            />
          </CardContent>
        </motion.div>
      ))}
    </section>
  );
};
