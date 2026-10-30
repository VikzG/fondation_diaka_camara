import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { CrossfadeStack } from "../../../../components/CrossfadeStack";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    d1: "Alliant avec finesse tradition mandingue et sonorités contemporaines, cette fusion a permis à la chanteuse guinéenne de se distinguer sur la scène musicale africaine, où elle s’impose comme une voix singulière et engagée.",
    l1: "PERFORMANCE MUSICALE",
    d2: "Précurseur du cirque ouest-africain, Circus Baobab parcourt le monde depuis 25 ans. Originaire de Guinée, cette compagnie cultive une identité singulière mêlant danses rituelles et nouvelles écritures contemporaines.",
    l2: "SPECTACLE ACROBATIQUE",
    d3: "Actrice, présentatrice, chroniqueuse culturelle, Prissy la Dégameuse est une constellation de talents. Elle s’est fait connaître grâce à ses vidéos humoristiques, où elle dépeint avec ironie et dérision les réalités de la société ivoirienne.",
    l3: "INTERLUDE HUMORISTIQUE",
    d4: "Bappa Oumar est une étoile montante de l'humour guinéen, dont le talent et la créativité l'ont rapidement propulsé sur la scène internationale, où il sait transformer les réalités sociales en rires tout en incitant à la réflexion.",
    d5: "La peinture de Mali Watta est un voyage spirituel et sensoriel, un dialogue entre la matière et l’immatériel, une invitation à explorer l’invisible, avec l’œil et le cœur. Une artiste en quête de vérité, dont l’œuvre vibrante captive les amateurs d’art.",
    guests: "2 INVITES\nSURPRISE",
    d6: "Pour cloturer le Gala en beauté.",
  },
  en: {
    d1: "Skilfully blending Mandinka tradition with contemporary sounds, this fusion has set the Guinean singer apart on the African music scene, where she stands out as a unique and committed voice.",
    l1: "MUSICAL PERFORMANCE",
    d2: "A pioneer of West African circus, Circus Baobab has been touring the world for 25 years. Originally from Guinea, the company has a distinctive identity blending ritual dances with new contemporary forms.",
    l2: "ACROBATIC SHOW",
    d3: "Actress, presenter and cultural columnist, Prissy la Dégameuse is a constellation of talents. She rose to fame with her comedy videos, in which she portrays the realities of Ivorian society with irony and wit.",
    l3: "COMEDY INTERLUDE",
    d4: "Bappa Oumar is a rising star of Guinean comedy, whose talent and creativity quickly took him to the international stage, where he turns social realities into laughter while prompting reflection.",
    d5: "Mali Watta's painting is a spiritual and sensory journey, a dialogue between the material and the immaterial, an invitation to explore the invisible with the eye and the heart. An artist in search of truth, whose vibrant work captivates art lovers.",
    guests: "2 SURPRISE\nGUESTS",
    d6: "To close the Gala in style.",
  },
};

export const IntervenantsSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const slides = [
    {
      title: "MANAMBA\nKANTÉ",
      description:
        t.d1,
      legend: t.l1,
      color: "text-pumpkin",
      image: "/page_gala_section/gala_slider/slide_1.webp",
      icon: "/page_gala_section/gala_slider/slide_1_icon.svg",
    },
    {
      title: "CIRCUS\nBAOBAB",
      description:
        t.d2,
      legend: t.l2,
      color: "text-colbat",
      image: "/page_gala_section/gala_slider/slide_2.webp",
      icon: "/page_gala_section/gala_slider/slide_2_icon.svg",
    },
    {
      title: "PRISSY\nLA DEGAMEUSE",
      description:
        t.d3,
      legend: t.l3,
      color: "text-carmin",
      image: "/page_gala_section/gala_slider/slide_3.webp",
      icon: "/page_gala_section/gala_slider/slide_3_icon.svg",
    },
    {
      title: "BAPPA\nOUMAR",
      description:
        t.d4,
      legend: t.l3,
      color: "text-pumpkin",
      image: "/page_gala_section/gala_slider/slide_4.webp",
      icon: "/page_gala_section/gala_slider/slide_4_icon.svg",
    },
    {
      title: "MALI\nWATTA",
      description:
        t.d5,
      legend: "LIVE-PAINTING",
      color: "text-colbat",
      image: "/page_gala_section/gala_slider/slide_5.webp",
      icon: "/page_gala_section/gala_slider/slide_5_icon.svg",
    },
    {
      title: t.guests,
      description: t.d6,
      legend: "",
      color: "text-carmin",
      image: "/page_gala_section/gala_slider/slide_6.webp",
      icon: "/page_gala_section/gala_slider/slide_6_icon.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const nextSlide = () => goToSlide((currentIndex + 1) % slides.length);
  const prevSlide = () =>
    goToSlide((currentIndex - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIndex];
  const prevSlideData = slides[(currentIndex - 1 + slides.length) % slides.length];
  const nextSlideData = slides[(currentIndex + 1) % slides.length];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1200);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const getArrowSrc = (index: number) => {
    if (index === 0 || index === 3) return "/orange_arrows/arrow_orange_right.svg";
    if (index === 1 || index === 4) return "/blue_arrow.svg";
    if (index === 2 || index === 5) return "/red_arrow.svg";
    return "/orange_arrows/arrow_orange_right.svg";
  };

  // Opacité d'un élément empilé : seul celui de la slide courante est visible
  const fadeClass = (index: number) =>
    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none";

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
<section className="h-[800px] bg-vanilla w-full relative px-6 py-12 flex flex-col items-center justify-around">
  {/* Grande image ronde : images empilées en fondu enchaîné */}
  <div className="relative w-[280px] h-[280px] shrink-0">
    {slides.map((slide, index) => (
      <div
        key={slide.image}
        className={`absolute inset-0 rounded-full shadow-lg bg-cover bg-center transition-opacity duration-700 ease-in-out ${fadeClass(index)}`}
        style={{ backgroundImage: `url(${slide.image})` }}
        aria-hidden={index !== currentIndex}
      />
    ))}
  </div>

  {/* Légende */}
  <CrossfadeStack
    items={slides}
    current={currentIndex}
    render={(slide) => (
      <div className={`font-legendes-categories ${slide.color} text-center`}>
        {slide.legend}
      </div>
    )}
  />

  {/* Titre */}
  <CrossfadeStack
    items={slides}
    current={currentIndex}
    render={(slide) => (
      <h2
        className={`whitespace-pre-line font-[beautique-display-bold] text-3xl text-center ${slide.color}`}
      >
        {slide.title}
      </h2>
    )}
  />

  {/* Description */}
  <CrossfadeStack
    items={slides}
    current={currentIndex}
    render={(slide) => (
      <p className="font-[Mona_Sans] text-licorice text-base text-center leading-6">
        {slide.description}
      </p>
    )}
  />

  {/* Navigation */}
  <div className="flex items-center justify-center w-full max-w-md mt-6 gap-10">
    {/* Pastille précédente */}
    <div
      onClick={prevSlide}
      className="w-[70px] h-[100px] grayscale rounded-full shadow-md bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${prevSlideData.image})` }}
    />

    {/* Bouton Next identique desktop */}
    <Button
      onClick={nextSlide}
      variant="outline"
      className="group inline-flex items-center px-6 py-2.5 rounded-[50px]
        border border-solid border-licorice bg-transparent hover:bg-vanilla h-auto
        transition-all duration-300"
    >
      <img
        className="w-[18px] h-[35px] ml-0 transition-all duration-300"
        alt="arrow"
        src={getArrowSrc(currentIndex)}
      />
    </Button>

    {/* Pastille suivante */}
    <div
      onClick={nextSlide}
      className="w-[70px] h-[100px] grayscale rounded-full shadow-md bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${nextSlideData.image})` }}
    />
  </div>
</section>
    );
  }

  // === VERSION DESKTOP ===
  return (
    <section className="bg-vanilla w-full relative">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto relative">
        {/* ✅ Ligne des vignettes */}
        <div className="absolute -top-[62px] left-0 w-full">
          <div className="flex w-full">
            <div className="flex-1 flex justify-center mr-20">
              <div className="flex justify-center gap-5 max-w-[550px] z-20">
                {slides.map((slide, index) => (
                  <div
                    key={`small-image-${index}`}
                    onClick={() => goToSlide(index)}
                    className={`
                      w-[125px] h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080]
                      bg-cover bg-[50%_50%] cursor-pointer transition-all duration-300
                      ${currentIndex === index ? "grayscale-0" : "grayscale hover:grayscale-0"}
                    `}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1" />
          </div>
        </div>

        {/* ✅ Ligne principale */}
        <div className="flex items-center w-full relative">
          {/* Texte gauche */}
          <div className="flex flex-col flex-1 relative">
            <CrossfadeStack
              items={slides}
              current={currentIndex}
              className="w-full h-full"
              render={(slide) => (
                <div className="flex flex-col items-center justify-center gap-[50px] px-20 pt-20 h-full w-full">
                  <h2
                    className={`text-center whitespace-pre-line font-[beautique-display-bold] text-5xl ${slide.color}`}
                  >
                    {slide.title}
                  </h2>

                  <p className="font-[Mona_Sans] text-licorice text-[17.5px] text-center leading-7">
                    {slide.description}
                  </p>

                  <div className={`font-legendes-categories ${slide.color}`}>
                    {slide.legend}
                  </div>
                </div>
              )}
            />

            <div className="flex justify-center px-20 pt-[50px] pb-20">
              <Button
                onClick={nextSlide}
                variant="outline"
                className="group inline-flex items-center px-6 py-2.5 rounded-[50px]
                border border-solid border-licorice bg-transparent hover:bg-vanilla h-auto
                transition-all duration-300"
              >
                <span
                  className="font-[beautique-display] text-3xl w-0 opacity-0 overflow-hidden
                  group-hover:w-auto group-hover:opacity-100 transition-all duration-300"
                >
                  Next
                </span>
                <img
                  className="w-[18.7px] h-[35px] ml-0 group-hover:ml-5 transition-all duration-300"
                  alt="arrow"
                  src={getArrowSrc(currentIndex)}
                />
              </Button>
            </div>
          </div>

          {/* Icônes empilées en fondu enchaîné */}
          {slides.map((slide, index) => (
            <img
              key={slide.icon}
              className={`absolute h-[321px] left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-700 ease-in-out
                ${[2, 3].includes(index) ? "bottom-0" : "bottom-10"} ${fadeClass(index)}`}
              alt={index === currentIndex ? "slide icon" : ""}
              aria-hidden={index !== currentIndex}
              src={slide.icon}
            />
          ))}

          {/* Image droite : images empilées en fondu enchaîné */}
          <div className="flex items-center p-32 flex-1 relative overflow-hidden">
            <div
              className={`flex-1 h-[550px] relative ${
                [0, 1, 4].includes(currentIndex) ? "z-10" : "z-0"
              }`}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.image}
                  className={`absolute inset-0 rounded-[500px] shadow-[0px_4px_4px_#00000080] bg-cover transition-opacity duration-700 ease-in-out ${fadeClass(index)}`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: index === 3 ? "center top" : "center",
                  }}
                  aria-hidden={index !== currentIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
