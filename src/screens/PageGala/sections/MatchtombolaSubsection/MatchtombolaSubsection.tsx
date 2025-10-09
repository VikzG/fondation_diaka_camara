import { Button } from "../../../../components/ui/button";
import { useEffect, useState } from "react";

export const MatchtombolaSubsection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1300);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    {
      title: "Match de Gala",
      image: "/page_gala_section/match_gala.jpg",
      description:
        "Rejoignez-nous pour un moment sportif et solidaire ! Le match du Gala rassemble personnalités, supporters et amis de la Fondation dans une ambiance festive.",
      link: "https://billetfacile.com/event/2025-11-14-1600-match-de-la-solidarite",
      color: "bg-carmin hover:bg-carmin/90",
    },
    {
      title: "Tombola du Gala",
      image: "/page_gala_section/tombola_gala.jpg",
      description:
        "Tentez votre chance et soutenez la Fondation ! De magnifiques lots sont à gagner lors de la tombola du Gala, au profit de nos actions éducatives et sociales.",
      link: "https://billetfacile.com/event/2025-11-15-0000-gala-tombola",
      color: "bg-pumpkin hover:bg-pumpkin/90",
    },
  ];

  // === MOBILE RENDER ===
  if (isMobile) {
    return (
      <section
        id="match_tombola"
        className="flex flex-col w-full items-center justify-center bg-antiflash bg-cover bg-center bg-no-repeat gap-14 px-6 py-16 relative"
      >
        {events.map((event, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-8 w-full max-w-[500px]"
          >
            {/* === CARD === */}
            <div className="group relative overflow-hidden rounded-[25px] w-full shadow-lg hover:shadow-xl transition-shadow duration-500 bg-[#f3f3f3]">
              <div className="flex items-center justify-center w-full h-full bg-[#f3f3f3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* === BUTTON === */}
            <Button
              asChild
              className={`${event.color} text-antiflash w-full max-w-[280px] [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out`}
            >
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                Réserver
              </a>
            </Button>
          </div>
        ))}
      </section>
    );
  }

  // === DESKTOP RENDER ===
  return (
    <section
      id="match_tombola"
      className="flex w-full items-center justify-center bg-antiflash bg-cover bg-center bg-no-repeat gap-20 px-10 py-20 relative"
    >
      <div className="flex items-start justify-center gap-20 max-w-[1600px] w-full">
        {events.map((event, i) => (
          <div key={i} className="flex flex-col items-center gap-10">
            {/* === CARD === */}
            <div className="group relative overflow-hidden rounded-[30px] w-[600px]  shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-[#f3f3f3]">
              <div className="flex items-center justify-center w-full h-full bg-[#f3f3f3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* === BUTTON === */}
            <Button
              asChild
              className={`${event.color} text-antiflash w-full max-w-[320px] [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out`}
            >
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                Réserver maintenant
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
