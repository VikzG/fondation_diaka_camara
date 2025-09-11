import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const WhyJoinSection = (): JSX.Element => {
  const cardData = [
    {
      icon: "/cercle_section/solidarite_cercle.svg",
      title: "UNIR LES FORCES",
      alt: "Icone solidarite",
      description:
        "Chaque membre bénéficie du soutien d’un réseau solide et contribue en retour au développement des projets des autres partenaires.",
    },
    {
      icon: "/cercle_section/partenaire_cercle.svg",
      title: "PARTAGER LES RESSOURCES",
      alt: "Share",
      description:
        "Le Cercle favorise la mise en commun des expertises, des contacts et des moyens financiers pour maximiser l’impact de chaque initiative.",
    },
    {
      icon: "/cercle_section/vip_cercle.svg",
      title: "BÉNÉFICIER D'UN ESPACE EXCLUSIF",
      alt: "Vip",
      description:
        "Le CDA met en lumière vos actions tout en vous donnant accès à celles d’autres acteurs, dans une logique de co-apprentissage et de soutien mutuel.",
    },
    {
      icon: "/cercle_section/ampoule_cercle.svg",
      title: "INSPIRER ET ÊTRE INSPIRÉ",
      alt: "Inspi",
      description:
        "Accès privilégié aux événements du CDA : Gala annuel, dîners de travail, forums d’échange entre fondations et partenaires.",
    },
  ];

  return (
    <section className="flex flex-col gap-5 p-[100px] [background:url(../slider_cercle_section/slide_img_1.png)_50%_50%_/_cover] w-full">
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
                <img
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
