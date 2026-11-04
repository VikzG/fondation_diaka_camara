import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    heading: "L'édition 2026",
    tagline: "Une soirée d'exception. Une ambition collective. Un héritage à transmettre.",
    paragraphs: [
      "Pour sa deuxième édition, l'African Royalty Gala célèbre la richesse des talents africains et la force de l'engagement collectif au service des générations futures.",
      "Organisé par la Fondation Diaka Camara, ce rendez-vous réunit à Conakry des personnalités du monde institutionnel, économique, culturel, artistique et sportif, autour d'une conviction : l'excellence prend tout son sens lorsqu'elle contribue à ouvrir des perspectives à celles et ceux qui en ont le plus besoin.",
      "À travers le thème « L'Afrique en héritage : jeunesse, culture et sport », cette édition met à l'honneur la transmission, l'éducation, la créativité et le rôle essentiel de la jeunesse dans la construction de l'avenir du continent.",
      "Au-delà de la célébration, l'African Royalty Gala est un appel à agir. Les contributions mobilisées permettent à la Fondation de poursuivre ses programmes de scolarisation, d'amélioration des infrastructures éducatives, d'accès à la lecture et d'accompagnement des communautés.",
    ],
    soldOutTitle: "Dîner de gala — COMPLET",
    soldOutText: "La vente des billets pour le dîner de gala est clôturée.",
  },
  en: {
    heading: "The 2026 edition",
    tagline: "An exceptional evening. A collective ambition. A legacy to pass on.",
    paragraphs: [
      "For its second edition, the African Royalty Gala celebrates the wealth of African talent and the strength of collective commitment in service of future generations.",
      "Organised by the Diaka Camara Foundation, this event brings together figures from the institutional, economic, cultural, artistic and sporting worlds in Conakry, around one conviction: excellence takes on its full meaning when it helps open up opportunities for those who need them most.",
      "Through the theme \"Africa as a legacy: youth, culture and sport\", this edition honours transmission, education, creativity and the essential role of young people in building the continent's future.",
      "Beyond the celebration, the African Royalty Gala is a call to action. The contributions raised enable the Foundation to continue its programmes for schooling, improving educational infrastructure, access to reading and community support.",
    ],
    soldOutTitle: "Gala dinner — SOLD OUT",
    soldOutText: "Ticket sales for the gala dinner are now closed.",
  },
};

export const GalaSubsection = (): JSX.Element => {
  const t = useTranslation(content);

  return (
    <section
      id="edition-2026"
      className="flex flex-col items-center gap-8 w-full scroll-mt-20 bg-white px-6 py-14 xl:gap-10 xl:scroll-mt-24 xl:py-24"
    >
      <img
        loading="lazy"
        decoding="async"
        className="w-[47px] h-[25px]"
        alt=""
        src="/orange_arrows/orange_arrow_top.svg"
      />
      <h2 className="text-center font-[beautique-display-bold] text-3xl uppercase text-licorice xl:text-5xl">
        {t.heading}
      </h2>
      <p className="max-w-4xl text-center font-[beautique-display] text-2xl text-carmin xl:text-4xl">{t.tagline}</p>
      <div className="flex max-w-3xl flex-col gap-5 font-corps leading-7 text-licorice xl:text-[17.5px]">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="flex w-full max-w-3xl flex-col items-center gap-2 rounded-2xl bg-carmin px-6 py-6 text-center text-antiflash">
        <h3 className="font-[beautique-display] text-2xl xl:text-3xl">{t.soldOutTitle}</h3>
        <p className="font-corps">{t.soldOutText}</p>
      </div>
    </section>
  );
};
