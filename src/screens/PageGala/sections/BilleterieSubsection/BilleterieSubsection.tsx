import { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Définition des états (les valeurs sont des classes Tailwind)
const states = [
  {
    tableText: "Table VIP\n10 personnes.",
    price: "$ 10 000",
    bgClass: "bg-carmin", // background des bulles / bouton Acheter
    borderClass: "border-carmin", // couleur de border pour les éléments qui en ont besoin
    cardBorderClass: "border-carmin", // border du Card
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
  const currentState = states[currentIndex];

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
              href="https://myplace-events.com/fr"
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
