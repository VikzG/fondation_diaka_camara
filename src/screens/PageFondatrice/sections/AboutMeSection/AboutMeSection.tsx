import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMeSection = (): JSX.Element => {
  const aboutMeCards = [
    {
      icon: "/page_presidente_section/orange_books.svg",
      iconAlt: "Icone study",
      title: "Études & Formation",
    },
    {
      icon: "/page_presidente_section/blue_case.svg",
      iconAlt: "Icone pro",
      title: "Parcours Professionnel",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center gap-20 p-10 bg-[url(/page_presidente_section/presidente_bg.png)] bg-cover bg-[50%_40%] bg-no-repeat min-h-[800px]">
      {aboutMeCards.map((card, index) => (
        <Card
          key={index}
          className="flex-1 h-[350px] max-w-[700px] bg-[#ffffffcc] rounded-[20px] shadow-[0px_1px_3px_#00000040] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] border-0"
        >
          <CardContent className="flex flex-col items-center justify-center gap-10 p-[50px] h-full">
            <div className="flex flex-col items-center gap-[30px] flex-[0_0_auto] w-full">
              <img
                className="w-[110px] h-[110px]"
                alt={card.iconAlt}
                src={card.icon}
              />

              <h3 className="text-center font-[beautique-display] text-licorice text-4xl">
                {card.title}
              </h3>
            </div>

            <img
              className="w-[47px] h-[25px]"
              alt="Vector"
              src={
                index === 1
                  ? "/page_presidente_section/bottom_arrow_blue.svg"
                  : "/page_presidente_section/bottom_arrow_orange.svg"
              }
            />
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
