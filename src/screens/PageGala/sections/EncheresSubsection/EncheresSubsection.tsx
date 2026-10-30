import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { usePreloadImages } from "../../../../lib/usePreloadImages";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    start: "DÉBUT",
    end: "FIN",
    f1: "• Catalogue en ligne avec photos, description et prix de départ",
    f2: "• Enchères ouvertes 1 semaine avant le Gala et clôture le soir de l'événement",
    f3: "• Participation possible sur place ou à distance",
    d1: "Cette œuvre de Mali Watta rend hommage à toutes les filles dont l’avenir peut basculer grâce à l’éducation, symbolisée par la figure bleue portant dignement son histoire et les six livres représentant apprentissage, curiosité, créativité et liberté. Le septième livre, ouvert entre ses mains, incarne le pouvoir de choisir, de se protéger et de se projeter, tandis que les couleurs profondes traduisent à la fois la mémoire, la sensibilité et les défis auxquels elles font face, affirmant que l’éducation est le plus puissant outil de transformation.",
    d2: "Chef-d’œuvre M’Blo Baoulé du Goli de Béoumi, véritable emblème de la grâce et de l’esthétique baoulé. Issue de la prestigieuse collection Stanzi, l’un des plus grands collectionneurs de Côte d’Ivoire, puis du cabinet Glory Art First de Serge, figure incontournable du marché de l’art international, la pièce est accompagnée d’un certificat d’authenticité signé par le Directeur du Musée des Civilisations de Côte d’Ivoire. L’an dernier, un masque comparable provenant du même collectionneur s’est envolé à plus de 90 millions de FCFA lors d’une vente caritative d’exception.",
    d3: "Au design industriel et artistique, avec assise arquée en plaques colorées issues de matériaux recyclés, reposant sur une structure métallique robuste.Polyvalent, il peut servir de siège, de repose-pieds ou d’objet décoratif au charme unique.",
    sold1: "- VENDUE -",
    sold2: "- VENDUE - ",
    sold3: "- VENDUE -  ",
    titleMobile: (
      <>
        VENTE AUX
        <br />
        ENCHÈRES
      </>
    ),
    title: "VENTE AUX ENCHÈRES",
    intro: "Participez à nos enchères caritatives pour acquérir des pièces uniques et soutenir nos actions",
    introDesktop: (
      <>
        Participez à nos enchères caritatives pour acquérir
        <br />
        des pièces uniques et soutenir nos actions
      </>
    ),
    confidential: "Le prix des oeuvres est confidentiel.",
    catalogueMobile: (
      <>
        LE LIEN DU CATALOGUE
        <br />
        S&apos;AFFICHERA ICI
      </>
    ),
    catalogue: <>LE LIEN DU CATALOGUE S&apos;AFFICHERA ICI</>,
    soon: "Bientôt disponible",
  },
  en: {
    start: "START",
    end: "END",
    f1: "• Online catalogue with photos, descriptions and starting prices",
    f2: "• Bidding opens 1 week before the Gala and closes on the evening of the event",
    f3: "• Take part on site or remotely",
    d1: "This work by Mali Watta pays tribute to all the girls whose future can be transformed by education, symbolised by the blue figure proudly carrying her story and the six books representing learning, curiosity, creativity and freedom. The seventh book, open in her hands, embodies the power to choose, to protect oneself and to look ahead, while the deep colours express memory, sensitivity and the challenges they face, affirming that education is the most powerful tool for transformation.",
    d2: "A M’Blo Baoulé masterpiece from the Goli of Béoumi, a true emblem of Baoulé grace and aesthetics. From the prestigious Stanzi collection, one of the greatest collectors in Côte d’Ivoire, and then from Serge’s Glory Art First gallery, a leading figure of the international art market, the piece comes with a certificate of authenticity signed by the Director of the Museum of Civilisations of Côte d’Ivoire. Last year, a comparable mask from the same collector sold for more than 90 million FCFA at an exceptional charity sale.",
    d3: "With an industrial and artistic design, its arched seat made of coloured panels from recycled materials rests on a sturdy metal frame. Versatile, it can be used as a seat, a footrest or a decorative object with unique charm.",
    sold1: "- SOLD -",
    sold2: "- SOLD - ",
    sold3: "- SOLD -  ",
    titleMobile: (
      <>
        CHARITY
        <br />
        AUCTION
      </>
    ),
    title: "CHARITY AUCTION",
    intro: "Take part in our charity auctions to acquire unique pieces and support our work",
    introDesktop: (
      <>
        Take part in our charity auctions to acquire
        <br />
        unique pieces and support our work
      </>
    ),
    confidential: "The price of the works is confidential.",
    catalogueMobile: (
      <>
        THE CATALOGUE LINK
        <br />
        WILL APPEAR HERE
      </>
    ),
    catalogue: "THE CATALOGUE LINK WILL APPEAR HERE",
    soon: "Coming soon",
  },
};

export const EncheresSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const auctionDetails = [
    { label: t.start, date: "13 NOV." },
    { label: t.end, date: "15 NOV." },
  ];

  const auctionFeatures = [
    t.f1,
    t.f2,
    t.f3,
  ];

  const auctionStates = [
    {
      image: "/page_gala_section/mali_art.webp",
      artist: "Mali Watta",
      description: t.d1,
      statut: t.sold1,
    },
    {
      image: "/page_gala_section/serge_art.webp",
      artist: "Ousmane Mbaye",
      description: t.d2,
      statut: t.sold2,
    },
    {
      image: "/page_gala_section/ousmane_art.webp",
      artist: "Serge Hié",
      description: t.d3,
      statut: t.sold3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentState = auctionStates[currentIndex];
  usePreloadImages(auctionStates.map((s) => s.image));

  // ✅ auto-rotation toutes les 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % auctionStates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Ref pour déclencher l’animation au scroll
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true, // l’animation se joue 1 seule fois
    amount: 0.6, // déclenche quand 60% de la section est visible
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
        <div className="flex flex-col gap-4 px-2">
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
          <AnimatePresence mode="wait">
            <motion.div
              key={currentState.statut}
              className="font-legendes-categories text-xl text-colbat text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {currentState.statut}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vente aux enchères */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="font-[beautique-display-bold] text-3xl text-colbat text-center">
            {t.titleMobile}
          </h2>
          <p className="text-licorice font-[beautique-display] px-4 text-3xl text-center leading-7">
            {t.intro}
          </p>
                  <p className="font-legendes-categories italic text-xl text-colbat text-center">
          {t.confidential}
        </p>
        </div>

        {/* Card catalogue */}
        <Card className="w-full max-w-[340px] rounded-[15px] border-0 overflow-hidden shadow-md">
          <CardContent className="flex flex-col w-full p-0 h-[500px] relative">
            {/* Partie image en haut (1/3) avec texte centré */}
            <div className="w-full h-1/3 relative overflow-hidden">
              <img loading="lazy" decoding="async"
                src="/slider_cercle_section/slide_img_2.webp"
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
                  {t.catalogueMobile}
                </motion.div>
              )}
            </div>

            {/* Partie features en bas (2/3) */}
            <div className="flex flex-col items-center bg-white justify-around gap-2 p-4 h-2/3 w-full">
              {/* Flèche top */}
              <img loading="lazy" decoding="async"
                src="/blue_arrow_top.svg"
                alt="Top arrow"
                className="w-[47px] h-[25px] mb-2"
              />

              {/* Auction features */}
              <div className="flex flex-col gap-4 px-3">
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
              <img loading="lazy" decoding="async"
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
              <div
                key={index}
                className="flex items-center text-vanilla gap-10"
              >
                <span className="font-legendes-bold">{detail.label}</span>
                <span className="font-[beautique-display-bold] text-2xl">
                  {detail.date}
                </span>
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
    <div className="flex flex-col items-center gap-[40px] w-full max-w-[1400px]">

      {/* Nom artiste au-dessus du cadran bleu */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentState.artist}
          className="font-[beautique-display] text-4xl text-colbat text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentState.artist}
        </motion.div>
      </AnimatePresence>

      {/* === CADRAN BLEU AVEC DATES + IMAGE + DESCRIPTION ==== */}
      <Card className="w-full h-[300px] bg-colbat rounded-[20px] border-0">
        <CardContent className="flex items-center px-[50px] h-full gap-4 py-4">

          {/* Bloc DÉBUT / FIN (conservé) */}
          <div className="flex flex-col items-start flex-1">
            {auctionDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center gap-[30px] w-full"
              >
                <div className="w-[70px] font-legendes-bold text-vanilla">
                  {detail.label}
                </div>
                <div className="w-fit font-[beautique-display-bold] text-4xl text-vanilla whitespace-nowrap">
                  {detail.date}
                </div>
              </div>
            ))}
          </div>

          {/* Image dynamique */}
          <div className="flex-1 h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentState.image}
                src={currentState.image}
                alt={currentState.artist}
                className="max-h-full max-w-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Description DANS le cadran bleu */}
          <div className="flex-1 flex items-end justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState.description}
                className="font-legendes-categories text-vanilla text-right"
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

      {/* Statut SOUS le cadran bleu */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentState.statut}
          className="font-legendes-categories text-2xl text-colbat text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {currentState.statut}
        </motion.div>
      </AnimatePresence>
    </div>

      {/* Texte central */}
      <div className="flex flex-col items-center justify-center gap-5 px-60 py-0 w-full">
        <h2 className="font-[beautique-display-bold] text-5xl text-colbat text-center">
          {t.title}
        </h2>
        <p className="text-licorice font-[beautique-display] text-4xl text-center">
          {t.introDesktop}
        </p>
        <p className="font-legendes-categories italic text-2xl text-colbat text-center">
          {t.confidential}
        </p>
      </div>

      {/* Catalogue */}
      <Card className="w-full max-w-[1400px] mx-auto bg-white rounded-[20px] border-0 overflow-hidden shadow-[0px_1px_3px_#0000004c]">
        <CardContent className="flex p-0">
          {/* Colonne gauche */}
          <div className="flex flex-col w-1/2 h-[390px] items-center gap-[30px] p-[50px]">
            <img loading="lazy" decoding="async"
              className="w-[47px] h-[25px]"
              alt="blue arrow top"
              src="/blue_arrow_top.svg"
            />
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
            <img loading="lazy" decoding="async"
              className="w-[47px] h-[25px]"
              alt="blue arrow bottom"
              src="/blue_arrow_bottom.svg"
            />
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col w-1/2 items-center justify-between gap-[50px] p-[50px] bg-[url(/slider_cercle_section/slide_img_2.webp)] bg-cover bg-[50%_50%] rounded-[0px_20px_20px_0px] overflow-hidden">
            {/* Texte catalogue */}
            <AnimatePresence>
              {showCatalogue && (
                <motion.div
                  className="font-bold text-vanilla text-lg text-center w-full font-legendes-bold"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {t.catalogue}
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
                    {t.soon}
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
