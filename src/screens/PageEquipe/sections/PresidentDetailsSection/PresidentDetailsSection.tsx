import { Card, CardContent } from "../../../../components/ui/card";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const PresidentDetailsSection = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      name: "Déborah Mutund",
      role: "STRATEGIC DIRECTOR & COMMUNICATION SPECIALIST",
      image: "bg-[url(/page_equipe_section/conseil_img/deborah_mutund.jpg)]",
    },
  ];
  if (isMobile) {
    return (
      <section className="w-full flex flex-col items-center justify-center gap-16 px-6 py-12 bg-blanc">
        {/* Président */}
        <Card className="flex flex-col items-center justify-center gap-6 border-none shadow-none bg-transparent w-full max-w-[500px]">
          <CardContent className="flex flex-col items-center gap-6 w-full p-0">
            <div
              className={`${presidentData.image} bg-cover bg-center w-[150px] h-[200px] rounded-[10px]`}
            />
            <h2 className="font-[beautique-display] text-2xl text-licorice text-center">
              {presidentData.name}
            </h2>
            <p className="font-legendes-categories text-colbat text-sm text-center uppercase">
              {presidentData.role}
            </p>
            <p className="font-corps text-licorice text-base text-center leading-6">
              {presidentData.description}
            </p>
          </CardContent>
        </Card>

        {/* Swiper équipe */}
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="w-full h-[450px] max-w-[500px] custom-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="w-[250px]">
              <Card className="flex flex-col items-center gap-4 border-none bg-white/80 rounded-xl p-6">
                <CardContent className="flex flex-col items-center gap-4 p-0">
                  <div
                    className={`
                    ${member.image} 
                    ${
                      member.name === "Komba Bijou Camara"
                        ? "bg-[length:180%]"
                        : "bg-cover"
                    }
                    bg-center w-[150px] h-[200px] rounded-lg
                  `}
                  />
                  <h3 className="font-[beautique-display] text-xl text-licorice text-center">
                    {member.name}
                  </h3>
                  <p className="font-legendes-categories text-colbat text-sm text-center leading-5">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Styles custom pagination */}
        <style>
          {`
          .custom-swiper .swiper-pagination {
            bottom: 20px !important; /* descendre les points radios */
          }
          .custom-swiper .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px !important; /* espace entre les points */
            background: #d1d5db; /* gris clair */
            opacity: 1;
          }
          .custom-swiper .swiper-pagination-bullet-active {
            background: #0A4BA5; /* bg-colbat */
            transform: scale(1.2); /* effet point plus gros */
          }
        `}
        </style>
      </section>
    );
  }

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
        {teamMembers.slice(3, 7).map((member, index) => (
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
