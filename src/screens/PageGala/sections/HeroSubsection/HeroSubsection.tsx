import { Button } from "../../../../components/ui/button";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    edition: "Deuxième édition",
    theme: "L'Afrique en héritage : jeunesse, culture et sport",
    dateAndPlace: "7 novembre 2026 | Hôtel Palm Camayenne, Conakry",
    soldOut: "Dîner de gala — COMPLET",
    discover: "Découvrir l'édition 2026",
    tombola: "Participer à la tombola",
    donate: "Faire un don",
  },
  en: {
    edition: "Second edition",
    theme: "Africa as a legacy: youth, culture and sport",
    dateAndPlace: "7 November 2026 | Hôtel Palm Camayenne, Conakry",
    soldOut: "Gala dinner — SOLD OUT",
    discover: "Discover the 2026 edition",
    tombola: "Enter the raffle",
    donate: "Make a donation",
  },
};

const buttonStyles = [
  { to: "#edition-2026", bg: "bg-vanilla hover:bg-carmin", text: "text-carmin group-hover:text-antiflash", icon: "bg-carmin" },
  { to: "/tombola", bg: "bg-antiflash hover:bg-[#0A4BA5]", text: "text-[#0A4BA5] group-hover:text-antiflash", icon: "bg-[#0A4BA5]" },
  { to: "/don", bg: "bg-vanilla hover:bg-pumpkin", text: "text-pumpkin group-hover:text-vanilla", icon: "bg-pumpkin" },
];

export const HeroSubsection = (): JSX.Element => {
  const t = useTranslation(content);
  const labels = [t.discover, t.tombola, t.donate];

  return (
    <section className="flex flex-col justify-around gap-12 w-full min-h-[800px] mt-14 px-6 py-20 bg-[url(/page_gala_section/gala_2025_bg.webp)] bg-cover bg-[center_right_20%] xl:mt-0 xl:min-h-[1000px] xl:justify-between xl:px-[100px] xl:py-[70px] xl:bg-[50%_50%]">
      <div className="flex flex-col items-center gap-5 text-center text-vanilla xl:items-end xl:pt-40 xl:pr-24 xl:text-right">
        <h1 className="font-[beautique-display-bold] text-5xl leading-[0.95] xl:text-7xl min-[1700px]:text-8xl">
          AFRICAN ROYALTY
          <br />
          GALA 2026
        </h1>
        <p className="font-legendes-bold tracking-[0.2em] uppercase xl:text-xl">{t.edition}</p>
        <p className="max-w-3xl xl:max-w-lg font-[beautique-display] font-medium italic text-3xl xl:text-[32px] xl:leading-10">
          {t.theme}
        </p>
        <p className="font-corps font-bold xl:text-xl">{t.dateAndPlace}</p>
        <p className="rounded-lg bg-carmin px-5 py-2 font-corps font-extrabold text-antiflash">{t.soldOut}</p>
      </div>

      <div className="flex flex-col items-center gap-5 w-full xl:flex-row">
        {buttonStyles.map((button, index) => (
          <HashLink key={button.to} smooth to={button.to} className="w-full max-w-md xl:max-w-none">
            <Button
              className={`group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 ${button.bg}`}
            >
              <span
                className={`flex-1 pl-12 pr-4 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg tracking-[0] leading-[35px] ${button.text}`}
              >
                {labels[index]}
              </span>
              <div
                className={`border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${button.icon}`}
              >
                <img className="w-7 h-7" alt="Icon" src="/gala_arrow_button.svg" />
              </div>
            </Button>
          </HashLink>
        ))}
      </div>
    </section>
  );
};
