import { Card, CardContent } from "../../../../components/ui/card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    t1: "UNIR LES FORCES",
    d1: "Chaque membre bénéficie du soutien d’un réseau solide et contribue en retour au développement des projets des autres partenaires.",
    t2: "PARTAGER LES RESSOURCES",
    d2: "Le Cercle favorise la mise en commun des expertises, des contacts et des moyens financiers pour maximiser l’impact de chaque initiative.",
    t3: "BÉNÉFICIER D'UN ESPACE EXCLUSIF",
    d3: "Le CDA met en lumière vos actions tout en vous donnant accès à celles d’autres acteurs, dans une logique de co-apprentissage et de soutien mutuel.",
    t4: "INSPIRER ET ÊTRE INSPIRÉ",
    d4: "Accès privilégié aux événements du CDA : Gala annuel, dîners de travail, forums d’échange entre fondations et partenaires.",
  },
  en: {
    t1: "JOINING FORCES",
    d1: "Every member benefits from the support of a strong network and, in return, contributes to the development of the other partners' projects.",
    t2: "SHARING RESOURCES",
    d2: "The Circle encourages the pooling of expertise, contacts and financial means to maximise the impact of every initiative.",
    t3: "AN EXCLUSIVE SPACE",
    d3: "The CDA showcases your work while giving you access to that of other stakeholders, in a spirit of shared learning and mutual support.",
    t4: "INSPIRE AND BE INSPIRED",
    d4: "Privileged access to CDA events: annual Gala, working dinners, exchange forums between foundations and partners.",
  },
};

export const WhyJoinSection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const cardData = [
    {
      icon: "/cercle_section/solidarite_cercle.svg",
      title: t.t1,
      alt: "Icone solidarite",
      description:
        t.d1,
    },
    {
      icon: "/cercle_section/partenaire_cercle.svg",
      title: t.t2,
      alt: "Share",
      description:
        t.d2,
    },
    {
      icon: "/cercle_section/vip_cercle.svg",
      title: t.t3,
      alt: "Vip",
      description:
        t.d3,
    },
    {
      icon: "/cercle_section/ampoule_cercle.svg",
      title: t.t4,
      alt: "Inspi",
      description:
        t.d4,
    },
  ];

  if (isMobile) {
    return (
      <section className="flex flex-col gap-6 p-6 [background:url(../slider_cercle_section/slide_img_1.webp)_50%_50%_/_cover] w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="w-full h-auto bg-[#ebf0eee6] rounded-[20px] shadow-[0px_1px_3px_#00000080] backdrop-blur-[7.5px] backdrop-brightness-[100%] border-0"
          >
            <CardContent className="flex flex-col items-center justify-start gap-4 p-6">
              {/* Icône + titre */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-2"
              >
                <img loading="lazy" decoding="async" className="w-20 h-20" alt={card.alt} src={card.icon} />
                <div className="font-legendes-bold text-licorice text-xl text-center">
                  {card.title}
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-center text-licorice text-base leading-relaxed mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3 + 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
            </CardContent>
          </Card>
        ))}
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-5 p-[100px] [background:url(../slider_cercle_section/slide_img_1.webp)_50%_50%_/_cover] w-full">
      <div className="grid grid-cols-2 gap-5 w-full max-w-[1600px] mx-auto">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="h-[350px] bg-[#ebf0eee6] rounded-[20px] shadow-[0px_1px_3px_#00000080] backdrop-blur-[7.5px] backdrop-brightness-[100%] border-0"
          >
            <CardContent className="flex flex-col items-center justify-start gap-6 px-10 py-10 h-full">
              {/* Icône + titre : déjà visibles mais plus bas */}
              <motion.div
                initial={{ y: 40 }} // juste plus bas
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.5, // synchronisé avec description
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <img loading="lazy" decoding="async"
                  className={`relative ${
                    index === 0 ? "flex-[0_0_auto]" : "w-[90px] h-[90px]"
                  }`}
                  alt={card.alt}
                  src={card.icon}
                />
                <div className="relative w-fit font-legendes-bold font-[number:var(--legendes-bold-font-weight)] text-licorice text-[length:var(--legendes-bold-font-size)] text-center tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)] [font-style:var(--legendes-bold-font-style)]">
                  {card.title}
                </div>
              </motion.div>

              {/* Description qui "pousse" */}
              <motion.p
                className="text-center text-licorice text-lg leading-relaxed font-corps mt-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.5 + 0.3, // après l'icône + titre
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
