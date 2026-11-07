import type { Lang } from "../../lib/i18n";

type Localized = Record<Lang, string>;

export interface Lot {
  id: string; // utilisé dans l'adresse de la fiche : /tombola/lot-01
  number: string;
  name: Localized;
  shortDescription: Localized;
  description?: Localized;
  conditions?: Localized;
  partner?: string; // laisser vide si le partenaire n'autorise pas la mention de son nom
  partnerLogo?: string;
  images: string[]; // la première image sert de visuel principal
  imageBackground?: string; // couleur de fond de la photo quand elle n'est pas blanche
  featured?: boolean; // affiché en premier avec un badge
  hidden?: boolean; // lot sans visuel ou pas encore confirmé : masqué du site
}

// Fond de l'en-tête de la tombola et de sa carte sur la page Gala : le voile sombre garde le texte lisible
export const TOMBOLA_BACKGROUND =
  "linear-gradient(rgba(25, 10, 5, 0.72), rgba(25, 10, 5, 0.72)), url(/page_gala_section/gala_2025_bg.webp)";

// Tant que c'est false, le formulaire est masqué et les boutons affichent « Vente des tickets bientôt ouverte ».
// Passer à true pour ouvrir les réservations.
export const RESERVATIONS_OPEN = true;

// Clôture automatique des ventes : 7 novembre 2026 à 23 h 00, heure de Conakry (GMT, sans changement d'heure)
export const RESERVATIONS_CLOSE_AT = Date.UTC(2026, 10, 7, 23, 0, 0);

export const reservationsClosed = (): boolean => Date.now() >= RESERVATIONS_CLOSE_AT;

// Numéros : liste finale de la Fondation (tableau « Tombola 2 », 21 lots).
// Descriptions rédigées d'après les photos, à valider par la Fondation avant la mise en ligne.
// L'ordre du tableau est l'ordre d'affichage sur le site.
export const lots: Lot[] = [
  {
    id: "lot-01",
    number: "01",
    name: { fr: "Wakili : Bon d'achat", en: "Wakili: Gift voucher" },
    shortDescription: {
      fr: "Un bon d'achat Wakili d'une valeur de 1 000 000 GNF.",
      en: "A Wakili gift voucher worth 1,000,000 GNF.",
    },
    conditions: {
      fr: "Dans la limite du stock disponible des collections. Date limite : décembre 2026.",
      en: "Subject to availability of the collections. Deadline: December 2026.",
    },
    images: ["/lots_tombola/bon_wakili.webp"],
  },
  {
    id: "lot-02",
    number: "02",
    name: { fr: "Shape : 5 séances et un massage", en: "Shape: 5 sessions and a massage" },
    shortDescription: {
      fr: "5 séances de pilates reformer, megaformer ou yoga, avec un massage d'une heure, d'une valeur de 2 400 000 GNF.",
      en: "5 reformer pilates, megaformer or yoga sessions, plus a one-hour massage, worth 2,400,000 GNF.",
    },
    conditions: {
      fr: "Date limite : 31/03/2027.",
      en: "Deadline: 31/03/2027.",
    },
    images: ["/lots_tombola/bon_shape.webp"],
  },
  {
    id: "lot-03",
    number: "03",
    name: { fr: "The Box Homes : 2 tableaux décor", en: "The Box Homes: 2 decorative paintings" },
    shortDescription: {
      fr: "Deux tableaux de décoration d'intérieur, réunis dans un seul lot.",
      en: "Two interior decoration paintings, together in a single prize.",
    },
    images: ["/lots_tombola/1000018952.jpg", "/lots_tombola/1000018955.jpg"],
  },
  {
    id: "lot-04",
    number: "04",
    name: { fr: "Le Solitaire : BAOBAB COLLECTION Bougie blanche Max 24", en: "Le Solitaire: BAOBAB COLLECTION white candle Max 24" },
    shortDescription: {
      fr: "Une bougie Baobab Collection à la silhouette élégante, dans un verre d'un blanc nacré.",
      en: "A Baobab Collection candle with an elegant silhouette, in pearly white glass.",
    },
    images: ["/lots_tombola/1000018937.jpg"],
  },
  {
    id: "lot-05",
    number: "05",
    name: { fr: "Le Solitaire : BAOBAB COLLECTION Bougie verte Max 24", en: "Le Solitaire: BAOBAB COLLECTION green candle Max 24" },
    shortDescription: {
      fr: "Une bougie Baobab Collection dont le verre est habillé d'un motif graphique vert et gris.",
      en: "A Baobab Collection candle whose glass features a graphic green and grey pattern.",
    },
    images: ["/lots_tombola/1000018938.jpg"],
  },
  {
    id: "lot-06",
    number: "06",
    name: { fr: "Le Solitaire : Boucles d'oreilles Or 18 Karat bicolore", en: "Le Solitaire: 18 karat two-tone gold earrings" },
    shortDescription: {
      fr: "Des boucles d'oreilles rondes et dorées, dont le centre à facettes capte la lumière.",
      en: "Round golden earrings with a faceted centre that catches the light.",
    },
    images: ["/lots_tombola/1000018947.jpg"],
  },
  {
    id: "lot-07",
    number: "07",
    name: { fr: "Le Solitaire : Boucles d'oreilles Or jaune 18kt", en: "Le Solitaire: 18kt yellow gold earrings" },
    shortDescription: {
      fr: "Des boucles d'oreilles rondes et dorées, aux lignes douces, ornées d'une pierre brillante.",
      en: "Round golden earrings with soft lines, adorned with a sparkling stone.",
    },
    images: ["/lots_tombola/1000018951.jpg"],
  },
  {
    id: "lot-08",
    number: "08",
    name: { fr: "Porte carte et porte monnaie Hugo Boss", en: "Hugo Boss card holder and coin purse" },
    shortDescription: {
      fr: "Un portefeuille et un porte-cartes noirs à motif tressé, réunis dans leur coffret BOSS.",
      en: "A black wallet and card holder with a woven pattern, presented together in their BOSS gift box.",
    },
    images: ["/lots_tombola/1000018943.jpg"],
    imageBackground: "#ebebeb",
  },
  {
    id: "lot-09",
    number: "09",
    name: { fr: "64 Mark Avenue : Atelier Noir by Night Des Ors 100ml", en: "64 Mark Avenue: Atelier Noir by Night Des Ors 100ml" },
    shortDescription: {
      fr: "Un flacon du noir au transparent, coiffé d'un bouchon doré et animé de paillettes d'or.",
      en: "A bottle fading from black to clear, topped with a golden cap and lit up with gold flakes.",
    },
    images: ["/lots_tombola/1000018939.jpg"],
  },
  {
    id: "lot-10",
    number: "10",
    name: { fr: "Djeddah Voyages : Billet d'avion Conakry-Abidjan A/R", en: "Djeddah Voyages: Conakry-Abidjan return flight ticket" },
    shortDescription: {
      fr: "Un billet d'avion aller-retour entre Conakry et Abidjan, offert avec l'agence Djeddah Voyages.",
      en: "A return flight ticket between Conakry and Abidjan, through the Djeddah Voyages agency.",
    },
    images: ["/lots_tombola/bon_djeddah_voyages.webp"],
  },
  {
    id: "lot-11",
    number: "11",
    name: { fr: "Avenue Group : Bons de consommation L'Avenue, Upstairs et Salma's", en: "Avenue Group: Dining vouchers for L'Avenue, Upstairs and Salma's" },
    shortDescription: {
      fr: "Des bons de consommation dans 3 restaurants du groupe, pour une valeur totale de 2 600 000 GNF.",
      en: "Dining vouchers for 3 of the group's restaurants, worth 2,600,000 GNF in total.",
    },
    description: {
      fr: "Deux bons de 500 000 GNF pour L'Avenue, deux bons de 500 000 GNF pour Upstairs et deux bons de 300 000 GNF pour Salma's, soit une valeur totale de 2 600 000 GNF.",
      en: "Two 500,000 GNF vouchers for L'Avenue, two 500,000 GNF vouchers for Upstairs and two 300,000 GNF vouchers for Salma's, worth 2,600,000 GNF in total.",
    },
    images: ["/lots_tombola/avenue_group_bons.jpg", "/lots_tombola/1000018961.jpg", "/lots_tombola/1000018967.jpg", "/lots_tombola/1000018964.jpg"],
  },
  {
    id: "lot-12",
    number: "12",
    name: { fr: "Montale : Parfum, crème corps et bougie parfumée", en: "Montale: Perfume, body cream and scented candle" },
    shortDescription: {
      fr: "Un parfum de 100 ml, une crème pour le corps et une bougie parfumée Montale.",
      en: "A 100 ml perfume, a body cream and a scented candle by Montale.",
    },
    images: ["/lots_tombola/montale_coffret.jpg"],
  },
  {
    id: "lot-13",
    number: "13",
    name: { fr: "Colonie : Une box de 6 produits + jeu de cartes + jeu de Ludo", en: "Colonie: A box of 6 products + card game + Ludo game" },
    shortDescription: {
      fr: "Un coffret gourmand autour du miel, accompagné de ses cuillères à miel en bois.",
      en: "A gourmet gift box built around honey, complete with wooden honey dippers.",
    },
    images: ["/lots_tombola/1000018936.jpg"],
  },
  {
    id: "lot-14",
    number: "14",
    name: { fr: "Elie KOUAME : Sandales + sac", en: "Elie KOUAME: Sandals + bag" },
    shortDescription: {
      fr: "Un sac de luxe et une paire de sandales.",
      en: "A luxury bag and a pair of sandals.",
    },
    images: ["/lots_tombola/elie_kouame_sac.jpg", "/lots_tombola/elie_kouame_sandales.jpg"],
  },
  {
    id: "lot-15",
    number: "15",
    name: { fr: "Retbaa : Coffrets de produits", en: "Retbaa: Product gift boxes" },
    shortDescription: {
      fr: "Des coffrets de produits Retbaa, marque d'art de vivre.",
      en: "Product gift boxes by Retbaa, a lifestyle brand.",
    },
    images: ["/lots_tombola/retbaa_coffret.jpg"],
  },
  {
    id: "lot-16",
    number: "16",
    name: { fr: "Zen Garden : Abonnement soins", en: "Zen Garden: Spa treatment subscription" },
    shortDescription: {
      fr: "Un abonnement soins chez Zen Garden Spa & Beauty, d'une valeur de 2 500 000 GNF.",
      en: "A treatment subscription at Zen Garden Spa & Beauty, worth 2,500,000 GNF.",
    },
    images: ["/lots_tombola/bon_zen_garden.webp"],
  },
  {
    id: "lot-17",
    number: "17",
    name: { fr: "Twinsbrokers : Assurance voyage", en: "Twinsbrokers: Travel insurance" },
    shortDescription: {
      fr: "Une assurance voyage proposée par Twinsbrokers, d'une valeur de 1 000 000 GNF.",
      en: "Travel insurance from Twinsbrokers, worth 1,000,000 GNF.",
    },
    images: ["/lots_tombola/bon_twinsbrokers.webp"],
  },
  {
    id: "lot-18",
    number: "18",
    name: { fr: "Sonia Mugabo : Robe Agaseke", en: "Sonia Mugabo: Agaseke dress" },
    shortDescription: {
      fr: "L'imprimé de cette robe s'inspire du panier traditionnel rwandais, connu sous le nom d'Agaseke.",
      en: "The print of this dress is inspired by the traditional Rwandan basket known as the Agaseke.",
    },
    description: {
      fr: "L'imprimé de cette robe s'inspire du panier traditionnel rwandais, connu sous le nom d'Agaseke. Ses motifs géométriques célèbrent le savoir-faire artistique africain, mêlant des tons terreux riches et des imprimés distinctifs. Une pièce forte et polyvalente qui se porte aussi bien le jour que le soir.",
      en: "The print of this dress is inspired by the traditional Rwandan basket known as the Agaseke. Its geometric patterns celebrate African artistic craftsmanship, blending rich earthy tones with distinctive prints. A strong, versatile piece that can be worn both day and night.",
    },
    images: ["/lots_tombola/sonia_mugabo_robe.jpg"],
  },
  {
    id: "lot-19",
    number: "19",
    name: { fr: "Robe en Bazin", en: "Bazin dress" },
    shortDescription: {
      fr: "Une robe longue à épaules dénudées et manches bouffantes, aux motifs violets et blancs rehaussés de broderies.",
      en: "A long off-the-shoulder dress with puffed sleeves, in purple and white patterns enhanced with embroidery.",
    },
    images: ["/lots_tombola/1000018934.jpg"],
  },
  {
    id: "lot-20",
    number: "20",
    name: { fr: "Costume Hugo Boss", en: "Hugo Boss suit" },
    shortDescription: {
      fr: "Une veste de costume beige signée BOSS, à la coupe élégante et sobre.",
      en: "A beige suit jacket by BOSS, with a sleek and elegant cut.",
    },
    images: ["/lots_tombola/1000018935.jpg"],
  },
  {
    id: "lot-21",
    number: "21",
    name: { fr: "Franprix : 3 bons d'achat", en: "Franprix: 3 gift vouchers" },
    shortDescription: {
      fr: "Trois bons d'achat Franprix de 1 000 000 GNF chacun, soit 3 000 000 GNF.",
      en: "Three Franprix gift vouchers worth 1,000,000 GNF each, 3,000,000 GNF in total.",
    },
    conditions: {
      fr: "Chèques cadeaux valables jusqu'au 3 janvier 2027.",
      en: "Gift vouchers valid until 3 January 2027.",
    },
    images: ["/lots_tombola/franprix_cheques.jpg"],
  },
];
