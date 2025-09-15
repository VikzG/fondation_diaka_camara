import { Button } from "../../../../components/ui/button";

export const IntervenantsSubsection = (): JSX.Element => {
  const smallImages = [
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
    {
      className:
        "flex-1 h-[125px] rounded-[100px] shadow-[0px_1px_2px_#00000080] bg-cover bg-[50%_50%]",
    },
  ];

  return (
    <section className="bg-vanilla w-full relative">
      <div className="flex items-start w-full max-w-[1440px] mx-auto relative">
        <div className="flex flex-col flex-1 relative">
          <div className="flex items-center justify-between p-[100px] w-full flex-col flex-1">
            <div className="flex flex-col items-center justify-center gap-[50px] w-full flex-1">
              <h2 className="font-titres font-[number:var(--titres-font-weight)] text-pumpkin text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
                MANAMBA
                <br />
                KANTÉ
              </h2>

              <p className="[font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-center tracking-[0] leading-7">
                Alliant avec finesse tradition mandingue et sonorités
                contemporaines, cette fusion a permis à la chanteuse guinéenne
                de se distinguer sur la scène musicale africaine, où elle
                s&apos;impose comme une voix singulière et engagée.
              </p>

              <div className="font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-pumpkin text-[length:var(--legendes-categories-font-size)] text-center tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] [font-style:var(--legendes-categories-font-style)]">
                PERFORMANCE MUSICALE
              </div>
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center gap-5 px-[30px] py-2.5 rounded-[50px] border border-solid border-[#160a00] bg-transparent h-auto"
            >
              <img
                className="w-[18.7px] h-[35px]"
                alt="Vector"
                src="/vector-6.svg"
              />
            </Button>
          </div>
        </div>

        <img
          className="absolute w-[219px] h-[321px] top-[359px] left-1/2 transform -translate-x-1/2 z-10"
          alt="Vector"
          src="/vector.svg"
        />

        <div className="flex items-start gap-2.5 p-[100px] flex-1">
          <div className="flex-1 h-[580px] rounded-[500px] shadow-[0px_4px_4px_#00000080] bg-cover bg-[50%_50%]" />
        </div>
      </div>

      <div className="flex w-full max-w-[720px] items-start gap-5 px-[100px] py-0 absolute top-[-63px] left-0">
        {smallImages.map((image, index) => (
          <div key={`small-image-${index}`} className={image.className} />
        ))}
      </div>
    </section>
  );
};
