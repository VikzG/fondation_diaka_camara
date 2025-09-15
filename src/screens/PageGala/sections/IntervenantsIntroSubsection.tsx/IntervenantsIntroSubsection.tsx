
export const IntervenantsIntroSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[70px] px-[100px] py-[70px] bg-white w-full relative">
      <header className="flex flex-col items-center justify-end relative w-full">
        <h1 className="relative w-full font-titres font-[number:var(--titres-font-weight)] text-licorice text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
          UNE
        </h1>

        <div className="relative w-full opacity-0 font-titres font-[number:var(--titres-font-weight)] text-licorice text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
          CÉLÉBRATION
        </div>

        <div className="relative w-full max-w-[1240px] h-[50px] opacity-0 font-titres font-[number:var(--titres-font-weight)] text-licorice text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] whitespace-nowrap [font-style:var(--titres-font-style)]">
          ARTISTIQUE &amp; CULTURELLE
        </div>
      </header>

      <div className="flex w-[400px] h-[230px] items-center justify-center gap-2.5 p-2.5 relative rounded-[500px] overflow-hidden bg-cover bg-[50%_50%]">
        <div className="relative flex-1 opacity-0 [font-family:'Beautique_Display_Condensed-BlackItalic',Helvetica] font-black italic text-vanilla text-[50px] text-center tracking-[0] leading-[50px]">
          Inoubliable
        </div>
      </div>

      <div className="flex items-end justify-between relative w-full opacity-0">
        <div className="flex items-center gap-[100px] relative flex-1">
          <h2 className="relative [font-family:'Beautique_Display_Condensed-MediumItalic',Helvetica] font-medium italic text-licorice text-[32px] tracking-[0.64px] leading-[38px] whitespace-nowrap">
            Les Artistes &amp; Intervenants
          </h2>

          <img className="relative w-[47px] h-[25px]" alt="Vector" />
        </div>

        <div className="flex flex-col items-end gap-[30px] relative flex-1">
          <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-justify tracking-[0] leading-7 relative w-full">
            <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-[#160a00] text-[17.5px] tracking-[0] leading-7">
              Le Gala 2025 ne sera pas seulement un moment de solidarité et de
              philanthropie, mais aussi{" "}
            </span>

            <span className="font-bold">
              une célébration artistique et culturelle
            </span>

            <span className="[font-family:'Mona_Sans',Helvetica] font-normal text-[#160a00] text-[17.5px] tracking-[0] leading-7">
              . Des artistes de renommée internationale et des personnalités
              engagées offriront leurs voix et leurs talents pour amplifier
              notre message et créer une expérience mémorable.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
