import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const EncheresSubsection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const auctionDetails = [
    { label: "DÉBUT", date: "8 NOV." },
    { label: "FIN", date: "15 NOV." },
  ];

  const auctionFeatures = [
    "• Catalogue en ligne avec photos, description et prix de départ",
    "• Enchères ouvertes 1 semaine avant le Gala et clôture le soir de l'événement",
    "• Participation possible sur place ou à distance",
  ];

  const auctionStates = [
    {
      image: "/page_gala_section/mali_art.jpg",
      artist: "Mali Watta",
      description: 'TABLEAU " NOM DE L’OEUVRE "',
    },
    {
      image: "/page_gala_section/serge_art.jpg",
      artist: "Ousmane Mbaye",
      description: 'SCULPTURE " NOM DE L’OEUVRE "',
    },
    {
      image: "/page_gala_section/ousmane_art.jpg",
      artist: "Serge Hié",
      description: 'PHOTOGRAPHIE " NOM DE L’OEUVRE "',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentState = auctionStates[currentIndex];

  // ✅ auto-rotation toutes les 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % auctionStates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Ref pour déclencher l’animation au scroll
const ref = useRef(null);
const isInView = useInView(ref, {
  once: true,       // l’animation se joue 1 seule fois
  amount: 0.6       // déclenche quand 60% de la section est visible
});

  // ✅ États animation
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowFeatures(true);
      const timer1 = setTimeout(() => setShowCatalogue(true), 1000);
      const timer2 = setTimeout(() => setShowButton(true), 1500);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isInView]);

    if (isMobile) {
    return (
        <section
      ref={ref}
      id="encheres_gala"
      className="flex flex-col w-full items-center justify-start gap-12 py-12 bg-antiflash"
    >
{/* Bandeau bleu haut */}
<div className="bg-colbat flex items-center justify-center w-full max-w-[500px] h-[120px] overflow-visible relative">
  <AnimatePresence mode="wait">
    <motion.img
      key={currentState.image}
      src={currentState.image}
      alt={currentState.artist}
      className="object-contain h-full"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1.5 }} // augmente la taille de 20%
      exit={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
    />
  </AnimatePresence>
</div>
<div>

      {/* Artiste */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentState.artist}
          className="font-[beautique-display] text-2xl text-colbat text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentState.artist}
        </motion.div>
      </AnimatePresence>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentState.description}
          className="font-legendes-categories text-colbat text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {currentState.description}
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Vente aux enchères */}
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <h2 className="font-[beautique-display-bold] text-3xl text-colbat text-center">
          VENTE AUX<br/>ENCHÈRES
        </h2>
        <p className="text-licorice font-[beautique-display] px-4 text-3xl text-center leading-7">
          Participez à nos enchères caritatives pour acquérir des pièces uniques
          et soutenir nos actions
        </p>
      </div>

      {/* Card catalogue */}
<Card className="w-full max-w-[340px] rounded-[15px] border-0 overflow-hidden shadow-md">
  <CardContent className="flex flex-col w-full p-0 h-[500px] relative">
    {/* Partie image en haut (1/3) avec texte centré */}
    <div className="w-full h-1/3 relative overflow-hidden">
      <img
        src="/slider_cercle_section/slide_img_2.png"
        alt="Catalogue"
        className="w-full h-full object-cover"
      />
      {showCatalogue && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center font-legendes-bold text-vanilla text-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          LE LIEN DU CATALOGUE<br/>S&apos;AFFICHERA ICI
        </motion.div>
      )}
    </div>

    {/* Partie features en bas (2/3) */}
    <div className="flex flex-col items-center bg-white justify-around gap-2 p-4 h-2/3 w-full">
      {/* Flèche top */}
      <img
        src="/blue_arrow_top.svg"
        alt="Top arrow"
        className="w-[47px] h-[25px] mb-2"
      />

      {/* Auction features */}
      <div className="flex flex-col gap-4 w-ful px-3">
        {auctionFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="text-licorice text-center text-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {feature}
          </motion.div>
        ))}
      </div>

      {/* Flèche bottom */}
      <img
        src="/blue_arrow_bottom.svg"
        alt="Bottom arrow"
        className="w-[47px] h-[25px] mt-2"
      />
    </div>
  </CardContent>
</Card>

      {/* Bandeau bleu bas avec dates */}
      <Card className="w-full h-[120px] bg-colbat rounded-none border-none">
        <CardContent className="flex p-0 ms-16 flex-col items-start justify-center h-full">
          {auctionDetails.map((detail, index) => (
            <div key={index} className="flex items-center text-vanilla gap-10">
              <span className="font-legendes-bold">{detail.label}</span>
              <span className="font-[beautique-display-bold] text-2xl">{detail.date}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
    }

  // === DESKTOP ===
  return (

    <section
      ref={ref}
      id="encheres_gala"
      className="flex flex-col w-full items-center justify-center gap-20 py-20 px-20 bg-antiflash"
    >
      <div className="flex flex-col items-center gap-[100px] px-0 py-[50px] w-full max-w-[1400px]">
        <Card className="w-full h-[170px] bg-colbat rounded-[20px] border-0">
          <CardContent className="flex items-center px-[50px] py-0 h-full">
            {/* Bloc DÉBUT / FIN */}
            <div className="flex flex-col items-start flex-1">
              {auctionDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center gap-[30px] w-full"
                >
                  <div className="w-[70px] font-legendes-bold text-vanilla">
                    {detail.label}
                  </div>
                  <div className="w-fit font-[beautique-display-bold] text-5xl text-vanilla whitespace-nowrap">
                    {detail.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Image dynamique avec effet */}
            <div className="flex-1 h-[220px] relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentState.image}
                  src={currentState.image}
                  alt={currentState.artist}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            {/* Nom + description dynamiques */}
            <div className="flex flex-col items-end justify-end gap-2.5 flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentState.artist}
                  className="self-stretch font-[beautique-display] text-3xl text-vanilla text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentState.artist}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentState.description}
                  className="self-stretch font-legendes-categories text-vanilla text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {currentState.description}
                </motion.div>
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Texte central */}
      <div className="flex flex-col items-center justify-center gap-5 px-60 py-0 w-full">
        <h2 className="font-[beautique-display-bold] text-5xl text-colbat text-center">
          VENTE AUX ENCHÈRES
        </h2>
        <p className="text-licorice font-[beautique-display] text-4xl text-center">
          Participez à nos enchères caritatives pour acquérir
          <br />
          des pièces uniques et soutenir nos actions
        </p>
      </div>

      {/* Catalogue */}
      <Card className="w-full max-w-[1400px] mx-auto bg-white rounded-[20px] border-0 overflow-hidden shadow-[0px_1px_3px_#0000004c]">
        <CardContent className="flex p-0">
          {/* Colonne gauche */}
          <div className="flex flex-col w-1/2 h-[390px] items-center gap-[30px] p-[50px]">
            <img className="w-[47px] h-[25px]" alt="blue arrow top" src="/blue_arrow_top.svg" />
            <div className="flex flex-col items-start gap-5 w-full">
              <AnimatePresence>
                {showFeatures &&
                  auctionFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="w-full font-medium text-licorice text-[17.5px] text-center leading-7"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {feature}
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
            <img className="w-[47px] h-[25px]" alt="blue arrow bottom" src="/blue_arrow_bottom.svg" />
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col w-1/2 items-center justify-between gap-[50px] p-[50px] bg-[url(/slider_cercle_section/slide_img_2.png)] bg-cover bg-[50%_50%] rounded-[0px_20px_20px_0px] overflow-hidden">
            {/* Texte catalogue */}
            <AnimatePresence>
              {showCatalogue && (
                <motion.div
                  className="font-bold text-vanilla text-lg text-center w-full font-legendes-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  LE LIEN DU CATALOGUE S&apos;AFFICHERA ICI
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bouton */}
            <AnimatePresence>
              {showButton && (
                <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <Button className="bg-[#FFCD50] font-corps text-colbat w-full font-bold text-lg px-8 py-2 rounded-lg shadow h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
                    Bientôt disponible
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
