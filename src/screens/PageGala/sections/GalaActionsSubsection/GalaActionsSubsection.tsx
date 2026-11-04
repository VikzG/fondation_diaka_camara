import { Link } from "react-router-dom";
import { useTranslation } from "../../../../lib/i18n";
import { TOMBOLA_BACKGROUND } from "../../../PageTombola/lots";

const content = {
  fr: {
    tombolaTitle: "La tombola solidaire — African Royalty 2026",
    tombolaTagline: "Des lots d'exception. Une chance de gagner. Une belle cause à soutenir.",
    tombolaPrice: "Prix du ticket : 100 USD",
    tombolaButton: "Découvrir les lots",
    donateTitle: "Soutenir la Fondation",
    donateTagline: "Votre générosité peut transformer un avenir.",
    donateText: "Votre contribution, quel que soit son montant, nous aide à poursuivre cet engagement.",
    donateButton: "Faire un don",
  },
  en: {
    tombolaTitle: "The charity raffle — African Royalty 2026",
    tombolaTagline: "Exceptional prizes. A chance to win. A worthy cause to support.",
    tombolaPrice: "Ticket price: 100 USD",
    tombolaButton: "Discover the prizes",
    donateTitle: "Support the Foundation",
    donateTagline: "Your generosity can transform a future.",
    donateText: "Your contribution, whatever its amount, helps us continue this commitment.",
    donateButton: "Make a donation",
  },
};

const ActionCard = ({
  title,
  tagline,
  text,
  button,
  to,
  className,
  buttonClassName,
  backgroundImage,
}: {
  title: string;
  tagline: string;
  text: string;
  button: string;
  to: string;
  className: string;
  buttonClassName: string;
  backgroundImage?: string;
}): JSX.Element => (
  <div style={{ backgroundImage }} className={`flex flex-1 flex-col items-center justify-between gap-5 rounded-2xl p-8 text-center xl:p-12 ${className}`}>
    <h2 className="font-[beautique-display-bold] text-2xl uppercase xl:text-3xl">{title}</h2>
    <p className="font-[beautique-display] text-2xl">{tagline}</p>
    <p className="font-corps font-bold">{text}</p>
    <Link
      to={to}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-xl px-8 py-3 font-corps font-extrabold transition-all duration-300 hover:underline hover:-translate-y-0.5 ${buttonClassName}`}
    >
      {button}
    </Link>
  </div>
);

export const GalaActionsSubsection = (): JSX.Element => {
  const t = useTranslation(content);

  return (
    <section className="w-full bg-antiflash px-6 py-14 xl:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
        <ActionCard
          title={t.tombolaTitle}
          tagline={t.tombolaTagline}
          text={t.tombolaPrice}
          button={t.tombolaButton}
          to="/tombola"
          className="bg-licorice bg-cover bg-center text-vanilla"
          backgroundImage={TOMBOLA_BACKGROUND}
          buttonClassName="bg-pumpkin text-vanilla"
        />
        <ActionCard
          title={t.donateTitle}
          tagline={t.donateTagline}
          text={t.donateText}
          button={t.donateButton}
          to="/don"
          className="bg-colbat text-vanilla"
          buttonClassName="bg-vanilla text-colbat"
        />
      </div>
    </section>
  );
};
