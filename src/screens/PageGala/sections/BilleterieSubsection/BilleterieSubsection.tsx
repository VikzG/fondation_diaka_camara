import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const states = [
  {
    tableText: "Table VIP\n10 personnes.",
    price: "$ 10 000",
    bgClass: "bg-carmin",
    borderClass: "border-carmin",
    cardBorderClass: "border-carmin",
  },
  {
    tableText: "Place\nIndividuelle",
    price: "$ 1000",
    bgClass: "bg-pumpkin",
    borderClass: "border-pumpkin",
    cardBorderClass: "border-pumpkin",
  },
  {
    tableText: "Place Soutien\n(Don sans présence)",
    price: "$ LIBRE",
    bgClass: "bg-colbat",
    borderClass: "border-colbat",
    cardBorderClass: "border-colbat",
  },
];

export const BilleterieSubsection = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const currentState = states[currentIndex];
  
useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handlePrev = () =>
    setCurrentIndex((p) => (p === 0 ? states.length - 1 : p - 1));
  const handleNext = () =>
    setCurrentIndex((p) => (p === states.length - 1 ? 0 : p + 1));

  // Auto-slide toutes les 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p === states.length - 1 ? 0 : p + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
<section
  id="billeterie_gala"
  className="flex flex-col h-[650px] w-full items-center justify-around gap-6 pt-8 px-6 relative bg-[url(/page_gala_section/bg_billeterie.png)] bg-cover bg-no-repeat bg-center overflow-hidden"
>
  <h2 className="font-[beautique-display-bold] text-3xl text-licorice text-center mb-8 relative z-20">
    BILLETERIE
  </h2>

  {/* Billet géant en fond (IMMERSIF) */}
<div
  className="bg-no-repeat w-[500px] h-[500px] transform -rotate-90 bg-[url(/page_gala_section/billet.svg)] bg-[100%_50%] absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
/>

  {/* Card centrée sur le billet */}
  <div className="relative w-[85%] max-w-[340px] h-[400px]">
    <Card
      className={`relative z-20 rounded-[15px] h-[350px] border-2 border-solid ${currentState.cardBorderClass}`}
    >
      <CardContent className="flex flex-col h-full items-center justify-center gap-6 p-6">
        {/* Texte & prix */}
        <div className="flex flex-col items-center gap-4">
          <div className="font-[beautique-display] text-licorice text-xl text-center whitespace-pre-line">
            {currentState.tableText}
          </div>
          <div className="font-[beautique-display-bold] text-licorice text-3xl text-center">
            {currentState.price}
          </div>
        </div>
      </CardContent>

      {/* Flèches navigation positionnées verticalement */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-[40px] h-[40px] p-0 hover:bg-transparent"
      >
        <div
          className={`border-2 ${currentState.borderClass} w-[36px] h-[36px] flex items-center justify-center rounded-full ${currentState.bgClass}`}
        >
          <img className="w-5 h-5" alt="Prev" src="/gala_arrow_button.svg" />
        </div>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-[40px] h-[40px] p-0 hover:bg-transparent"
      >
        <div
          className={`border-2 ${currentState.borderClass} w-[36px] h-[36px] flex items-center justify-center rounded-full ${currentState.bgClass}`}
        >
          <img
            className="w-5 h-5 -rotate-180"
            alt="Next"
            src="/gala_arrow_button.svg"
          />
        </div>
      </Button>
    </Card>

    {/* Bouton Acheter centré avec bordure colorée qui passe au milieu */}
    <a
      href="https://billetfacile.com/event/2025-11-15-1900-gala-2025"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[250px] z-20"
    >
      <Button
        className={`${currentState.bgClass} text-antiflash w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out`}
      >
        Acheter mes places
      </Button>
    </a>
  </div>
</section>


    );
  }

    // === VERSION DESKTOP ===
  return (
    <section
      id="billeterie_gala"
      className="flex flex-col w-full items-center gap-11 py-28 px-20 relative bg-[url(/page_gala_section/bg_billeterie.png)] bg-cover bg-no-repeat"
    >
      <h2 className="relative self-stretch font-[beautique-display-bold] text-5xl text-licorice text-center">
        BILLETERIE
      </h2>

      <div className="relative w-[850px] h-[406px]">
        <div className="relative w-[865px] h-[421px] -top-1 -left-2.5 bg-[url(/page_gala_section/billet.svg)] bg-[100%_100%]">
          {/* Card avec border en Tailwind */}
          <Card
            className={`w-[730px] h-[309px] absolute top-[53px] left-[70px] rounded-[15px] border-2 border-solid ${currentState.cardBorderClass}`}
          >
            <CardContent className="flex items-center justify-center gap-[38px] p-[30px] h-full">
              {/* Flèche gauche */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePrev}
                className="relative w-[55px] h-[55px] p-0 hover:bg-transparent"
              >
                <div
                  className={`border-2 ${currentState.borderClass} group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${currentState.bgClass}`}
                >
                  <img
                    className="w-7 h-7"
                    alt="Icon"
                    src="/gala_arrow_button.svg"
                  />
                </div>
              </Button>

              {/* Texte & prix */}
              <div className="flex flex-col w-[471.92px] items-start gap-10 pt-0 pb-5 px-0 relative">
                <div className="relative self-stretch font-[beautique-display] text-licorice text-4xl text-center whitespace-pre-line">
                  {currentState.tableText}
                </div>
                <div className="relative self-stretch font-[beautique-display-bold] text-licorice text-5xl text-center">
                  {currentState.price}
                </div>
              </div>

              {/* Flèche droite */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleNext}
                className="relative w-[55px] h-[55px] rounded-[27.5px]"
              >
                <div
                  className={`border-2 ${currentState.borderClass} group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${currentState.bgClass}`}
                >
                  <img
                    className="w-7 h-7 -rotate-180"
                    alt="Icon"
                    src="/gala_arrow_button.svg"
                  />
                </div>
              </Button>
            </CardContent>
          </Card>
          
          {/* Bouton acheter avec bg Tailwind */}
          <div className="inline-flex items-center justify-center gap-2.5 px-0 py-0.5 absolute top-[336px] left-[322px] rounded-[10px]">
            <a
              href="https://billetfacile.com/event/2025-11-15-1900-gala-2025"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className={`${currentState.bgClass} text-antiflash w-full [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out`}
              >
                Acheter mes places
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
