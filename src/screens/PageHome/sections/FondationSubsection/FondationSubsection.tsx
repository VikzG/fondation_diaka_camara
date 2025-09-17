

const pillarsData = [
  {
    title: "ÉDUCATION & AUTONOMISATION",
    color: "text-pumpkin",
    iconSrc: "/foundation_section/book_orange.svg",
    iconAlt: "Icone",
  },
  {
    title: "ACCÈS À LA CULTURE",
    color: "text-colbat",
    iconSrc: "/foundation_section/globe_blue.svg",
    iconAlt: "Icone",
  },
  {
    title: "PROTECTION & ÉGALITÉ",
    color: "text-carmin",
    iconSrc: "/foundation_section/care_red.svg",
    iconAlt: "Icone",
  },
];

export const FondationSubsection = (): JSX.Element => {
  return (
    <section id="fondation_home" className="flex flex-col w-full items-center justify-center gap-20 pt-[100px] py-20 px-[100px] bg-vanilla">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-14 relative self-stretch w-full flex-[0_0_auto]">
        <header className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[25px] h-[47px]"
            alt="arrow_left"
            src="/orange_arrows/arrow_orange_left.svg"
          />

          <div className="flex-col items-center gap-[15px] flex-1 grow flex relative">
            <h2 className="w-fit font-[beautique-display-bold] text-5xl whitespace-nowrap text-licorice text-center">
              LA FONDATION
            </h2>
          </div>

          <img
            className="relative w-[25px] h-[47px]"
            alt="arrow_right"
            src="/orange_arrows/arrow_orange_right.svg"
          />
        </header>

        <div className="flex flex-col items-center justify-center gap-10 px-60 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="mt-[-1.00px] text-licorice leading-[var(--corps-line-height)] relative self-stretch font-corps font-[number:var(--corps-font-weight)] text-[length:var(--corps-font-size)] text-center tracking-[var(--corps-letter-spacing)] [font-style:var(--corps-font-style)]">
            <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
              La Fondation Diaka Camara est née d&apos;une conviction :<br />
            </span>

            <span className="font-bold leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
              L&apos;éducation est le levier essentiel d&apos;un changement
              durable.
            </span><br/>

            <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
              {" "}
              Nous rassemblons partenaires, mécènes et citoyens engagés pour
              agir sur trois piliers :
            </span>
          </p>
        </div>

        <div className="flex w-full justify-around h-40 items-center relative">
          {pillarsData.map((pillar, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-5 p-px relative flex-1 grow"
            >
              <img
                className={`relative w-[110px] h-[110px] ${index === 2 ? "w-[111px] h-[111px] mt-[-0.50px]" : ""}`}
                alt={pillar.iconAlt}
                src={pillar.iconSrc}
              />

              <div
                className={`self-stretch relative font-legendes-bold font-[number:var(--legendes-bold-font-weight)] ${pillar.color} text-[length:var(--legendes-bold-font-size)] text-center tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)] [font-style:var(--legendes-bold-font-style)]`}
              >
                {pillar.title}
              </div>
            </div>
          ))}
        </div>
      </div>

<div
  className="
    max-w-[1300px] mx-auto
    bg-[linear-gradient(0deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%),url(/foundation_section/foundation_bg_img.png)]
    bg-blend-luminosity bg-center bg-cover bg-no-repeat sepia-[0.5]
    flex items-start py-10 self-center w-full rounded-[500px]
  "
>
  <div className="flex-1 mt-[-1.00px] font-[beautique-display] text-vanilla text-4xl text-center">
    Une vision claire, un impact concret.
  </div>
</div>

    </section>
  );
};
