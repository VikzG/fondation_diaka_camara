import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const eventData = [
    {
      date: "13",
      month: "NOVEMBRE",
      title: "Présentation",
      details: (
        <div
          className={`flex flex-col items-center gap-5 w-full font-sans text-[17.5px] text-center leading-7 ${
            isMobile ? "text-licorice" : "text-vanilla"
          }`}
        >
          <b>Conférence de Presse à l'Hôtel Le Palm-Camayenne</b>
        </div>
      ),
      activeBg: "url('/page_gala_section/slider_1_img.png')",
    },
    {
      date: "14",
      month: "NOVEMBRE",
      title: "Sport & Solidarité",
      details: (
        <div className="flex flex-col items-center gap-5 w-full">
          <div
            className={`font-legendes-bold font-bold text-center ${
              isMobile ? "text-licorice" : "text-vanilla"
            }`}
          >
            LE MATIN
          </div>
          <div
            className={`font-sans text-[17.5px] text-center leading-7 ${
              isMobile ? "text-licorice" : "text-vanilla"
            }`}
          >
            <b>• Découverte des projets éducatifs en cours</b> par la visite
            d’orphelinats, bibliothèques réhabilitées, les filles scolarisées,
            etc.
            <br />
            <b>• Rencontre privilégiée avec les bénéficiaires et partenaires</b>
          </div>
          <div
            className={`font-legendes-bold uppercase font-bold text-center ${
              isMobile ? "text-licorice" : "text-vanilla"
            }`}
          >
            L’après-midi
          </div>
          <div
            className={`font-sans text-[17.5px] text-center leading-7 ${
              isMobile ? "text-licorice" : "text-vanilla"
            }`}
          >
            <b>• Match de football féminin amical</b>
            <br />1 but = 1 don
          </div>
        </div>
      ),
      activeBg: "url('/page_gala_section/slider_2_img.png')",
    },
    {
      date: "15",
      month: "NOVEMBRE",
      title: "Soirée Gala",
      details: (
        <>
          <div className="flex flex-col items-center gap-5 w-full">
            <div
              className={`font-legendes-bold font-bold text-center ${
                isMobile ? "text-licorice" : "text-vanilla"
              }`}
            >
              MATIN &amp; DÉJEUNER
            </div>
            <div
              className={`font-sans text-[17.5px] text-center leading-7 ${
                isMobile ? "text-licorice" : "text-vanilla"
              }`}
            >
              <b>• Table ronde du Cercle des Alliances</b>, consacrée à
              l&apos;autonomisation économique des femmes
              <br />
              <b>• Cocktail déjeunatoire de networking</b> entre partenaires et
              personnalités invitées
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <div
              className={`font-legendes-bold font-bold text-center ${
                isMobile ? "text-licorice" : "text-vanilla"
              }`}
            >
              SOIRÉE DE GALA
            </div>
            <div
              className={`font-sans text-[17.5px] text-center leading-7 ${
                isMobile ? "text-licorice" : "text-vanilla"
              }`}
            >
              <b>• Accueil et dîner</b> de gala
              <br />
              <b>• Vente aux enchères caritatives</b> : objets rares,
              expériences exclusives & œuvres d&apos;art
              <br />
              <b>• Remise de distinctions honorifiques</b> aux personnalités
              engagées
              <br />
              <b>• Grand concert de clôture</b> par des artistes de renommée
              internationale
            </div>
          </div>
        </>
      ),
      activeBg: "url('/page_gala_section/slider_3_img.png')",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-slide toutes les 5s si non en pause
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % eventData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused, eventData.length]);

// === VERSION MOBILE ===
if (isMobile) {
  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-black">
      {/* Slides */}
      {eventData.map((event, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Haut avec date/mois/titre + bg */}
          <div
            className="h-2/5 flex flex-col items-center justify-center text-vanilla bg-cover bg-center"
            style={{ backgroundImage: `${event.activeBg}` 
          }}
          >
            <div className="text-[100px] font-[beautique-display-bold] leading-none">
              {event.date}
            </div>
            <div className="text-lg tracking-widest">{event.month}</div>
            <h3 className="font-[beautique-display] italic text-2xl mt-2">
              {event.title}
            </h3>
          </div>

          {/* Bas avec détails */}
          <div className="h-3/5 flex flex-col gap-8 items-center justify-center bg-vanilla p-6 overflow-y-auto">
            {event.details}
          </div>
        </div>
      ))}

      {/* Contrôles */}
      <div className="z-10 absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {eventData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setPaused(true); // stop auto-slide si l’utilisateur clique
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-licorice scale-125" : "bg-licorice opacity-30"
            }`}
          />
        ))}
      </div>
    </section>
    );
  }

  // === VERSION DESKTOP (inchangée) ===
  return (
    <section className="flex w-full items-center gap-5 px-0 py-5 bg-white overflow-hidden">
      {eventData.map((event, index) => (
        <Card
          key={index}
          className="group relative flex-1 h-[800px] border-0 overflow-hidden bg-vanilla transition-all duration-500"
        >
          {/* Background actif au hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-luminosity transition-opacity duration-500"
            style={{
              backgroundImage: `${event.activeBg}, linear-gradient(0deg, rgba(250,242,215,0.7) 0%, rgba(250,242,215,0.7) 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <CardContent className="relative flex flex-col justify-between items-center px-5 py-10 h-full z-10">
            {/* Desktop layout original */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="text-licorice font-[beautique-display-bold] group-hover:text-vanilla text-[150px] leading-[150px] text-center transition-colors duration-500">
                {event.date}
              </div>
              <div className="text-licorice group-hover:text-vanilla font-normal text-[22px] text-center tracking-[1.1px] transition-colors duration-500">
                {event.month}
              </div>
            </div>
            {event.title && (
              <div className="text-licorice font-[beautique-display] font-bold italic text-[32px] text-center transition-opacity duration-500 group-hover:opacity-0">
                {event.title}
              </div>
            )}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-[90%]
                         flex flex-col items-center gap-6 p-6
                         bg-[#00000066] rounded-[20px] border border-[#faf2d7]
                         backdrop-blur-md opacity-0 group-hover:opacity-100
                         transition-opacity duration-500 bottom-10"
            >
              {event.details}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
