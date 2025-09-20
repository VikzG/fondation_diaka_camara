const pillarsData = [
  { title: "ÉDUCATION & AUTONOMISATION", color: "text-pumpkin", iconSrc: "/foundation_section/book_orange.svg", iconAlt: "Icone" },
  { title: "ACCÈS À LA CULTURE", color: "text-colbat", iconSrc: "/foundation_section/globe_blue.svg", iconAlt: "Icone" },
  { title: "PROTECTION & ÉGALITÉ", color: "text-carmin", iconSrc: "/foundation_section/care_red.svg", iconAlt: "Icone" },
];

export const FondationSubsection = (): JSX.Element => {
  return (
    <section
      id="fondation_home"
      className="
        flex flex-col w-full items-center justify-center gap-20 
        pt-[100px] py-20 px-[100px] bg-vanilla
        max-[1200px]:px-6 max-[1200px]:pt-10 max-[1200px]:py-14
      "
    >
      <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-14 w-full">
        
        {/* Header */}
        <header
          className="
            flex items-center gap-4 w-full
            justify-center min-[1200px]:justify-between
          "
        >
          <img className="w-[25px] h-[47px]" alt="arrow_left" src="/orange_arrows/arrow_orange_left.svg" />
          <h2 className="font-[beautique-display-bold] text-5xl text-licorice text-center whitespace-nowrap max-[1200px]:text-3xl">
            LA FONDATION
          </h2>
          <img className="w-[25px] h-[47px]" alt="arrow_right" src="/orange_arrows/arrow_orange_right.svg" />
        </header>

        {/* Texte intro */}
        <div className="flex flex-col items-center justify-center gap-6 px-[60px] w-full max-[1200px]:px-[30px]">
          <p className="text-licorice font-corps text-center text-base leading-relaxed max-[1200px]:text-sm">
            La Fondation Diaka Camara est née d&apos;une conviction :<br />
            <span className="font-bold">
              L&apos;éducation est le levier essentiel d&apos;un changement durable.
            </span>
            <br />
            Nous rassemblons partenaires, mécènes et citoyens engagés pour agir sur trois piliers :
          </p>
        </div>

        {/* Pillars */}
        <div className="flex w-full justify-around items-center gap-10 max-[1200px]:flex-col max-[1200px]:gap-12">
          {pillarsData.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-5 flex-1 max-[1200px]:w-full max-[1200px]:flex-none"
            >
              <img
                className={`w-[110px] h-[110px] max-[1200px]:w-[80px] max-[1200px]:h-[80px] ${index === 2 ? "mt-[-0.5px]" : ""}`}
                alt={pillar.iconAlt}
                src={pillar.iconSrc}
              />
              <div
                className={`
                  text-center ${pillar.color} font-legendes-bold
                  text-lg leading-snug
                  max-[1200px]:text-base
                `}
              >
                {pillar.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloc fond arrondi */}
      <div
        className="
          max-w-[1300px] mx-auto
          bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(/foundation_section/foundation_bg_img.png)]
          bg-blend-luminosity bg-center bg-cover bg-no-repeat sepia-[0.5]
          flex items-center justify-center py-10 px-6 w-full rounded-[500px]
          max-[1200px]:px-4
        "
      >
        <div className="font-[beautique-display] text-vanilla text-4xl text-center max-[1200px]:text-2xl">
          Une vision claire, un impact concret.
        </div>
      </div>
    </section>
  );
};
