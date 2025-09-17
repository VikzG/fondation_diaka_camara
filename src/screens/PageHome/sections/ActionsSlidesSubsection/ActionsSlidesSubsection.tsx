import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { AnimatedCircles } from "../../../../components/AnimatedCircles";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "#Scolarisons100filles",
    subtitle: "45 jeunes filles déjà prises en charge en 2024",
    description:
      "Cette année, nous avons scolarisé 45 jeunes filles issues de milieux défavorisés, en leur offrant la Bourse Zenab Soumah.",
    image: "/actions_section/action_img_1.png",
  },
  {
    title: "Une École, une Bibliothèque",
    subtitle:
      "Rénovation de la bibliothèque de l’école Château d’Eau, impactant 1 200 élèves",
    description:
      "Le projet a pour but, la mise en place de bibliothèques modernes dans les écoles publiques à travers les cinq communes de Conakry.",
    image: "/actions_section/action_img_2.png",
  },
  {
    title: "#BrisonsleSilence",
    subtitle:
      "450 000 personnes sensibilisées aux VBG (Violences Basées sur Le Genre)",
    description:
      "Brisons le silence pour les femmes victimes de violence. Leur voix compte, leur sécurité importe. En parlant, en écoutant, en agissant, nous pouvons mettre fin à ces injustices.",
    image: "/actions_section/action_img_3.png",
  },
  {
    title: "Partenariats Culturels",
    subtitle: "72 Heures du Livre, concours Plumes Fines, FestiKids",
    description:
      "Un résumé court en trois lignes à rédiger ici pour donner plus de détails au lecteur/ potentiel donneur sur le but de l’action introduite sur cette slide.",
    image: "/actions_section/action_img_4.png",
  },
  {
    title: "Actions Solidaires",
    subtitle:
      "Interventions chirurgicales pour 4 enfants, dons aux orphelins, soutien à 14 enfants supplémentaires via partenariats",
    description:
      "Un résumé court en trois lignes à rédiger ici pour donner plus de détails au lecteur/ potentiel donneur sur le but de l’action introduite sur cette slide.",
    image: "/actions_section/action_img_5.png",
  },
  {
    title: "Santé publique",
    subtitle: "Forum Rose sur le cancer du sein",
    description:
      "La Fondation Diaka Camara était partenaire sur le Forum Rose, un événement exceptionnel organisé par Women's Meeting Day  pour sensibiliser contre le cancer du sein",
    image: "/actions_section/action_img_6.png",
  },
  {
    title: "Inclusion",
    subtitle: "Production d’un documentaire sur l’autisme",
    description:
      "“Voix au-delà du Spectre – L’Afrique en Voix”, le premier documentaire qui explore l’autisme en Afrique, en montrant que loin d’être une barrière, l’autisme offre une perception unique.",
    image: "/actions_section/action_img_7.png",
  },
];

export const ActionsSlidesSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="w-full bg-antiflash px-30 py-20">
      <div className="flex flex-wrap items-start justify-center gap-40 max-w-[1440px] mx-auto">
        <div className="flex-1 min-w-0 flex flex-col justify-between h-[709px] px-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-colbat font-[beautique-display-bold] text-5xl">
              NOS ACTIONS
            </h2>
          </div>

          {/* Animation du bloc texte */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col gap-5"
            >
              <div className="font-[beautique-display] text-pumpkin text-5xl">
                {slide.title}
              </div>

              <div className="[font-family:'Mona_Sans',Helvetica] text-licorice text-lg font-bold">
                {slide.subtitle}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col gap-10">
            <p className="font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
              {slide.description}
            </p>
            {/* 🔗 Lien vers /don */}
            <Link to="/don" className="w-full">
              <Card className="group bg-[#ffffffcc] rounded-[10px] cursor-pointer shadow-[0px_1px_2px_#00000040] backdrop-blur-[7.5px] border-0 hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <CardContent className="flex items-center gap-5 px-5 py-2.5">
                  {/* Image normale */}
                  <img
                    className="w-[52px] h-[55px] transition-all duration-300 group-hover:opacity-0"
                    alt="don icon"
                    src="/nav_icons/nav_don_icon.svg"
                  />
                  {/* Image au hover */}
                  <img
                    className="w-[52px] h-[55px] absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
                    alt="don icon hover"
                    src="/nav_icons/nav_don_icon_2.svg"
                  />
                  <div className="flex-1 [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg text-colbat text-center">
                    Faire un don à la Fondation
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-[570px] h-[709px] items-center justify-end gap-16">
          <div className="relative flex items-center justify-center w-[450px] h-[450px]">
            {/* Animation de l'image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                className="w-[360px] h-[360px] object-cover rounded-full border-solid border-2 border-[#0A4BA5] absolute"
                alt="Actions"
                src={slide.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Cercle SVG plus grand */}
            <AnimatedCircles currentSlide={currentSlide} />
          </div>

          <div className="flex flex-col items-center gap-[30px] w-full">
            <div className="font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-colbat text-[length:var(--legendes-categories-font-size)] text-center tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] whitespace-nowrap [font-style:var(--legendes-categories-font-style)]">
              NOS PROJETS PHARES 2024
            </div>

            <Button className="bg-colbat text-antiflash [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
              Télécharger le rapport d&apos;activité 2024
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
