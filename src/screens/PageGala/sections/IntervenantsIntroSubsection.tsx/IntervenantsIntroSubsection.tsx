"use client";

import { motion } from "framer-motion";

export const IntervenantsIntroSubsection = (): JSX.Element => {
  // Variants génériques pour le fade + slide léger
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.8, // ⚡ 500ms entre chaque apparition
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="flex flex-col items-center gap-20 px-20 py-32 bg-white w-full relative max-w-[1600px] mx-auto">
      <header className="flex flex-col items-center justify-end relative w-full">
        <motion.h1
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="font-[beautique-display-bold] text-5xl relative w-full  
          text-licorice text-center"
        >
          UNE
        </motion.h1>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full font-[beautique-display-bold] text-5xl
          text-licorice  text-center 
          
          "
        >
          CÉLÉBRATION
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative w-full max-w-[1240px] h-[50px] 
          text-licorice 
          text-center 
          font-[beautique-display-bold] text-5xl
          whitespace-nowrap "
        >
          ARTISTIQUE &amp; CULTURELLE
        </motion.div>
      </header>

      {/* Conteneur animé en largeur */}
      <motion.div
        initial={{ width: "30%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 3 * 0.8 }} // delay aligné avec "Inoubliable"
        viewport={{ once: true }}
        className="flex py-24 items-center justify-center gap-2.5 p-2.5 
        relative rounded-[500px] overflow-hidden 
        bg-[url(/page_gala_section/slider_3_img.png)] bg-cover bg-[50%_50%] 
        mx-auto"
      >
        {/* Texte animé séparément */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative flex-1 font-[beautique-display] text-vanilla text-6xl text-center"
        >
          Inoubliable
        </motion.div>
      </motion.div>

      <motion.div
        custom={4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-20 flex-1">
          <h2 className="font-[beautique-display] text-licorice text-4xl whitespace-nowrap">
            Les Artistes &amp; Intervenants
          </h2>
          <img
            className="w-[47px] h-[25px]"
            alt="red arrow"
            src="/actualites_section/red_top_arrow.svg"
          />
        </div>

        <div className="flex flex-col items-end gap-[30px] relative flex-1">
          <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-justify tracking-[0] leading-7 relative w-full">
            <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] tracking-[0] leading-7">
              Le Gala 2025 ne sera pas seulement un moment de solidarité et de
              philanthropie, mais aussi{" "}
            </span>
            <span className="font-bold">
              une célébration artistique et culturelle
            </span>
            <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] tracking-[0] leading-7">
              . Des artistes de renommée internationale et des personnalités
              engagées offriront leurs voix et leurs talents pour amplifier
              notre message et créer une expérience mémorable.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};
