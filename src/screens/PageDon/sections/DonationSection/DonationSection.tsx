import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DonationSection = (): JSX.Element => {
  const priorityItems = [
    {
      icon: "/donation_section/book_blue.svg",
      title: "SCOLARISER 100 JEUNES FILLES",
      subtitle: "à travers la Bourse Zenab Soumah",
    },
    {
      icon: "/donation_section/stack_blue.svg",
      title: "NOUVELLES BIBLIOTHÈQUES SCOLAIRES",
      subtitle: "dans les quartiers défavorisés de Conakry",
    },
    {
      icon: "/donation_section/care_blue.svg",
      title: "UN FONDS D'URGENCE POUR PROTÉGER",
      subtitle: "les victimes de violences basées sur le genre",
    },
  ];

  const donationAmounts = [
    {
      amount: "50$",
      description: "Vous offrez un kit scolaire complet à une élève.",
    },
    {
      amount: "200$",
      description:
        "Vous assurez une année entière de scolarité et de repas pour une jeune fille.",
    },
    {
      amount: "+500$",
      description:
        "Vous contribuez à l'ouverture d'une bibliothèque et à l'accès à la lecture pour plus de 1 000 enfants.",
    },
  ];

  const paymentMethods = [
    { title: "En ligne" },
    { title: "Par virement" },
    { title: "Par chèque" },
  ];

  const engagementItems = [
    "Un reçu officiel vous sera transmis pour chaque don.",
    "Vous recevrez des rapports réguliers sur l'impact de votre contribution.",
    "Vous aurez accès à des témoignages et histoires de vie des bénéficiaires.",
  ];

  return (
    <section className="flex flex-col w-full items-start justify-center bg-blanc">
      <div className="flex h-[1000px] items-center justify-center gap-[70px] px-32 py-48 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col items-center justify-between flex-1 h-full">
          <div className="flex flex-col items-center gap-[70px] flex-1 w-full">
            <h1 className="w-full font-titres text-5xl text-colbat">
              FAIRE UN DON
            </h1>

            <div className="flex flex-col items-start justify-center gap-[30px] w-full">
              <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
                <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
                  Depuis sa création, la
                </span>
                <span className="font-corps">
                  {" "}
                  <strong>Fondation Diaka Camara</strong>{" "}
                </span>
                <span className="leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] font-[number:var(--corps-font-weight)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
                  agit pour offrir aux enfants et aux jeunes filles les plus
                  vulnérables un droit fondamental :{" "}
                </span>
                <span className="font-[number:var(--corps-font-weight)] leading-[var(--corps-line-height)] font-corps [font-style:var(--corps-font-style)] tracking-[var(--corps-letter-spacing)] text-[length:var(--corps-font-size)]">
                  <strong>
                    Celui d&apos;apprendre et de rêver sans limite.
                  </strong>
                </span>
              </p>

              <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
                Grâce à votre générosité, nous avons déjà scolarisé des dizaines
                de filles, ouvert des bibliothèques et apporté un soutien
                concret à celles qui en avaient le plus besoin.
              </p>
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
                Chaque contribution est une
                <br />
                étincelle d&apos;avenir
              </p>
            </div>
          </div>
        </div>

        <Card className="flex flex-col items-center justify-center gap-10 px-14 py-24 bg-antiflash rounded-[20px] overflow-hidden">
          <CardContent className="flex flex-col items-center gap-[70px] p-0 w-full">
            <h2 className="w-full font-[beautique-display] font-medium italic text-colbat text-4xl text-center">
              En 2025, notre priorité est claire :
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

      <div className="flex flex-col items-start gap-[30px] p-20 px-32 w-full [background:url(/donation_section/don_bg.png)_50%_50%_/_cover]">
        <h2 className="w-full font-legendes-bold text-vanilla text-center text-xl">
          VOTRE DON FAIT LA DIFFÉRENCE : CHAQUE MONTANT COMPTE. CHAQUE GESTE EST
          UN PAS VERS UN AVENIR MEILLEUR.
        </h2>

        <div className="flex flex-col items-start gap-[70px] w-full">
          {/* 👉 important: items-stretch pour uniformiser les hauteurs */}
          <div className="flex items-stretch gap-[30px] w-full">
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

      <div className="flex min-h-[780px] w-full">
        {/* Colonne Formulaire */}
        <div className="w-1/2 flex items-center justify-center bg-antiflash p-[100px] px-32">
          <div className="bg-white/50 backdrop-blur-md rounded-3xl p-12 w-full shadow-2xl lg:min-w-[450px]">
            <h3 className="text-5xl font-[beautique-display] text-gray-800 mb-10 text-center">
              Faîtes un don
            </h3>

            <div className="space-y-8 mb-8 font-mona">
              <div className="flex bg-colbat rounded-full text-2xl font-bold">
                <button className="flex-1 bg-antiflash text-colbat py-5 px-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                  Don mensuel
                </button>
                <button className="flex-1 bg-colbat text-white py-5 px-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
                  Don unique
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-2xl">
                <button className="bg-antiflash hover:bg-blue-100 text-colbat font-bold py-3 px-3 rounded-2xl transition-colors">
                  1000$
                </button>
                <button className="bg-antiflash hover:bg-blue-100 text-colbat font-bold py-3 px-3 rounded-2xl transition-colors">
                  500$
                </button>
                <button className="bg-antiflash hover:bg-blue-100 text-colbat font-bold py-3 px-3 rounded-2xl transition-colors">
                  100$
                </button>
                <button className="bg-antiflash hover:bg-blue-100 text-colbat font-bold py-3 px-3 rounded-2xl transition-colors">
                  50$
                </button>
              </div>

              <button className="text-2xl w-full bg-antiflash hover:bg-blue-100 text-colbat font-semibold py-3 px-3 rounded-2xl transition-colors">
                Montant personnalisé
              </button>
            </div>

            <button className="text-2xl w-full bg-colbat hover:bg-colbat text-white font-semibold py-3 px-3 rounded-2xl transition-colors mt-6">
              Procéder au paiement
            </button>
          </div>
        </div>

        {/* Colonne Méthodes de paiement */}
        <div className="w-1/2 flex flex-col justify-between p-[100px] px-32 bg-antiflash ">
          <div className="flex flex-col items-start gap-[30px] w-full">
            <h3 className="w-full font-titres font-[number:var(--titres-font-weight)] text-colbat text-[length:var(--titres-font-size)] text-center tracking-[var(--titres-letter-spacing)] leading-[var(--titres-line-height)] [font-style:var(--titres-font-style)]">
              COMMENT DONNER ?
            </h3>
          </div>

          <div className="flex flex-col items-start gap-5 w-full">
            {paymentMethods.map((method, index) => (
              <Card
                key={index}
                className="p-[30px] w-full flex flex-col items-center gap-11 rounded-[20px] overflow-hidden text-licorice hover:text-antiflash bg-white hover:bg-colbat cursor-pointer transition ease-in-out duration-300"
              >
                <CardContent className="p-0 w-full">
                  <h4
                    className="w-full font-[beautique-display] text-4xl text-center tracking-[0.64px] leading-[38px]"
                  >
                    {method.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full bg-blanc">
        <div className="flex flex-col w-full bg-antiflash">
          <div className="flex flex-col h-[361px] items-center justify-center gap-2.5 p-[100px] w-full [background:url(/donation_section/don_bg_2.png)_50%_50%_/_cover]">
            <h2 className="w-full font-[beautique-display] text-blanc text-center text-5xl">
              Nous croyons en la transparence
            </h2>
          </div>

          <div className="flex flex-col items-start w-full">
            <div className="flex h-[81px] items-center justify-center gap-2.5 px-0 py-[30px] w-full bg-colbat">
              <h3 className="flex-1 font-legendes-bold text-vanilla text-center text-lg">
                NOTRE ENGAGEMENT ENVERS VOUS
              </h3>
            </div>

            <div className="flex items-start gap-10 px-24 py-20 w-full">
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
              Donner, c&apos;est plus qu&apos;un geste. C&apos;est changer une
              vie.
              <br />
            </span>
            <span className="font-[beautique-display] text-licorice text-4xl">
              C&apos;est offrir un sourire, une chance et une dignité retrouvée.
            </span>
          </p>

          <Button className="group relative flex items-center gap-5 px-5 py-2.5 w-full bg-antiflash rounded-[10px] shadow-[0px_1px_2px_#00000040] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] h-auto border-0 overflow-hidden hover:-translate-y-1 transition ease-in-out duration-300">
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
              Faire un don à la Fondation
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
