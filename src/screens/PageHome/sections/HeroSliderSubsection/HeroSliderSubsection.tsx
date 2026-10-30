import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DonationForm from "../../../../components/DonationForm";
import { CrossfadeStack } from "../../../../components/CrossfadeStack";
import { useTranslation, type Lang } from "../../../../lib/i18n";

interface SlideText {
  title: string;
  description: string;
  buttonText: string;
}

interface SlideData extends SlideText {
  id: number;
  backgroundImage: string;
  logo: string;
  buttonIcon: string;
  buttonTextColor?: string;
  buttonIconBg?: string;
}

const slideTexts: Record<Lang, SlideText[]> = {
  fr: [
    {
      title: "Unir les énergies, célébrer les engagements, financer l'impact.",
      description:
        "La Fondation Diaka Camara œuvre pour offrir à chaque enfant, et particulièrement aux filles, la possibilité d'apprendre, de s'épanouir et de contribuer à une société plus juste.",
      buttonText: "Découvrir la Fondation",
    },
    {
      title: "Ensemble, transformons les promesses en actions concrètes.",
      description:
        "Chaque contribution est un pas vers un avenir plus équitable. Avec votre aide, chaque don finance directement nos projets éducatifs, culturels et de protection.",
      buttonText: "Faire un don",
    },
    {
      title:
        "Gala 2025 : Trois jours pour inspirer, mobiliser et financer des projets qui changent des vies.",
      description: "",
      buttonText: "Participer au Gala 2025",
    },
  ],
  en: [
    {
      title: "Uniting energies, celebrating commitments, funding impact.",
      description:
        "The Diaka Camara Foundation works to give every child, and girls in particular, the chance to learn, to thrive and to contribute to a fairer society.",
      buttonText: "Discover the Foundation",
    },
    {
      title: "Together, let's turn promises into concrete action.",
      description:
        "Every contribution is a step towards a fairer future. With your help, every donation directly funds our education, culture and protection projects.",
      buttonText: "Make a donation",
    },
    {
      title:
        "Gala 2025: Three days to inspire, mobilise and fund projects that change lives.",
      description: "",
      buttonText: "Join the Gala 2025",
    },
  ],
};

const slidesData: Omit<SlideData, keyof SlideText>[] = [
  {
    id: 1,
    backgroundImage: "/slider_section_1/img_slide_1.webp",
    logo: "/logo.svg",
    buttonIcon: "/gala_arrow_button.svg",
    buttonTextColor: "text-pumpkin",
    buttonIconBg: "bg-pumpkin",
  },
  {
    id: 2,
    backgroundImage: "/slider_section_1/img_slide_2.webp",
    logo: "/logo.svg",
    buttonIcon: "/gala_arrow_button.svg",
    buttonTextColor: "text-colbat",
    buttonIconBg: "bg-colbat",
  },
  {
    id: 3,
    backgroundImage: "/slider_section_1/img_slide_3.webp",
    logo: "/logo.svg",
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

// Fonds empilés : on fait varier l'opacité au lieu de remplacer l'image, pour éviter le clignotement
const SlideBackgrounds = ({
  current,
  position,
}: {
  current: number;
  position: string;
}): JSX.Element => (
  <div className="absolute inset-0 -z-10" aria-hidden="true">
    {slidesData.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 bg-cover bg-no-repeat ${position} transition-opacity duration-1000 ease-in-out`}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.backgroundImage})`,
          opacity: index === current ? 1 : 0,
        }}
      />
    ))}
  </div>
);

const SlideDescription = ({
  slide,
  className = "",
}: {
  slide: SlideData;
  className?: string;
}): JSX.Element | null =>
  slide.description ? (
    <p
      className={`text-vanilla leading-7 font-mona font-normal text-lg text-center ${className}`}
    >
      <span className="font-bold text-[#faf2d7]">
        {slide.description.split(" ").slice(0, 4).join(" ")}
      </span>
      <span className="text-[#faf2d7]">
        {" " + slide.description.split(" ").slice(4).join(" ")}
      </span>
    </p>
  ) : null;

const SlideButton = ({
  slide,
  textSize,
  onClick,
}: {
  slide: SlideData;
  textSize: string;
  onClick: (slide: SlideData) => void;
}): JSX.Element => {
  const button = (
    <Button
      onClick={slide.id === 1 ? undefined : () => onClick(slide)}
      className={`group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla ${
        buttonColors[slide.id]
      }`}
    >
      <span
        className={`flex-1 text-center font-mona font-bold ${textSize} tracking-[0] leading-[35px] transition-colors duration-500 ${slide.buttonTextColor} group-hover:text-vanilla`}
      >
        {slide.buttonText}
      </span>
      <div
        className={`border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${slide.buttonIconBg}`}
      >
        <img className="w-7 h-7" alt="Icon" src={slide.buttonIcon} />
      </div>
    </Button>
  );

  return slide.id === 1 ? (
    <HashLink smooth to="#fondation_home" className="w-full">
      {button}
    </HashLink>
  ) : (
    button
  );
};

export const HeroSliderSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Formulaire de don : blocage dès que l'utilisateur s'en sert (clic, saisie, focus),
  // pour lui laisser le temps de le remplir
  const [isFormEngaged, setIsFormEngaged] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const navigate = useNavigate();
  const texts = useTranslation(slideTexts);
  const slides: SlideData[] = slidesData.map((slide, index) => ({ ...slide, ...texts[index] }));

  useEffect(() => {
    if (!isAutoPlaying || isFormEngaged) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isFormEngaged]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index: number) => {
    // Changer de slide soi-même libère le blocage posé par le formulaire de don
    setIsFormEngaged(false);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleButtonClick = (slide: SlideData) => {
    if (slide.id === 2) {
      navigate("/don");
    } else if (slide.id === 3) {
      navigate("/gala2025");
    }
  };

  const pagination = (className: string) => (
    <nav className={className} aria-label="Slider pagination">
      {slidesData.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-5 h-5 rounded-[10px] border-[1.5px] border-[#faf2d7] transition-all duration-300 hover:scale-110 ${
            index === currentSlide ? "bg-pumpkin" : "bg-[#ffffff33]"
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? "true" : "false"}
        />
      ))}
    </nav>
  );

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
      <motion.section
        className="w-full h-[800px] mt-14 flex flex-col items-center justify-start relative isolate overflow-hidden"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1} // réduit l’amplitude du drag (0 = aucun, 1 = libre)
        onDragEnd={(event: any, info: { offset: { x: number } }) => {
          if (info.offset.x < -50) {
            // swipe gauche → prochain
            goToSlide((currentSlide + 1) % slidesData.length);
          } else if (info.offset.x > 50) {
            // swipe droite → précédent
            goToSlide(
              (currentSlide - 1 + slidesData.length) % slidesData.length
            );
          }
        }}
      >
        <SlideBackgrounds current={currentSlide} position="bg-[center_right_70%]" />

        {/* Titre en haut */}
        <CrossfadeStack
          items={slides}
          current={currentSlide}
          className="absolute top-48 left-1/2 -translate-x-1/2 w-11/12"
          render={(slide) => (
            <h1 className="font-[beautique-display] text-vanilla text-3xl text-center tracking-[0.64px] leading-[36px]">
              {slide.title}
            </h1>
          )}
        />

        {/* Bloc description + bouton + points en bas */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-8 w-11/12 px-4">
          <CrossfadeStack
            items={slides}
            current={currentSlide}
            className="w-full items-end"
            render={(slide) => (
              <div className="flex flex-col items-center justify-end gap-8 h-full">
                <SlideDescription slide={slide} />
                <SlideButton
                  slide={slide}
                  textSize="text-lg"
                  onClick={handleButtonClick}
                />
              </div>
            )}
          />

          {/* Points radios */}
          {pagination("flex items-center justify-center gap-[30px] w-full")}
        </div>
      </motion.section>
    );
  }

  // === VERSION DESKTOP ===
  return (
    <motion.section className="w-full h-[1100px] py-10 flex items-center justify-between mt-10 relative isolate overflow-hidden">
      <SlideBackgrounds current={currentSlide} position="bg-center" />

      {/* Colonne gauche */}
      <div className="flex-1 flex justify-center">
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            slidesData[currentSlide].id === 2
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={slidesData[currentSlide].id !== 2}
          {...(slidesData[currentSlide].id === 2 ? {} : { inert: "" })}
          onPointerDown={() => setIsFormEngaged(true)}
          onFocus={() => setIsFormEngaged(true)}
          onInput={() => setIsFormEngaged(true)}
        >
          <DonationForm />
        </div>
      </div>

      {/* Colonne droite */}
      <div className="flex flex-col w-1/2 max-w-3xl py-20 pr-40 flex-1 self-stretch items-center justify-between">
        {/* Logo Gala visible seulement desktop */}
        <div className="w-full flex justify-center mb-10 mt-10">
          <img
            alt="Icon"
            src="/logo_gala.svg"
            className="h-20 object-contain"
          />
        </div>

        <CrossfadeStack
          items={slides}
          current={currentSlide}
          className="flex-1 w-full"
          render={(slide) => (
            <div className="flex flex-col items-center justify-center gap-10 h-full w-full">
              {/* Titre desktop */}
              <h1 className="self-stretch font-[beautique-display] text-vanilla text-4xl text-center tracking-[0.64px] leading-[38px]">
                {slide.title}
              </h1>

              <SlideDescription slide={slide} className="self-stretch" />

              <SlideButton
                slide={slide}
                textSize="text-xl"
                onClick={handleButtonClick}
              />
            </div>
          )}
        />

        {/* Points radios */}
        {pagination(
          "flex items-end justify-center gap-[30px] self-stretch w-full mt-10"
        )}
      </div>
    </motion.section>
  );
};
