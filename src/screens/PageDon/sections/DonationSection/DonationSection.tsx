import { HashLink } from "react-router-hash-link";
import {
  DonationAmountPicker,
  DonationMethodDetails,
  useDonationMethods,
  type DonationMethodId,
} from "../../../../components/DonationMethods";
import { useState,useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "../../../../lib/i18n";

const content = {
  fr: {
    p1t: "SCOLARISER 100 JEUNES FILLES",
    p1s: "à travers la Bourse Zenab Soumah",
    p2t: "NOUVELLES BIBLIOTHÈQUES SCOLAIRES",
    p2s: "dans les quartiers défavorisés de Conakry",
    p3t: "UN FONDS D'URGENCE POUR PROTÉGER",
    p3s: "les victimes de violences basées sur le genre",
    a1: "Vous offrez un kit scolaire complet à une élève.",
    a2: "Vous assurez une année entière de scolarité et de repas pour une jeune fille.",
    a3: "Vous contribuez à l'ouverture d'une bibliothèque et à l'accès à la lecture pour plus de 1 000 enfants.",
    e1: "Un reçu officiel vous sera transmis pour chaque don.",
    e2: "Vous recevrez des rapports réguliers sur l'impact de votre contribution.",
    e3: "Vous aurez accès à des témoignages et histoires de vie des bénéficiaires.",
    title: "SOUTENIR LA FONDATION",
    lead: "Votre générosité peut transformer un avenir.",
    body1: "Derrière chaque projet de la Fondation Diaka Camara, il y a des enfants, des familles et des communautés pour lesquels l'accès à l'éducation, aux soins ou à de meilleures conditions d'apprentissage représente une opportunité déterminante.",
    body2: "Votre contribution, quel que soit son montant, nous aide à poursuivre cet engagement.",
    donateNow: "Faire un don",
    spark: <>Chaque contribution est une étincelle d&apos;avenir</>,
    priority: "Notre priorité est claire :",
    differenceShort: "VOTRE DON FAIT LA DIFFÉRENCE : CHAQUE MONTANT COMPTE.",
    difference: "VOTRE DON FAIT LA DIFFÉRENCE : CHAQUE MONTANT COMPTE. CHAQUE GESTE EST UN PAS VERS UN AVENIR MEILLEUR.",
    how: "COMMENT DONNER ?",
    transparency: "Nous croyons en la transparence",
    commitment: "NOTRE ENGAGEMENT ENVERS VOUS",
    ctaMobile: (
      <>
        <span className="text-colbat">
        Donner, c&apos;est plus qu&apos;un geste. C&apos;est changer une vie.
        </span>
        <br />
        C&apos;est offrir un sourire, une chance et une dignité retrouvée.
      </>
    ),
    ctaLine1: (
      <>
        Donner, c&apos;est plus qu&apos;un geste. C&apos;est changer une vie.
        <br />
      </>
    ),
    ctaLine2: <>C&apos;est offrir un sourire, une chance et une dignité retrouvée.</>,
    donate: "Faire un don à la Fondation",
  },
  en: {
    p1t: "SCHOOLING 100 GIRLS",
    p1s: "through the Zenab Soumah Scholarship",
    p2t: "NEW SCHOOL LIBRARIES",
    p2s: "in Conakry's disadvantaged neighbourhoods",
    p3t: "AN EMERGENCY FUND TO PROTECT",
    p3s: "victims of gender-based violence",
    a1: "You provide a complete school kit for one pupil.",
    a2: "You cover a full year of schooling and meals for one girl.",
    a3: "You help open a library and give more than 1,000 children access to reading.",
    e1: "You will receive an official receipt for every donation.",
    e2: "You will receive regular reports on the impact of your contribution.",
    e3: "You will have access to testimonials and life stories from beneficiaries.",
    title: "SUPPORT THE FOUNDATION",
    lead: "Your generosity can transform a future.",
    body1: "Behind every Diaka Camara Foundation project are children, families and communities for whom access to education, healthcare or better learning conditions is a decisive opportunity.",
    body2: "Your contribution, whatever its amount, helps us continue this commitment.",
    donateNow: "Make a donation",
    spark: "Every contribution is a spark for the future",
    priority: "Our priority is clear:",
    differenceShort: "YOUR DONATION MAKES A DIFFERENCE: EVERY AMOUNT COUNTS.",
    difference: "YOUR DONATION MAKES A DIFFERENCE: EVERY AMOUNT COUNTS. EVERY GESTURE IS A STEP TOWARDS A BETTER FUTURE.",
    how: "HOW TO GIVE?",
    transparency: "We believe in transparency",
    commitment: "OUR COMMITMENT TO YOU",
    ctaMobile: (
      <>
        <span className="text-colbat">
        Giving is more than a gesture. It changes a life.
        </span>
        <br />
        It offers a smile, a chance and restored dignity.
      </>
    ),
    ctaLine1: (
      <>
        Giving is more than a gesture. It changes a life.
        <br />
      </>
    ),
    ctaLine2: "It offers a smile, a chance and restored dignity.",
    donate: "Donate to the Foundation",
  },
};

export const DonationSection = (): JSX.Element => {
  const t = useTranslation(content);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const [selectedMethod, setSelectedMethod] = useState<DonationMethodId>("paypal");
    const [amount, setAmount] = useState<number | null>(null);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

  const priorityItems = [
    {
      icon: "/donation_section/book_blue.svg",
      title: t.p1t,
      subtitle: t.p1s,
    },
    {
      icon: "/donation_section/stack_blue.svg",
      title: t.p2t,
      subtitle: t.p2s,
    },
    {
      icon: "/donation_section/care_blue.svg",
      title: t.p3t,
      subtitle: t.p3s,
    },
  ];

  const donationAmounts = [
    {
      amount: "50$",
      description: t.a1,
    },
    {
      amount: "200$",
      description:
        t.a2,
    },
    {
      amount: "+500$",
      description:
        t.a3,
    },
  ];

  const paymentMethods = useDonationMethods();

  const engagementItems = [
    t.e1,
    t.e2,
    t.e3,
  ];

  if (isMobile) {
  return (
    <section className="flex flex-col w-full items-center justify-center bg-blanc">
      {/* Intro */}
      <div className="flex flex-col items-center gap-6 px-6 py-8 mt-20 text-center">
        <h1 className="font-[beautique-display-bold] text-4xl text-colbat">
          {t.title}
        </h1>
        <p className="font-[beautique-display] text-2xl text-colbat">
          {t.lead}
        </p>
        <p className="font-corps text-licorice">{t.body1}</p>
        <p className="font-corps text-licorice">{t.body2}</p>
        <HashLink smooth to="#comment-donner" className="w-full">
          <Button className="w-full h-auto py-3 rounded-xl bg-colbat text-white font-bold text-lg">
            {t.donateNow}
          </Button>
        </HashLink>
      </div>

      {/* Priorités */}
      <Card className="w-[90%] bg-antiflash rounded-2xl my-6">
        <CardContent className="flex flex-col gap-8 p-6">
          <h2 className="font-[beautique-display] text-2xl text-colbat text-center">
            {t.priority}
          </h2>
          <div className="flex flex-col gap-6">
            {priorityItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img className="w-14 h-14" alt="Icone" src={item.icon} />
                <div>
                  <p className="text-colbat font-semibold text-sm">
                    {item.title}
                  </p>
                  <p className="text-licorice text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Montants */}
      <div className="w-full bg-[url(/donation_section/don_bg.webp)] bg-cover bg-center px-6 py-12">
        <h2 className="text-vanilla font-legendes-bold text-center text-lg mb-8">
          {t.differenceShort}
        </h2>
        <div className="flex flex-col gap-6">
          {donationAmounts.map((donation, index) => (
            <Card
              key={index}
              className="bg-vanilla rounded-2xl p-6 text-center"
            >
              <CardContent className="flex flex-col gap-3 items-center">
                <div className="text-3xl font-bold text-colbat">
                  {donation.amount}
                </div>
                <p className="text-sm text-licorice">{donation.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Formulaire & moyens de don */}
      <div id="comment-donner" className="flex flex-col gap-8 w-full bg-antiflash px-6 py-12 scroll-mt-20">

        <div className="flex flex-col gap-6">
         <h3 className="text-colbat font-[beautique-display-bold] text-3xl text-center">
            {t.how}
          </h3>

          <div className="p-6 bg-white rounded-2xl shadow-md">
            <DonationAmountPicker amount={amount} onChange={setAmount} />
          </div>

          <div className="flex flex-col gap-6">
            {paymentMethods.map((method) => (
              <Card
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex items-center justify-center p-6 rounded-2xl text-center cursor-pointer transition
                  ${
                    selectedMethod === method.id
                      ? "bg-colbat text-white"
                      : "bg-white text-colbat hover:bg-colbat hover:text-white"
                  }
                `}
              >
                <CardContent className="p-0">
                  <h4 className="text-xl font-[beautique-display]">
                    {method.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contenu dynamique */}
          <div className="mt-6 flex justify-center">
            <DonationMethodDetails method={selectedMethod} amount={amount} />
          </div>
        </div>
        </div>

      {/* Engagement */}
      <div className="w-full bg-antiflash flex flex-col">
        <div className="h-[200px] flex items-center justify-center bg-[url(/donation_section/don_bg_2.webp)] bg-cover bg-center">
          <h2 className="text-blanc text-2xl font-[beautique-display] text-center">
            {t.transparency}
          </h2>
        </div>
        <div className="bg-colbat py-4">
          <h3 className="text-vanilla text-center font-legendes-bold text-base">
            {t.commitment}
          </h3>
        </div>
        <div className="flex flex-col gap-6 px-6 py-10">
          {engagementItems.map((item, index) => (
            <p
              key={index}
              className="text-center text-colbat font-bold text-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-8 px-6 py-12">
        <p className="text-center text-licorice font-[beautique-display] text-2xl">
          {t.ctaMobile}
        </p>
        <HashLink smooth to="#comment-donner" className="w-full">
        <Button className="flex items-center gap-4 px-6 py-6 w-full rounded-xl bg-antiflash hover:-translate-y-1 transition">
          <img
            className="w-8 h-8"
            alt="don button"
            src="/nav_icons/nav_don_icon.svg"
          />
          <span className="text-colbat font-bold text-base text-center flex-1">
            {t.donate}
          </span>
        </Button>
        </HashLink>
      </div>
    </section>
  );
};


  return (
    <section className="flex flex-col w-full items-start justify-center bg-blanc">
      <div className="flex h-[1150px] items-center justify-center gap-[70px] px-32 py-48 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-between flex-1 h-full">
          <div className="flex flex-col items-center gap-[70px] flex-1 w-full">
            <h1 className="w-full font-[beautique-display-bold] text-5xl text-colbat">
              {t.title}
            </h1>

            <div className="flex flex-col items-start justify-center gap-[30px] w-full">
              <p className="w-full font-[beautique-display] text-colbat text-4xl">
                {t.lead}
              </p>
              <p className="w-full font-corps text-licorice text-[length:var(--corps-font-size)] leading-[var(--corps-line-height)]">
                {t.body1}
              </p>
              <p className="w-full font-corps text-licorice text-[length:var(--corps-font-size)] leading-[var(--corps-line-height)]">
                {t.body2}
              </p>
              <HashLink smooth to="#comment-donner">
                <Button className="h-auto px-8 py-3 rounded-xl bg-colbat text-white font-bold text-lg hover:underline hover:-translate-y-1 transition-all duration-300">
                  {t.donateNow}
                </Button>
              </HashLink>
            </div>
          </div>

          <div className="flex items-center gap-10 w-full">
            <img
              className="w-24 h-[101px]"
              alt="Icon don"
              src="/nav_icons/nav_don_icon.svg"
            />

            <div className="flex flex-col items-start justify-center gap-[30px] flex-1">
              <p className="w-full font-[beautique-display] text-colbat text-4xl">
                {t.spark}
              </p>
            </div>
          </div>
        </div>

        <Card className="flex flex-col items-center justify-center gap-10 px-14 py-24 bg-antiflash rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-col items-center gap-[70px] p-0 w-full">
            <h2 className="w-full font-[beautique-display] text-colbat text-4xl text-center">
              {t.priority}
            </h2>

            <div className="flex flex-col items-center gap-10 w-full">
              {priorityItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-10 w-full"
                >
                  <img className="w-20 h-20" alt="Icone" src={item.icon} />

                  <div className="flex-1 [font-family:'Libertinus_Sans',Helvetica] font-normal text-licorice text-lg tracking-[0] leading-[18px]">
                    <span className="font-[number:var(--legendes-bold-font-weight)] text-[#0a4ba5] font-legendes-bold [font-style:var(--legendes-bold-font-style)] tracking-[var(--legendes-bold-letter-spacing)] leading-[var(--legendes-bold-line-height)] text-[length:var(--legendes-bold-font-size)]">
                      {item.title}
                      <br />
                    </span>
                    <span className="[font-family:'Mona_Sans',Helvetica] text-[#160a00] text-[17.5px] leading-7">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-start gap-[30px] p-20 px-32 w-full [background:url(/donation_section/don_bg.webp)_50%_50%_/_cover]">
        <h2 className="w-full font-legendes-bold text-vanilla text-center text-xl">
          {t.difference}
        </h2>

        <div className="flex flex-col items-start gap-[70px] w-full">
          {/* Wrapper interne pour limiter la largeur max */}
          <div className="flex items-stretch gap-[30px] w-full max-w-[1600px] mx-auto">
            {donationAmounts.map((donation, index) => (
              <Card
                key={index}
                className="flex flex-col items-center justify-center gap-10 p-14 flex-1 bg-vanilla rounded-[20px] overflow-hidden"
              >
                <CardContent className="flex flex-col items-center gap-[30px] p-0 w-full h-full justify-center">
                  <div className="w-full font-[beautique-display] text-5xl font-bold text-colbat text-center">
                    {donation.amount}
                  </div>
                  <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-center tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
                    {donation.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div id="comment-donner" className="flex min-h-[780px] w-full bg-antiflash scroll-mt-24">
        <div className="flex w-full max-w-[1600px] mx-auto">
          {/* Col gauche = contenu */}
          <div className="w-1/2 flex flex-col items-center justify-center gap-5 p-12">
            <div className="w-full max-w-[560px] p-6 sm:p-8 bg-white rounded-2xl shadow-md">
              <DonationAmountPicker amount={amount} onChange={setAmount} />
            </div>
            <DonationMethodDetails method={selectedMethod} amount={amount} />
          </div>

          {/* Col droite = boutons */}
          <div className="w-1/2 flex flex-col justify-center gap-8 p-[100px] px-24">
            <h3 className="w-full text-colbat font-[beautique-display-bold] text-5xl text-center">
              {t.how}
            </h3>

            <div className="flex flex-col gap-5">
              {paymentMethods.map((method) => (
                <Card
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-[30px] w-full flex flex-col items-center gap-11 rounded-[20px] text-licorice cursor-pointer transition
                    ${
                      selectedMethod === method.id
                        ? "bg-colbat text-white"
                        : "bg-white text-colbat hover:bg-colbat hover:text-white"
                    }
                  `}
                >
                  <CardContent className="p-0 w-full">
                    <h4 className="w-full font-[beautique-display] text-4xl text-center">
                      {method.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full bg-blanc">
        <div className="flex flex-col w-full bg-antiflash">
          <div className="flex flex-col h-[361px] items-center justify-center gap-2.5 p-[100px] w-full [background:url(/donation_section/don_bg_2.webp)_50%_50%_/_cover]">
            <h2 className="w-full font-[beautique-display] text-blanc text-center text-5xl">
              {t.transparency}
            </h2>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex h-[81px] items-center justify-center gap-2.5 px-0 py-[30px] w-full bg-colbat">
              <h3 className="flex-1 font-legendes-bold text-vanilla text-center text-lg">
                {t.commitment}
              </h3>
            </div>

            <div className="flex items-start gap-10 px-24 py-20 w-full max-w-[1600px] mx-auto">
              {engagementItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center flex-1"
                >
                  <p className="w-full font-corps font-bold text-colbat text-lg text-center">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-20 px-28 py-20 w-full">
          <p className="w-full font-sous-titres font-[number:var(--sous-titres-font-weight)] text-licorice text-[length:var(--sous-titres-font-size)] text-center tracking-[var(--sous-titres-letter-spacing)] leading-[var(--sous-titres-line-height)] [font-style:var(--sous-titres-font-style)]">
            <span className="font-[beautique-display] text-colbat text-4xl">
              {t.ctaLine1}
            </span>
            <span className="font-[beautique-display] text-licorice text-4xl">
              {t.ctaLine2}
            </span>
          </p>

          <HashLink smooth to="#comment-donner" className="w-full">
          <Button className="group max-w-[1500px] mx-auto relative flex items-center gap-5 px-5 py-2.5 w-full bg-antiflash rounded-[10px] shadow-[0px_1px_2px_#00000040] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] h-auto border-0 overflow-hidden hover:-translate-y-1 transition ease-in-out duration-300">
            {/* Container image avec transition */}
            <div className="relative w-14 h-14">
              {/* Image par défaut */}
              <img
                className="absolute inset-0 w-14 h-14 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                alt="don button"
                src="/nav_icons/nav_don_icon.svg"
              />
              {/* Image au hover */}
              <img
                className="absolute inset-0 w-14 h-14 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                alt="don button hover"
                src="/nav_icons/nav_don_icon_2.svg"
              />
            </div>

            {/* Texte */}
            <span className="flex-1 font-corps font-extrabold text-colbat text-lg text-center transition-all duration-300 group-hover:underline">
              {t.donate}
            </span>
          </Button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
