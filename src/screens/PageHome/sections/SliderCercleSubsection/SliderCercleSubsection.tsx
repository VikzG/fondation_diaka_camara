import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const SliderCercleSubsection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Gestion de la largeur de l’écran
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Auto-slide toutes les 5s avec fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % states.length);
        setFade(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [states.length]);

  // =========================
  // DESKTOP VERSION (≥1200px)
  // =========================
  if (isDesktop) {
    return (
      <section className="flex w-full items-start bg-vanilla overflow-hidden">
        {/* IMAGE À GAUCHE */}
        <div
          className={`h-[657px] bg-cover bg-[50%_50%] relative w-1/2 transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${currentState.imageUrl})` }}
        />

        {/* TEXTE */}
        <div className="flex flex-col items-center justify-between py-20 px-24 self-stretch relative w-1/2">
          <h2
            className={`${currentState.titleColor} font-[beautique-display-bold] text-5xl relative text-center transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentState.title}
          </h2>

          <p
            className={`font-[beautique-display] text-licorice text-3xl text-center transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentState.paragraph}
          </p>

          <Link to={currentState.link} className="w-full block">
            <Button
              className={`flex w-full items-center justify-center gap-2.5 pt-[5px] pb-[7px] px-[25px] ${currentState.buttonColor} rounded-[10px] shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300`}
            >
              <span className="font-extrabold text-vanilla text-lg">
                {currentState.buttonText}
              </span>
            </Button>
          </Link>

          {/* INDICATEURS */}
          <div className="flex items-end justify-center gap-[30px] w-full mt-6">
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
                } cursor-pointer border-[#160a00] w-5 h-5 rounded-[10px] border-[1.5px] transition-colors duration-500`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // =========================
  // MOBILE VERSION (<1200px)
  // =========================
  return (
    <section className="flex flex-col w-full items-stretch bg-vanilla overflow-hidden">
      {/* IMAGE EN HAUT */}
      <div
        className={`h-[300px] bg-cover bg-center relative w-full transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${currentState.imageUrl})` }}
      />

      {/* TEXTE EN BAS */}
      <div className="flex flex-col items-center justify-between gap-6 py-10 px-6 w-full">
        <h2
          className={`${currentState.titleColor} font-[beautique-display-bold] text-3xl text-center transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentState.title}
        </h2>

        <p
          className={`font-[beautique-display] text-licorice text-lg text-center transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentState.paragraph}
        </p>

        <Link to={currentState.link} className="w-full block">
          <Button
            className={`flex w-full items-center justify-center gap-2.5 py-3 px-6 ${currentState.buttonColor} rounded-[10px] shadow-[0px_1px_2px_#00000040] text-base font-extrabold text-vanilla transition-all duration-300`}
          >
            {currentState.buttonText}
          </Button>
        </Link>

        {/* INDICATEURS */}
        <div className="flex items-center justify-center gap-5 w-full mt-4">
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
              } cursor-pointer w-4 h-4 rounded-full border border-[#160a00] transition-colors duration-500`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
