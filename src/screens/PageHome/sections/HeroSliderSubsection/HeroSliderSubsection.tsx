import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DonationForm from "../../../../components/DonationForm";

interface SlideData {
  id: number;
  backgroundImage: string;
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  buttonTextColor?: string;
  buttonIconBg?: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    backgroundImage: "/slider_section_1/img_slide_1.png",
    logo: "/logo.svg",
    title: "Unir les énergies, célébrer les engagements, financer l'impact.",
    description:
      "La Fondation Diaka Camara œuvre pour offrir à chaque enfant, et particulièrement aux filles, la possibilité d'apprendre, de s'épanouir et de contribuer à une société plus juste.",
    buttonText: "Découvrir la Fondation",
    buttonIcon: "/gala_arrow_button.svg",
    buttonTextColor: "text-pumpkin",
    buttonIconBg: "bg-pumpkin",
  },
  {
    id: 2,
    backgroundImage: "/slider_section_1/img_slide_2.png",
    logo: "/logo.svg",
    title: "Ensemble, transformons les promesses en actions concrètes.",
    description:
      "Chaque contribution est un pas vers un avenir plus équitable. Avec votre aide, chaque don finance directement nos projets éducatifs, culturels et de protection.",
    buttonText: "Faire un don",
    buttonIcon: "/gala_arrow_button.svg",
    buttonTextColor: "text-colbat",
    buttonIconBg: "bg-colbat",
  },
  {
    id: 3,
    backgroundImage: "/slider_section_1/img_slide_3.png",
    logo: "/logo.svg",
    title:
      "Gala 2025 : Trois jours pour inspirer, mobiliser et financer des projets qui changent des vies.",
    description: "",
    buttonText: "Participer au Gala 2025",
    buttonIcon: "/gala_arrow_button.svg",
    buttonTextColor: "text-red-500",
    buttonIconBg: "bg-red-500",
  },
];

const buttonColors: Record<number, string> = {
  1: "hover:bg-pumpkin",
  2: "hover:bg-colbat",
  3: "hover:bg-red-500",
};

export const HeroSliderSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slidesData[currentSlide];

  const handleButtonClick = () => {
    if (currentSlideData.id === 2) {
      navigate("/don");
    } else if (currentSlideData.id === 3) {
      navigate("/gala");
    }
  };

  return (
    <motion.section
      key={currentSlide}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[1100px] bg-cover bg-center bg-no-repeat flex items-center justify-between mt-10 max-[1200px]:flex-col max-[1200px]:justify-center max-[1200px]:items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slidesData[currentSlide].backgroundImage})`,
      }}
    >
      {/* Left side */}
      <div className="flex-1 self-stretch justify-center max-[1200px]:hidden">
        {currentSlideData.id === 2 && <DonationForm />}
      </div>

      {/* Right side */}
<div
  className="
    flex flex-col 
    w-1/2 max-w-3xl 
    py-20 pr-40 flex-1 self-stretch 
    items-center justify-between
    
    max-[1200px]:w-full 
    max-[1200px]:max-w-full 
    max-[1200px]:p-6 
    max-[1200px]:flex-none
  "
>
        <div className="w-full flex justify-center mb-10 mt-10">
          <img alt="Icon" src="/logo_gala.svg" className="h-20 object-contain" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-10 flex-1 w-full"
          >
            <h1 className="self-stretch font-[beautique-display] text-vanilla text-4xl text-center tracking-[0.64px] leading-[38px]">
              {currentSlideData.title}
            </h1>

            {currentSlideData.description && (
              <p className="text-vanilla leading-7 self-stretch font-mona font-normal text-lg text-center">
                <span className="font-bold text-[#faf2d7]">
                  {currentSlideData.description.split(" ").slice(0, 4).join(" ")}
                </span>
                <span className="text-[#faf2d7]">
                  {" " + currentSlideData.description.split(" ").slice(4).join(" ")}
                </span>
              </p>
            )}

            {currentSlideData.id === 1 ? (
              <HashLink smooth to="#fondation_home" className="w-full">
                <Button
                  className={`group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla ${
                    buttonColors[currentSlideData.id]
                  }`}
                >
                  <span
                    className={`flex-1 text-center font-mona font-bold text-xl tracking-[0] leading-[35px] transition-colors duration-500 ${currentSlideData.buttonTextColor} group-hover:text-vanilla`}
                  >
                    {currentSlideData.buttonText}
                  </span>
                  <div
                    className={`border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${currentSlideData.buttonIconBg}`}
                  >
                    <img className="w-7 h-7" alt="Icon" src={currentSlideData.buttonIcon} />
                  </div>
                </Button>
              </HashLink>
            ) : (
              <Button
                onClick={handleButtonClick}
                className={`group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla ${
                  buttonColors[currentSlideData.id]
                }`}
              >
                <span
                  className={`flex-1 text-center font-mona font-bold text-xl tracking-[0] leading-[35px] transition-colors duration-500 ${currentSlideData.buttonTextColor} group-hover:text-vanilla`}
                >
                  {currentSlideData.buttonText}
                </span>
                <div
                  className={`border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${currentSlideData.buttonIconBg}`}
                >
                  <img className="w-7 h-7" alt="Icon" src={currentSlideData.buttonIcon} />
                </div>
              </Button>
            )}
          </motion.div>
        </AnimatePresence>

        <nav
          className="flex items-end justify-center gap-[30px] self-stretch w-full flex-[0_0_auto] mt-10"
          aria-label="Slider pagination"
        >
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-5 h-5 rounded-[10px] border-[1.5px] border-solid border-[#faf2d7] transition-all duration-300 hover:scale-110 ${
                index === currentSlide ? "bg-pumpkin" : "bg-[#ffffff33]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            />
          ))}
        </nav>
      </div>
    </motion.section>
  );
};
