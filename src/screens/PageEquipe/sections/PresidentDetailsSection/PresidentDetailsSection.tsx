import { Card, CardContent } from "../../../../components/ui/card";

export const PresidentDetailsSection = (): JSX.Element => {
  const presidentData = {
    name: "Monsieur Boubacar Sidiqui Barry",
    role: "PRÉSIDENT DU CONSEIL D'ADMINISTRATION",
    description:
      "Homme de conviction et de vision, Boubacar Sidiqui Barry accompagne la gouvernance de la Fondation, garantissant la rigueur, la transparence et la mise en œuvre des projets structurants.",
    image:
      "bg-[url(/page_equipe_section/conseil_img/boubacar_sidiqui_barry.png)]",
  };

  const teamMembers = [
    {
      name: "Ibrahima Camara",
      role: "ENTREPRENEUR ENGAGÉ POUR LE DÉVELOPPEMENT LOCAL",
      image: "bg-[url(/page_equipe_section/conseil_img/ibrahima_camara.png)]",
    },
    {
      name: "Komba Bijou Camara",
      role: "MILITANTE ASSOCIATIVE ET PROMOTRICE DE L'AUTONOMISATION DES FEMMES",
      image:
        "bg-[url(/page_equipe_section/conseil_img/komba_bijou_camara.png)]",
    },
    {
      name: "Anna Barry",
      role: "SPÉCIALISTE EN GESTION ET FINANCES, ACTRICE DU CHANGEMENT SOCIAL",
      image: "bg-[url(/page_equipe_section/conseil_img/anna_barry.png)]",
    },
    {
      name: "Abdoulaye Touré",
      role: "DÉFENSEUR DES DROITS DES ENFANTS ET ACTEUR DU MONDE ÉDUCATIF",
      image: "bg-[url(/page_equipe_section/conseil_img/abdoulaye_toure.png)]",
    },
    {
      name: "Dr Aboudoulaye Bah",
      role: "MÉDECIN HUMANITAIRE, ENGAGÉ DANS LA SANTÉ PUBLIQUE",
      image: "bg-[url(/page_equipe_section/conseil_img/aboudoulaye_bah.png)]",
    },
    {
      name: "Chaikou Bah",
      role: "ACTEUR DE LA SOCIÉTÉ CIVILE, MOBILISÉ POUR LA JEUNESSE GUINÉENNE",
      image: "bg-[url(/page_equipe_section/conseil_img/chaikou_bah.png)]",
    },
  ];

  return (
    <section className="w-full gap-20 p-28 bg-blanc flex flex-col items-center justify-center max-w-[1600px] mx-auto">
      <Card className="flex flex-col items-center justify-center gap-[30px] px-[200px] py-0 w-full border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-center justify-center gap-[50px] w-full p-0">
          <div
            className={`${presidentData.image} bg-cover bg-[50%_50%] w-[150px] h-[200px] rounded-[10px]`}
          />

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="w-full font-[beautique-display] text-licorice text-3xl text-center">
              {presidentData.name}
            </h2>

            <p className="w-full font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-colbat text-[length:var(--legendes-categories-font-size)] text-center tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] [font-style:var(--legendes-categories-font-style)]">
              {presidentData.role}
            </p>
          </div>

          <p className="w-full font-corps font-[number:var(--corps-font-weight)] text-licorice text-[length:var(--corps-font-size)] text-center tracking-[var(--corps-letter-spacing)] leading-[var(--corps-line-height)] [font-style:var(--corps-font-style)]">
            {presidentData.description}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-[70px] w-full">
        {teamMembers.slice(0, 3).map((member, index) => (
          <Card
            key={`team-member-${index}`}
            className="flex flex-col items-center gap-[30px] border-none shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-[30px] w-full p-0">
              <div
                className={`
    ${member.image} 
    ${index < 2 ? "bg-[length:175%]" : "bg-cover"} 
    bg-[50%_50%] w-[150px] h-[200px] rounded-[10px]
  `}
              />

              <div className="flex flex-col items-start gap-5 w-full">
                <h3 className="w-full font-[beautique-display] text-licorice text-[32px] text-center">
                  {member.name}
                </h3>

                <p className="w-full font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-colbat text-[length:var(--legendes-categories-font-size)] text-center tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] [font-style:var(--legendes-categories-font-style)]">
                  {member.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-[70px] w-full">
        {teamMembers.slice(3, 6).map((member, index) => (
          <Card
            key={`team-member-${index + 3}`}
            className="flex flex-col items-center gap-[30px] border-none shadow-none bg-transparent"
          >
            <CardContent className="flex flex-col items-center gap-[30px] w-full p-0">
              <div
                className={`${member.image} bg-cover bg-[50%_50%] w-[150px] h-[200px] rounded-[10px]`}
              />

              <div className="flex flex-col items-start gap-5 w-full">
                <h3 className="w-full font-[beautique-display] text-[32px] text-licorice text-center">
                  {member.name}
                </h3>

                <p className="w-full font-legendes-categories font-[number:var(--legendes-categories-font-weight)] text-colbat text-[length:var(--legendes-categories-font-size)] text-center tracking-[var(--legendes-categories-letter-spacing)] leading-[var(--legendes-categories-line-height)] [font-style:var(--legendes-categories-font-style)]">
                  {member.role}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
