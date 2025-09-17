import { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const IntervenantsSubsection = (): JSX.Element => {
  const slides = [
    {
      title: "MANAMBA\nKANTÉ",
      description:
        "Alliant avec finesse tradition mandingue et sonorités contemporaines, cette fusion a permis à la chanteuse guinéenne de se distinguer sur la scène musicale africaine, où elle s’impose comme une voix singulière et engagée.",
      legend: "PERFORMANCE MUSICALE",
      color: "text-pumpkin",
      image: "/page_gala_section/gala_slider/slide_1.png",
      icon: "/page_gala_section/gala_slider/slide_1_icon.svg",
    },
    {
      title: "CIRCUS\nBAOBAB",
      description:
        "Précurseur du cirque ouest-africain, Circus Baobab parcourt le monde depuis 25 ans. Originaire de Guinée, cette compagnie cultive une identité singulière mêlant danses rituelles et nouvelles écritures contemporaines.",
      legend: "SPECTACLE ACROBATIQUE",
      color: "text-colbat",
      image: "/page_gala_section/gala_slider/slide_2.png",
      icon: "/page_gala_section/gala_slider/slide_2_icon.svg",
    },
    {
      title: "PRISSY\nLA DEGAMEUSE",
      description:
        "Actrice, présentatrice, chroniqueuse culturelle, Prissy la Dégameuse est une constellation de talents. Elle s’est fait connaître grâce à ses vidéos humoristiques, où elle dépeint avec ironie et dérision les réalités de la société ivoirienne.",
      legend: "INTERLUDE HUMORISTIQUE",
      color: "text-carmin",
      image: "/page_gala_section/gala_slider/slide_3.png",
      icon: "/page_gala_section/gala_slider/slide_3_icon.svg",
    },
    {
      title: "BAPPA\nOUMAR",
      description:
        "Bappa Oumar est une étoile montante de l'humour guinéen, dont le talent et la créativité l'ont rapidement propulsé sur la scène internationale, où il sait transformer les réalités sociales en rires tout en incitant à la réflexion.",
      legend: "INTERLUDE HUMORISTIQUE",
      color: "text-pumpkin",
      image: "/page_gala_section/gala_slider/slide_4.png",
      icon: "/page_gala_section/gala_slider/slide_4_icon.svg",
    },
    {
      title: "MALI\nWATTA",
      description:
        "La peinture de Mali Watta est un voyage spirituel et sensoriel, un dialogue entre la matière et l’immatériel, une invitation à explorer l’invisible, avec l’œil et le cœur. Une artiste en quête de vérité, dont l’œuvre vibrante captive les amateurs d’art.",
      legend: "LIVE-PAINTING",
      color: "text-colbat",
      image: "/page_gala_section/gala_slider/slide_5.png",
      icon: "/page_gala_section/gala_slider/slide_5_icon.svg",
    },
    {
      title: "2 INVITES\nSURPRISE",
      description: "Pour cloturer le Gala en beauté.",
      legend: "",
      color: "text-carmin",
      image: "/page_gala_section/gala_slider/slide_6.png",
      icon: "/page_gala_section/gala_slider/slide_6_icon.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 300); // durée du fade-out
  };

  const currentSlide = slides[currentIndex];

  const getArrowSrc = (index: number) => {
    if (index === 0 || index === 3)
      return "/orange_arrows/arrow_orange_right.svg";
    if (index === 1 || index === 4) return "/blue_arrow.svg";
    if (index === 2 || index === 5) return "/red_arrow.svg";
    return "/orange_arrows/arrow_orange_right.svg";
  };

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
                    onClick={() => {
                      setFade(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                        setFade(false);
                      }, 300);
                    }}
                    className={`
                      w-[125px] h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] 
                      bg-cover bg-[50%_50%] cursor-pointer transition-all duration-300
                      ${
                        currentIndex === index
                          ? "grayscale-0"
                          : "grayscale hover:grayscale-0"
                      }
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
            <div className="flex flex-col items-center justify-center gap-[50px] p-20 w-full h-full">
              <h2
                className={`font-titres text-center whitespace-pre-line font-[number:var(--titres-font-weight)] ${currentSlide.color} 
                  text-[length:var(--titres-font-size)] tracking-[var(--titres-letter-spacing)] 
                  leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]`}
              >
                {currentSlide.title}
              </h2>

              <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center leading-7">
                {currentSlide.description}
              </p>

              <div className={`font-legendes-categories ${currentSlide.color}`}>
                {currentSlide.legend}
              </div>

              <Button
                onClick={nextSlide}
                variant="outline"
                className="group inline-flex items-center px-6 py-2.5 rounded-[50px] 
                border border-solid border-licorice bg-transparent h-auto 
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

          {/* Icône dynamique */}
          <img
            key={currentSlide.icon}
            className={`absolute h-[321px] left-1/2 transform -translate-x-1/2 z-10
    ${[2, 3].includes(currentIndex) ? "bottom-0" : "bottom-10"} fade-image`}
            alt="slide icon"
            src={currentSlide.icon}
          />

          {/* Image droite avec fade */}
          <div className="flex items-center p-32 flex-1 relative overflow-hidden">
            <div
              key={currentSlide.image}
              className={`flex-1 h-[550px] rounded-[500px] shadow-[0px_4px_4px_#00000080] 
      bg-cover bg-[50%_50%] relative fade-image
      ${[0, 1, 4].includes(currentIndex) ? "z-10" : "z-0"}`}
              style={{
                backgroundImage: `url(${currentSlide.image})`,
                backgroundPosition:
                  currentIndex === 3 ? "center top" : "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
