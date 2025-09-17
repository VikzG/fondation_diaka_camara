import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import DonateButton from "../../../../components/DonateButton";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Counter } from "../../../../components/Counter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

const categories = [
  { id: "education", label: "ÉDUCATION" },
  { id: "culture", label: "CULTURE" },
  { id: "protection", label: "PROTECTION" },
  { id: "solidarite", label: "SOLIDARITÉ" },
  { id: "partenariats", label: "PARTENARIATS" },
];

const educationStats = {
  image: "/impact_section/education-image.png",
  icon: "/impact_section/book.svg",
  left: [
    { number: "45", title: "Jeunes filles", description: "scolarisées à 100% via\n#Scolarisons100filles" },
    { number: "2", title: "Bibliothèques", description: "rénovées pour 1200 élèves\nbénéficiaires" },
  ],
  right: [
    { number: "100", title: "Kits Scolaires", description: "complets distribués aux\nenfants des écoles" },
    { number: "45", title: "Bénéficiaires", description: "d'une allocation mensuelle\npour la cantine" },
  ],
};

const cultureStats = {
  image: "/impact_section/culture-image.png",
  icon: "/impact_section/culture.svg",
  left: { number: "72", title: "Du Livre", description: "Partenariat culturel" },
  right: [
    { number: "26", title: "Écoles", description: "engagées dans le concours\n“Plumes fines”" },
    { number: "300", title: "Enfants", description: "participants aux\nateliers de lecture" },
  ],
};

const protectionStats = {
  image: "/impact_section/protection-image.png",
  icon: "/impact_section/hands.svg",
  left: { number: "450", title: "Personnes", description: "atteintes par la campagne\n#BrisonsLeSilence" },
  right: [
    { number: "1", title: "Intervention", description: "d’urgence médico-\npsychologique et judiciaire" },
    { number: "10", title: "Écoles", description: "ayant assisté aux\nateliers de prévention" },
  ],
};

const solidariteStats = {
  image: "/impact_section/solidarite-image.png",
  icon: "/impact_section/solidarite.svg",
  left: { number: "7", title: "Édition de\nl’Orphan’s Day", description: "Dons éducatifs et ludiques\nà des orphelins" },
  right: [
    { number: "4", title: "Enfants", description: "Ayant été opérés avec\nsuccès" },
    { number: "1", title: "Documentaire", description: "réalisé sur l’autisme (une\npremière en Guinée" },
  ],
};

const partenariatsStats = {
  image: "/impact_section/partenariats-image.png",
  icon: "/impact_section/partenaire.svg",
  left: { number: "10", title: "Partenaires\nmajeurs" },
  right: [{ number: "7", title: "Mentors\nbénévoles" }],
};

const statsMap: Record<string, any> = {
  education: educationStats,
  culture: cultureStats,
  protection: protectionStats,
  solidarite: solidariteStats,
  partenariats: partenariatsStats,
};

export const ImpactSubsection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("education");
  const [fade, setFade] = useState(false);

  const handleTabChange = (value: string) => {
    setFade(true);
    setTimeout(() => {
      setActiveTab(value);
      setFade(false);
    }, 200); // Durée du fade en ms
  };

  return (
    <section className="w-full bg-colbat py-24">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center gap-32 px-10">
        <header className="items-start justify-between self-stretch w-full flex-[0_0_auto] flex">
          <div className="inline-flex items-start gap-[70px] flex-[0_0_auto]">
            <img
              className="self-stretch"
              alt="Logo submark"
              src="/impact_section/logo-submark.svg"
            />
            <div className="inline-flex flex-col items-start gap-5 flex-[0_0_auto]">
              <Button className="bg-antiflash text-colbat [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg px-8 py-2 rounded-lg shadow-[0px_1px_2px_#00000040] h-auto hover:underline hover:-translate-y-1 transition-all duration-300 ease-in-out">
                Télécharger le rapport d&apos;activité 2024
              </Button>
              <p className="self-stretch text-antiflash text-md [font-family:'Mona_Sans',Helvetica]">
                Parce que chaque action compte, voici un
                <br />
                extrait de ce que nous avons réalisé en 2024 :
              </p>
            </div>
          </div>
          <h2 className="flex-1 text-antiflash text-right font-titres text-5xl">
            NOTRE IMPACT <br />
            <span className="font-[beautique-display] font-normal">en</span> CHIFFRES
          </h2>
        </header>

        <div className="flex-col items-start self-stretch w-full flex-[0_0_auto] flex">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="items-end justify-center gap-2.5 w-full flex bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`
                    px-5 py-2 flex items-center justify-center gap-2.5 flex-1 grow
                    rounded-[20px_20px_0px_0px] bg-pumpkin text-vanilla font-legendes-categories text-lg
                    data-[state=active]:bg-vanilla data-[state=active]:text-pumpkin data-[state=active]:font-legendes-bold data-[state=active]:py-3
                    hover:bg-vanilla hover:text-pumpkin hover:font-legendes-bold hover:py-3 transition-all duration-300
                  `}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* TabsContent simplifiés : on garde le fade seulement sur l'image */}
            {categories.map((category) => {
              const stats = statsMap[category.id];
              return (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <Card className="h-[500px] w-full bg-vanilla rounded-[0px_0px_20px_20px] flex border-0 shadow-none relative">
                    <CardContent className="flex items-center justify-between w-full h-full p-8 gap-8">
                      {/* Image gauche avec fade */}
                      <div className="w-[30%] relative h-full flex items-center justify-center">
                        <img
                          src={stats.image}
                          alt={`${category.label} image`}
                          className={`w-full h-full object-cover rounded-xl transition-opacity duration-200 ${fade ? "opacity-0" : "opacity-100"}`}
                        />
                        <DonateButton />
                      </div>

                      {/* Contenu droit */}
                      <div className="w-[70%] flex items-center justify-around">
                        <div className="flex flex-col gap-10">
                          {Array.isArray(stats.left) ? stats.left.map((stat: { number: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
                            <div key={i} className="flex flex-col items-center text-pumpkin">
                              <div className="text-[50px] font-bold font-[beautique-display]">
                                <Counter value={parseInt(stat.number, 10)} duration={1000} />
                              </div>
                              <div className="text-[32px] font-[beautique-display]">{stat.title}</div>
                              <p className="text-center font-corps whitespace-pre-line">{stat.description}</p>
                            </div>
                          )) : (
                            <div className="flex flex-col items-center text-pumpkin">
                              <div className="text-[50px] font-bold font-[beautique-display]">
                                <Counter value={parseInt(stats.left.number, 10)} duration={1000} />
                              </div>
                              <div className="text-[32px] font-[beautique-display]">{stats.left.title}</div>
                              <p className="text-center font-corps whitespace-pre-line">{stats.left.description}</p>
                            </div>
                          )}
                        </div>

                        <img src={stats.icon} alt={`${category.label} icon`} />

                        <div className="flex flex-col gap-10">
                          {stats.right.map((stat: { number: string; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
                            <div key={i} className="flex flex-col items-center text-pumpkin">
                              <div className="text-[50px] font-bold font-[beautique-display]">
                                <Counter value={parseInt(stat.number, 10)} duration={1000} />
                              </div>
                              <div className="text-[32px] font-[beautique-display]">{stat.title}</div>
                              {stat.description && <p className="text-center font-corps whitespace-pre-line">{stat.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
