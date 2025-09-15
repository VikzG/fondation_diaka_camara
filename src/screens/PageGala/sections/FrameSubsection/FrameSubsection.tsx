import { Card, CardContent } from "../../../../components/ui/card";

export const FrameSubsection = (): JSX.Element => {
  const eventData = [
    {
      date: "13",
      month: "NOVEMBRE",
      title: "Présentation",
      layout: "dateTop", // date en haut, title en bas
      details: (
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="font-sans text-vanilla text-[17.5px] text-center leading-7">
            <b>Conférence de Presse à l'Hôtel Le Palm-Camayenne</b>
          </div>
        </div>
      ),
      activeBg: "url('/page_gala_section/slider_1_img.png')",
    },
    {
      date: "14",
      month: "NOVEMBRE",
      title: "Sport & Solidarité",
      layout: "dateBottom", // **spécial** : date en bas au repos, montera en haut au hover
      details: (
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="font-legendes-bold text-vanilla font-bold text-center">
            LE MATIN
          </div>
          <div className="font-sans text-vanilla text-[17.5px] text-center leading-7">
            <b>• Découverte des projets éducatifs en cours</b> par la visite
            d’orphelinats, bibliothèques réhabilitées, les filles scolarisées,
            etc.
            <br />
            <b>• Rencontre privilégiée avec les bénéficiaires et partenaires</b>
          </div>
          <div className="font-legendes-bold uppercase text-vanilla font-bold text-center">
            L’après-midi
          </div>
          <div className="font-sans text-vanilla text-[17.5px] text-center leading-7">
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
      layout: "dateTop",
      details: (
        <>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="font-legendes-bold font-bold text-vanilla text-center">
              MATIN &amp; DÉJEUNER
            </div>
            <div className="font-sans text-vanilla text-[17.5px] text-center leading-7">
              <b>• Table ronde du Cercle des Alliances</b>, consacrée à
              l&apos;autonomisation économique des femmes
              <br />
              <b>• Cocktail déjeunatoire de networking</b> entre partenaires et
              personnalités invitées
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 w-full">
            <div className="font-legendes-bold font-bold text-vanilla text-center">
              SOIRÉE DE GALA
            </div>
            <div className="font-sans text-vanilla text-[17.5px] text-center leading-7">
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
            {/* --- LAYOUT: dateTop (cards 1 & 3) --- */}
            {event.layout === "dateTop" && (
              <>
                {/* date en haut */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="text-licorice font-[beautique-display-bold] group-hover:text-vanilla text-[150px] leading-[150px] text-center transition-colors duration-500">
                    {event.date}
                  </div>
                  <div className="text-licorice group-hover:text-vanilla font-normal text-[22px] text-center tracking-[1.1px] transition-colors duration-500">
                    {event.month}
                  </div>
                </div>

                {/* title en bas (disparaît au hover) */}
                {event.title && (
                  <div className="text-licorice font-[beautique-display] font-bold italic text-[32px] text-center transition-opacity duration-500 group-hover:opacity-0">
                    {event.title}
                  </div>
                )}
              </>
            )}

            {/* --- LAYOUT: dateBottom (card 2) --- */}
            {event.layout === "dateBottom" && (
              <>
                {/* Title visible en haut (disparaît au hover) */}
                {event.title && (
                  <div className="text-licorice font-[beautique-display] font-bold italic text-[32px] text-center transition-opacity duration-300 group-hover:opacity-0">
                    {event.title}
                  </div>
                )}

                {/* Placeholder flexible pour garder l'espace central propre */}
                <div className="flex-1" />

                {/* Date/Mois ABSOLUS : positionnée visuellement en bas au repos,
                    elle remontera en haut au hover via translateY */}
                <div
                  aria-hidden
                  className={`
                    absolute left-1/2 bottom-80 -translate-x-1/2
                    transform transition-transform duration-600 ease-out
                    /* position visuelle : ajuster valeurs si besoin */
                    translate-y-[250px] group-hover:-translate-y-[250px]
                  `}
                >
                  <div className="flex flex-col items-center gap-2 w-full">
                    <div className="text-licorice group-hover:text-vanilla font-[beautique-display-bold] text-[150px] leading-[150px] text-center transition-colors duration-500">
                      {event.date}
                    </div>
                    <div className="text-licorice group-hover:text-vanilla font-normal text-[22px] text-center tracking-[1.1px] transition-colors duration-500">
                      {event.month}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* --- Cadre flou : description (toujours en bas, apparait au hover) --- */}
            <div
              className={`
    absolute left-1/2 -translate-x-1/2 w-[90%]
    flex flex-col items-center gap-6 p-6
    bg-[#00000066] rounded-[20px] border border-[#faf2d7]
    backdrop-blur-md opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    ${
      event.layout === "dateTop" && index === 0
        ? "top-1/2 -translate-y-1/2"
        : "bottom-10"
    }
  `}
            >
              {event.details}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
