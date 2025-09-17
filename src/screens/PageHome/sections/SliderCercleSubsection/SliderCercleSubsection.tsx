import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const SliderCercleSubsection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Configuration des 2 états
  const states = [
    {
      title: "LE CERCLE DES ALLIANCES",
      titleColor: "text-carmin",
      paragraph:
        "Un réseau d'exception qui rassemble fondations, philanthropes, entreprises et décideurs",
      buttonText: "Rejoindre le Cercle",
      buttonColor: "bg-carmin hover:bg-carmin/90",
      indicatorColor: "bg-carmin",
      imageUrl: "/slider_cercle_section/slide_img_1.png",
      link: "/cercle",
    },
    {
      title: "VENTE AUX ENCHERES",
      titleColor: "text-blue-600",
      paragraph:
        "Participez à nos enchères caritatives pour acquérir des pièces uniques et soutenir nos actions",
      buttonText: "En savoir plus",
      buttonColor: "bg-blue-600 hover:bg-blue-500",
      indicatorColor: "bg-blue-600",
      imageUrl: "/slider_cercle_section/slide_img_2.png",
      link: "/gala",
    },
  ];

  const currentState = states[activeIndex];

  // Auto-slide toutes les 5s avec effet fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // on déclenche le fade out
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % states.length);
        setFade(true); // puis fade in après changement
      }, 300); // durée du fade out
    }, 5000);

    return () => clearInterval(interval);
  }, [states.length]);

  return (
    <section className="flex w-full items-start bg-vanilla overflow-hidden">
      {/* IMAGE À GAUCHE */}
      <div
        className={`h-[657px] bg-cover bg-[50%_50%] relative w-1/2 transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${currentState.imageUrl})` }}
      />

      {/* TEXTE + CTA + INDICATEURS */}
      <div className="flex flex-col items-center justify-between pt-[100px] pb-[70px] px-[100px] self-stretch relative w-1/2">
        <h2
          className={`self-stretch font-titres ${
            currentState.titleColor
          } text-[length:var(--titres-font-size)] leading-[var(--titres-line-height)] relative mt-[-1.00px] font-[number:var(--titres-font-weight)] text-center tracking-[var(--titres-letter-spacing)] [font-style:var(--titres-font-style)] transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentState.title}
        </h2>

        <p
          className={`relative self-stretch font-[beautique-display] text-licorice text-3xl text-center transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentState.paragraph}
        </p>

        <div className="flex items-center justify-center gap-2.5 px-0 py-0.5 self-stretch w-full flex-[0_0_auto] rounded-[10px]">
          <Link to={currentState.link} className="w-full block">
            <Button
              className={`flex w-full items-center justify-center gap-2.5 pt-[5px] pb-[7px] px-[25px] relative ${currentState.buttonColor} rounded-[10px] shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Mona_Sans',Helvetica] font-extrabold text-vanilla text-lg text-center tracking-[0] leading-[30px] whitespace-nowrap">
                {currentState.buttonText}
              </span>
            </Button>
          </Link>
        </div>

        {/* INDICATEURS */}
        <div className="flex items-end justify-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
          {states.map((state, index) => (
            <div
              key={index}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setActiveIndex(index);
                  setFade(true);
                }, 300);
              }}
              className={`${
                activeIndex === index ? state.indicatorColor : "bg-[#ffffff33]"
              } cursor-pointer border-[#160a00] relative w-5 h-5 rounded-[10px] border-[1.5px] border-solid transition-colors duration-500`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
