import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



export const ValeursSubsection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Variants pour desktop
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // === VERSION MOBILE (slider) ===
  if (isMobile) {
    return (
      <section className="flex flex-col w-full items-center gap-10 py-[50px] bg-blanc">
        <div className="flex flex-col justify-center items-center gap-6 px-6 w-full">
          <h2 className="text-colbat font-[beautique-display-bold] text-4xl text-center">
            NOS VALEURS
          </h2>
          <p className="font-corps text-licorice text-base text-center leading-[26px]">
            Chaque projet est conçu pour créer un impact{" "}
            <span className="font-bold text-[#0a4ba5]">
              mesurable, transparent et durable
            </span>
            .
          </p>
        </div>

        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 25,
            stretch: 40,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          className="w-full px-6"
        >
          {valeurs.map((valeur, index) => (
            <SwiperSlide
              key={index}
              className=" w-[300px]" // largeur fixe pour coverflow
            >
              <Card className="flex flex-col border-none shadow-none bg-transparent h-[400px] w-full ">
                <CardContent className="flex flex-col flex-1 p-0 w-full px-6">
                  <div
                    className="flex flex-1 items-center justify-center p-5 rounded-t-xl overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${valeur.src})` }}
                  >
                    <div className="text-blanc text-3xl text-center font-[beautique-display]">
                      {valeur.title}
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-colbat rounded-b-xl h-[90px]">
                    <div className="text-vanilla text-base text-center font-semibold">
                      {valeur.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  // === VERSION DESKTOP (framer-motion + grid) ===
  return (
    <section className="flex flex-col w-full items-center gap-20 py-[70px] bg-blanc">
      <div className="flex flex-col justify-center items-center gap-10 px-60 w-full">
        <h2 className="text-colbat font-[beautique-display-bold] text-5xl text-center">
          NOS VALEURS
        </h2>
        <p className="font-corps text-licorice text-base text-center tracking-[0.5px] leading-[28px]">
          Chaque projet est conçu pour créer un impact{" "}
          <span className="font-bold text-[#0a4ba5]">
            mesurable, transparent et durable
          </span>
          .
        </p>
      </div>

      <motion.div
        className="flex items-end justify-center gap-5 relative w-full px-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="absolute w-full top-14 h-80 bg-antiflash" />
        {valeurs.map((valeur, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col relative w-[320px]"
          >
            <Card className="flex flex-col border-none shadow-none bg-transparent h-[422px] w-full">
              <CardContent className="flex flex-col flex-1 p-0 w-full">
                <div
                  className="flex flex-1 items-center justify-center p-5 rounded-t-xl overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${valeur.src})` }}
                >
                  <div className="text-blanc text-4xl text-center font-[beautique-display]">
                    {valeur.title}
                  </div>
                </div>
                <div className="flex items-center justify-center p-5 bg-colbat rounded-b-xl h-[100px]">
                  <div className="text-vanilla text-lg text-center font-semibold">
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
