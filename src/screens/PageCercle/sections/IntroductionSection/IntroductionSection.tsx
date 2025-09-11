export const IntroductionSection = (): JSX.Element => {
  const textContent = [
    {
      text: "Le ",
      isHighlighted: false,
    },
    {
      text: "Cercle des Alliances",
      isHighlighted: true,
    },
    {
      text: " (CDA) n'est pas seulement un réseau, c'est ",
      isHighlighted: false,
    },
    {
      text: "une communauté engagée",
      isHighlighted: true,
    },
    {
      text: " où fondations, philanthropes, entreprises et décideurs se rassemblent ",
      isHighlighted: false,
    },
    {
      text: "pour soutenir des causes communes et s'entraider mutuellement.",
      isHighlighted: true,
    },
  ];

  const secondParagraph =
    "En rejoignant le CDA, vous ne rejoignez pas seulement la Fondation Diaka Camara : vous devenez partie prenante d'un cercle de confiance, où les organisations invitées partagent leurs expériences, renforcent leur visibilité et créent ensemble un impact durable.";

  return (
    <section className="w-full bg-vanilla">
      <div className="flex items-center max-w-[1600px] mx-auto px-10 py-20 gap-10 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex-1 flex items-center justify-center">
  <div className="w-[720px] aspect-square rounded-full overflow-hidden">
    <img
      className="w-full h-full object-cover"
      alt="image cercle"
      src="/cercle_section/cercle_hands.png"
    />
  </div>
</div>

        <div className="flex flex-col items-center justify-center gap-[50px] p-[100px] flex-1">
          <h2 className="w-full font-[beautique-display] text-licorice text-4xl text-center">
            Un réseau d&apos;exception,
            <br />
            Une solidarité partagée
          </h2>

          <div className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-justify tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
            <p className="mb-[var(--corps-line-height)]">
              {textContent.map((segment, index) => (
                <span
                  key={index}
                  className={`leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)] ${
                    segment.isHighlighted
                      ? "font-bold"
                      : ""
                  }`}
                >
                  {segment.text}
                </span>
              ))}
            </p>

            <p className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
              {secondParagraph}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start px-10 py-20 relative self-stretch w-full flex-[0_0_auto] bg-[linear-gradient(270deg,rgba(240,100,25,1)_0%,rgba(195,15,40,1)_100%)]">
        <div className="flex items-start gap-10 relative flex-1 self-stretch grow">
          <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
            <p className="relative self-stretch font-[beautique-display] text-4xl text-antiflash  text-center ">
              Pourquoi rejoindre le Cercle des Alliances ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
