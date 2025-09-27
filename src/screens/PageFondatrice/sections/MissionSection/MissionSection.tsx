import { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const MissionSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Version mobile
    return (
      <section className="w-full flex flex-col items-center justify-center gap-8">
        {/* Image en haut */}
        <div
          className="w-full h-[400px] bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage:
              "url(/page_presidente_section/presidente_photo.jpg)",
          }}
        />

        {/* Texte en bas */}
        <div className="flex flex-col py-8 px-6 justify-center items-center gap-8 w-full max-w-[700px]">
          <h2 className="w-full font-[beautique-display] text-licorice text-3xl text-center">
            Une ambition tournée vers l&apos;avenir
          </h2>

          <div className="w-full [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[16px] text-justify leading-[22px]">
            <span>
              Son engagement et sa vision lui valent une reconnaissance croissante
              au-delà des frontières guinéennes. Invitée dans des conférences et
              forums internationaux, elle porte haut la voix de la Guinée et de
              l&apos;Afrique sur les enjeux liés à l&apos;éducation, à
              l&apos;autonomisation des femmes et à la jeunesse.
              <br />
              <br />À travers sa trajectoire, Diaka Camara illustre la force
              d&apos;un leadership féminin engagé. Son ambition est claire :{" "}
            </span>
            <span className="font-bold">
              Offrir à chaque enfant et à chaque jeune fille la possibilité
              d&apos;apprendre, de rêver et de s&apos;accomplir, en bâtissant des
              ponts entre les institutions, les communautés et la société civile.
            </span>
          </div>

          <Link to="/don" className="w-full">
            <Button className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]">
              <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg md:text-xl leading-[30px] md:leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
                Soutenir la Fondation
              </span>
              <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[45px] md:w-[50px] h-[45px] md:h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
                <img className="w-6 h-6 md:w-7 md:h-7" alt="Icon" src="/gala_arrow_button.svg" />
              </div>
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  // Version desktop
  return (
    <section className="w-full flex items-center justify-center">
      {/* Image gauche */}
      <div
        className="flex-1 h-[770px] bg-cover bg-top bg-no-repeat max-w-[750px]"
        style={{
          backgroundImage:
            "url(/page_presidente_section/presidente_photo.jpg)",
        }}
      />

      {/* Texte droite */}
      <div className="flex-1 flex flex-col justify-center items-start gap-10 max-w-[700px] mx-auto p-10">
        <h2 className="w-full font-[beautique-display] text-licorice text-4xl text-center">
          Une ambition tournée vers l&apos;avenir
        </h2>

        <div className="w-full [font-family:'Mona_Sans',Helvetica] font-normal text-licorice text-[17.5px] text-justify leading-[26px]">
          <span>
            Son engagement et sa vision lui valent une reconnaissance croissante
            au-delà des frontières guinéennes. Invitée dans des conférences et
            forums internationaux, elle porte haut la voix de la Guinée et de
            l&apos;Afrique sur les enjeux liés à l&apos;éducation, à
            l&apos;autonomisation des femmes et à la jeunesse.
            <br />
            <br />À travers sa trajectoire, Diaka Camara illustre la force
            d&apos;un leadership féminin engagé. Son ambition est claire :{" "}
          </span>
          <span className="font-bold">
            Offrir à chaque enfant et à chaque jeune fille la possibilité
            d&apos;apprendre, de rêver et de s&apos;accomplir, en bâtissant des
            ponts entre les institutions, les communautés et la société civile.
          </span>
        </div>

        <Link to="/don" className="w-full">
          <Button className="group relative flex items-center bg-antiflash justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 hover:bg-[#0A4BA5]">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-xl tracking-[0] leading-[35px] text-[#0A4BA5] group-hover:text-antiflash">
              Soutenir la Fondation
            </span>
            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-[#0A4BA5]">
              <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
            </div>
          </Button>
        </Link>
      </div>
    </section>
  );
};
