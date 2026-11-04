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
export const RESERVATIONS_OPEN = false;

// Numéros : liste officielle de la Fondation (tableau « Tombola FDC Gala 2026 »).
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
    name: { fr: "The Box Homes : Tableau décor 1", en: "The Box Homes: Decorative painting 1" },
    shortDescription: {
      fr: "Une œuvre abstraite encadrée, où de larges formes noires se détachent sur un fond ocre craquelé.",
      en: "A framed abstract artwork in which broad black shapes stand out against a crackled ochre background.",
    },
    images: ["/lots_tombola/1000018952.jpg"],
  },
  {
    id: "lot-04",
    number: "04",
    name: { fr: "The Box Homes : Tableau décor 2", en: "The Box Homes: Decorative painting 2" },
    shortDescription: {
      fr: "Une œuvre abstraite encadrée, aux nuances de blanc, de gris et de noir relevées de touches de bleu.",
      en: "A framed abstract artwork in shades of white, grey and black, with touches of blue.",
    },
    images: ["/lots_tombola/1000018955.jpg"],
  },
  {
    id: "lot-05",
    number: "05",
    name: { fr: "Le Solitaire : BAOBAB COLLECTION Bougie blanche Max 24", en: "Le Solitaire: BAOBAB COLLECTION white candle Max 24" },
    shortDescription: {
      fr: "Une bougie Baobab Collection à la silhouette élégante, dans un verre d'un blanc nacré.",
      en: "A Baobab Collection candle with an elegant silhouette, in pearly white glass.",
    },
    images: ["/lots_tombola/1000018937.jpg"],
  },
  {
    id: "lot-06",
    number: "06",
    name: { fr: "Le Solitaire : BAOBAB COLLECTION Bougie verte Max 24", en: "Le Solitaire: BAOBAB COLLECTION green candle Max 24" },
    shortDescription: {
      fr: "Une bougie Baobab Collection dont le verre est habillé d'un motif graphique vert et gris.",
      en: "A Baobab Collection candle whose glass features a graphic green and grey pattern.",
    },
    images: ["/lots_tombola/1000018938.jpg"],
  },
  {
    id: "lot-07",
    number: "07",
    name: { fr: "Le Solitaire : Boucles d'oreilles Or 18 Karat bicolore", en: "Le Solitaire: 18 karat two-tone gold earrings" },
    shortDescription: {
      fr: "Des boucles d'oreilles rondes et dorées, dont le centre à facettes capte la lumière.",
      en: "Round golden earrings with a faceted centre that catches the light.",
    },
    images: ["/lots_tombola/1000018947.jpg"],
  },
  {
    id: "lot-08",
    number: "08",
    name: { fr: "Le Solitaire : Boucles d'oreilles Or jaune 18kt", en: "Le Solitaire: 18kt yellow gold earrings" },
    shortDescription: {
      fr: "Des boucles d'oreilles rondes et dorées, aux lignes douces, ornées d'une pierre brillante.",
      en: "Round golden earrings with soft lines, adorned with a sparkling stone.",
    },
    images: ["/lots_tombola/1000018951.jpg"],
  },
  {
    id: "lot-09",
    number: "09",
    name: { fr: "Porte carte et porte monnaie Hugo Boss", en: "Hugo Boss card holder and coin purse" },
    shortDescription: {
      fr: "Un portefeuille et un porte-cartes noirs à motif tressé, réunis dans leur coffret BOSS.",
      en: "A black wallet and card holder with a woven pattern, presented together in their BOSS gift box.",
    },
    images: ["/lots_tombola/1000018943.jpg"],
    imageBackground: "#ebebeb",
  },
  {
    id: "lot-10",
    number: "10",
    name: { fr: "64 Mark Avenue : Atelier Noir by Night Des Ors 100ml", en: "64 Mark Avenue: Atelier Noir by Night Des Ors 100ml" },
    shortDescription: {
      fr: "Un flacon du noir au transparent, coiffé d'un bouchon doré et animé de paillettes d'or.",
      en: "A bottle fading from black to clear, topped with a golden cap and lit up with gold flakes.",
    },
    images: ["/lots_tombola/1000018939.jpg"],
  },
  {
    id: "lot-11",
    number: "11",
    name: { fr: "Djeddah Voyages : Billet d'avion Conakry-Abidjan A/R", en: "Djeddah Voyages: Conakry-Abidjan return flight ticket" },
    shortDescription: {
      fr: "Un billet d'avion aller-retour entre Conakry et Abidjan, offert avec l'agence Djeddah Voyages.",
      en: "A return flight ticket between Conakry and Abidjan, through the Djeddah Voyages agency.",
    },
    images: ["/lots_tombola/bon_djeddah_voyages.webp"],
  },
  {
    id: "lot-12",
    number: "12",
    name: { fr: "Bon de consommation du restaurant l'Avenue d'un million de francs guinéens", en: "Dining voucher for L'Avenue restaurant worth one million Guinean francs" },
    shortDescription: {
      fr: "Deux bons de consommation de 500 000 GNF chacun, soit une valeur de 1 000 000 GNF, à utiliser au Avenue Resto.",
      en: "Two dining vouchers worth 500,000 GNF each, for a total value of 1,000,000 GNF, to use at Avenue Resto.",
    },
    images: ["/lots_tombola/1000018961.jpg"],
  },
  {
    id: "lot-13",
    number: "13",
    name: { fr: "Bon de consommation du restaurant Upstairs d'un million de francs guinéens", en: "Dining voucher for Upstairs restaurant worth one million Guinean francs" },
    shortDescription: {
      fr: "Deux bons de consommation de 500 000 GNF chacun, soit une valeur de 1 000 000 GNF, à utiliser au Upstairs Lounge.",
      en: "Two vouchers worth 500,000 GNF each, for a total value of 1,000,000 GNF, to use at Upstairs Lounge.",
    },
    images: ["/lots_tombola/1000018967.jpg"],
  },
  {
    id: "lot-14",
    number: "14",
    name: { fr: "Bon de consommation restaurant Salma's de six cent mille francs guinéens", en: "Dining voucher for Salma's restaurant worth six hundred thousand Guinean francs" },
    shortDescription: {
      fr: "Deux bons de consommation de 300 000 GNF chacun, soit une valeur de 600 000 GNF, à utiliser au Salma's Diner.",
      en: "Two dining vouchers worth 300,000 GNF each, for a total value of 600,000 GNF, to use at Salma's Diner.",
    },
    images: ["/lots_tombola/1000018964.jpg"],
  },
  {
    // Contenu du lot en attente et visuel manquant
    id: "lot-15",
    number: "15",
    name: { fr: "Montale", en: "Montale" },
    shortDescription: {
      fr: "Un lot de la marque de parfum Montale.",
      en: "A prize from the perfume brand Montale.",
    },
    images: [],
    hidden: true,
  },
  {
    id: "lot-16",
    number: "16",
    name: { fr: "Colonie : Une box de 6 produits + jeu de cartes + jeu de Ludo", en: "Colonie: A box of 6 products + card game + Ludo game" },
    shortDescription: {
      fr: "Un coffret gourmand autour du miel, accompagné de ses cuillères à miel en bois.",
      en: "A gourmet gift box built around honey, complete with wooden honey dippers.",
    },
    images: ["/lots_tombola/1000018936.jpg"],
  },
  {
    // Visuel manquant
    id: "lot-17",
    number: "17",
    name: { fr: "Sac de luxe et sandales", en: "Luxury bag and sandals" },
    shortDescription: {
      fr: "Un sac de luxe et une paire de sandales.",
      en: "A luxury bag and a pair of sandals.",
    },
    images: [],
    hidden: true,
  },
  {
    // Visuel manquant
    id: "lot-18",
    number: "18",
    name: { fr: "Retba : Un coffret et une bougie", en: "Retba: A gift box and a candle" },
    shortDescription: {
      fr: "Un coffret et une bougie Retba.",
      en: "A Retba gift box and candle.",
    },
    images: [],
    hidden: true,
  },
  {
    id: "lot-19",
    number: "19",
    name: { fr: "Zen Garden : Abonnement soins", en: "Zen Garden: Spa treatment subscription" },
    shortDescription: {
      fr: "Un abonnement soins chez Zen Garden Spa & Beauty, d'une valeur de 2 500 000 GNF.",
      en: "A treatment subscription at Zen Garden Spa & Beauty, worth 2,500,000 GNF.",
    },
    images: ["/lots_tombola/bon_zen_garden.webp"],
  },
  {
    id: "lot-20",
    number: "20",
    name: { fr: "Twinsbrokers : Assurance voyage", en: "Twinsbrokers: Travel insurance" },
    shortDescription: {
      fr: "Une assurance voyage proposée par Twinsbrokers, d'une valeur de 1 000 000 GNF.",
      en: "Travel insurance from Twinsbrokers, worth 1,000,000 GNF.",
    },
    images: ["/lots_tombola/bon_twinsbrokers.webp"],
  },
  {
    // Contenu du lot en attente et visuel manquant
    id: "lot-21",
    number: "21",
    name: { fr: "Sonia Mugabo", en: "Sonia Mugabo" },
    shortDescription: {
      fr: "Un lot de la marque de vêtements Sonia Mugabo.",
      en: "A prize from the clothing brand Sonia Mugabo.",
    },
    images: [],
    hidden: true,
  },
  {
    id: "lot-22",
    number: "22",
    name: { fr: "Robe en Bazin", en: "Bazin dress" },
    shortDescription: {
      fr: "Une robe longue à épaules dénudées et manches bouffantes, aux motifs violets et blancs rehaussés de broderies.",
      en: "A long off-the-shoulder dress with puffed sleeves, in purple and white patterns enhanced with embroidery.",
    },
    images: ["/lots_tombola/1000018934.jpg"],
  },
  {
    id: "lot-23",
    number: "23",
    name: { fr: "Costume Hugo Boss", en: "Hugo Boss suit" },
    shortDescription: {
      fr: "Une veste de costume beige signée BOSS, à la coupe élégante et sobre.",
      en: "A beige suit jacket by BOSS, with a sleek and elegant cut.",
    },
    images: ["/lots_tombola/1000018935.jpg"],
  },
  {
    // Visuel manquant
    id: "lot-24",
    number: "24",
    name: { fr: "Air Côte d'Ivoire : Billet d'avion business Abidjan-Conakry", en: "Air Côte d'Ivoire: Abidjan-Conakry business class ticket" },
    shortDescription: {
      fr: "Un billet d'avion en classe business entre Abidjan et Conakry.",
      en: "A business class flight ticket between Abidjan and Conakry.",
    },
    images: [],
    hidden: true,
  },
];
