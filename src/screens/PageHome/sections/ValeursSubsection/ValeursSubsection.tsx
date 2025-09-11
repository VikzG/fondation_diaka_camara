import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const ValeursSubsection = (): JSX.Element => {
  const valeurs = [
    {
      title: "Solidarité",
      description: "LE PROGRÈS SE CONSTRUIT ENSEMBLE",
      src: "/valeurs_section/valeur_img_1.png",
    },
    {
      title: "Transparence",
      description: "CHAQUE DON EST TRAÇABLE",
      src: "/valeurs_section/valeur_img_2.png",
    },
    {
      title: "Excellence",
      description: "DES STANDARS ÉLEVÉS DANS L'EXÉCUTION",
      src: "/valeurs_section/valeur_img_3.png",
    },
    {
      title: "Impact durable",
      description: "DES SOLUTIONS CONCRÈTES ET PÉRENNES",
      src: "/valeurs_section/valeur_img_4.png",
    },
  ];

  // Variants pour le conteneur (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // 0.5s entre chaque carte
      },
    },
  };

  // Variants pour chaque carte
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="flex flex-col w-full items-center gap-20 py-[70px] bg-blanc">
      <div className="flex flex-col justify-center items-center gap-10 px-60 w-full">
        <h2 className="text-colbat font-[beautique-display-bold] text-5xl text-center">
          NOS VALEURS
        </h2>

        <p className="relative self-stretch font-corps text-licorice text-base text-center tracking-[0.5px] leading-[28px]">
          Chaque projet est conçu pour créer un impact{" "}
          <span className="font-bold text-[#0a4ba5]">
            mesurable, transparent et durable
          </span>
          .
        </p>
      </div>

      {/* Conteneur des cartes avec animation au scroll */}
      <motion.div
        className="flex items-end justify-center gap-5 relative w-full px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }} // déclenche quand 30% de la section est visible
      >
        <div className="absolute w-full top-14 h-80 bg-antiflash" />

        {valeurs.map((valeur, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col relative w-[320px]"
          >
            <Card className="flex flex-col relative border-none shadow-none bg-transparent h-[422px] w-full">
              <CardContent className="flex flex-col flex-1 p-0 w-full">
                {/* Image / titre */}
                <div
                  className="flex flex-1 items-center justify-center p-5 relative self-stretch w-full rounded-t-xl overflow-hidden bg-cover bg-[50%_50%]"
                  style={{ backgroundImage: `url(${valeur.src})` }}
                >
                  <div className="text-blanc text-4xl text-center font-[beautique-display]">
                    {valeur.title}
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-center justify-center p-5 relative w-full bg-colbat rounded-b-xl h-[100px]">
                  <div className="flex-1 text-vanilla text-lg libertinus-sans-bold text-center ">
                    {valeur.description}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
