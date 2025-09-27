import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { useLocation } from "react-router-dom";

export const ContactSubsection = (): JSX.Element => {
  const location = useLocation();
  const isCerclePage = location.pathname === "/cercle";

  const formFields = [
    { id: "fullName", label: "Nom complet*", type: "input", required: true, className: "flex-1" },
    { id: "organization", label: "Organisation", type: "input", required: false, className: "flex-1" },
  ];

  const singleFields = [
    { id: "email", label: "Adresse Email*", type: "input", required: true },
    { id: "phone", label: "N° de téléphone", type: "input", required: false },
    { id: "message", label: "Votre message*", type: "textarea", required: true },
  ];

  // === DESKTOP RETURN ===
  const desktopReturn = (
    <section id="contact" className="hidden lg:flex w-full items-start gap-[100px] p-[100px] relative bg-vanilla">
      <div className={`inline-flex flex-col gap-[100px] relative self-stretch w-1/2 ${isCerclePage ? "items-start text-left" : "items-center text-center"}`}>
        <h2 className="relative w-fit font-[beautique-display-bold] text-5xl text-licorice">
          {isCerclePage ? "REJOINDRE LE CERCLE" : "CONTACTEZ-NOUS"}
        </h2>
        {isCerclePage ? (
          <p className="font-corps text-licorice text-lg text-justify leading-relaxed max-w-md">
            Le Cercle des Alliances est un lieu de partage, de collaboration et de solidarité. Ensemble, nous pouvons créer des passerelles entre nos causes et bâtir un avenir plus équitable pour les enfants et les femmes d’Afrique.
          </p>
        ) : (
          <img className="relative w-60 h-[247px]" alt="contact" src="/contact_section/logo_contact.svg" />
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-10 relative w-1/2">
        <form className="flex-col justify-center gap-[15px] flex-[0_0_auto] flex items-center relative self-stretch w-full">
          <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            {formFields.map((field) => (
              <div key={field.id} className={`relative ${field.className}`}>
                <Label htmlFor={field.id} className="sr-only">{field.label}</Label>
                <Input
                  id={field.id}
                  placeholder={field.label}
                  className="h-[38px] gap-2.5 px-5 py-[5px] bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-[17.5px] placeholder:leading-7"
                />
              </div>
            ))}
          </div>

          {singleFields.map((field) => (
            <div key={field.id} className="relative self-stretch w-full">
              <Label htmlFor={field.id} className="sr-only">{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.id}
                  placeholder={field.label}
                  className="h-[173px] gap-2.5 px-5 py-[5px] bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 resize-none placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-[17.5px] placeholder:leading-7"
                />
              ) : (
                <Input
                  id={field.id}
                  placeholder={field.label}
                  className="h-[38px] gap-2.5 px-5 py-[5px] bg-[#ffffffcc] rounded-lg backdrop-blur-[5px] border-0 placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-[17.5px] placeholder:leading-7"
                />
              )}
            </div>
          ))}

          <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full rounded-[10px]">
            <Button
              type="submit"
              className="h-auto flex items-center justify-center gap-2.5 flex-1 grow bg-pumpkin rounded-[10px] hover:underline hover:-translate-y-1 transition-all duration-300 border-0 shadow-[0px_1px_2px_#00000040]"
            >
              <span className="relative w-fit font-extrabold text-vanilla text-lg text-center leading-[30px] whitespace-nowrap">
                Envoyer
              </span>
            </Button>
          </div>

          {/* Pièce jointe facultative desktop */}
          <div className="flex items-center justify-center gap-2.5 px-5 py-[5px] self-stretch w-full bg-[#ffffff33] rounded-lg border border-solid border-[#160a00] backdrop-blur-[7.5px]">
            <div className="relative w-fit font-corps text-licorice text-[length:var(--corps-font-size)] text-center leading-[var(--corps-line-height)]">
              <span className="text-[#160a00] font-corps">
                * <strong>Pièce jointe facultative</strong>
              </span>
              <span className="text-[#160a00] font-corps">
                &nbsp;&nbsp;(Proposition ou Plaquette)
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  // === MOBILE RETURN ===
  const mobileReturn = (
    <section id="contact" className="flex bg-vanilla flex-col items-center gap-6 px-6 py-10 lg:hidden">
      {/* Partie gauche en haut */}
      <div className="flex flex-col items-center gap-4 w-full">
        <h2 className="font-[beautique-display-bold] text-3xl text-licorice text-center">
          {isCerclePage ? "REJOINDRE LE CERCLE" : "CONTACTEZ-NOUS"}
        </h2>
        {isCerclePage ? (
          <p className="font-corps text-licorice text-base text-center leading-relaxed max-w-md">
            Le Cercle des Alliances est un lieu de partage, de collaboration et de solidarité. Ensemble, nous pouvons créer des passerelles entre nos causes et bâtir un avenir plus équitable pour les enfants et les femmes d’Afrique.
          </p>
        ) : (
          <img className="w-40 h-40" alt="contact" src="/contact_section/logo_contact.svg" />
        )}
      </div>

      {/* Partie droite en bas */}
      <div className="flex flex-col items-center w-full gap-4">
        <form className="flex flex-col gap-4 w-full">
          {/* Champs côte à côte inversés */}
          <div className="flex gap-4 w-full">
            <div className="flex-1">
              <Label htmlFor="organization" className="sr-only">Organisation</Label>
              <Input
                id="organization"
                placeholder="Organisation"
                className="h-10 px-4 bg-[#ffffffcc] rounded-lg backdrop-blur-sm border-0 placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-sm"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="fullName" className="sr-only">Nom complet*</Label>
              <Input
                id="fullName"
                placeholder="Nom complet*"
                className="h-10 px-4 bg-[#ffffffcc] rounded-lg backdrop-blur-sm border-0 placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-sm"
              />
            </div>
          </div>

          {/* Champs restants */}
          {singleFields.map((field) => (
            <div key={field.id}>
              <Label htmlFor={field.id} className="sr-only">{field.label}</Label>
              {field.type === "textarea" ? (
                <Textarea
                  id={field.id}
                  placeholder={field.label}
                  className="h-36 px-4 py-2 bg-[#ffffffcc] rounded-lg backdrop-blur-sm border-0 resize-none placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-sm"
                />
              ) : (
                <Input
                  id={field.id}
                  placeholder={field.label}
                  className="h-10 px-4 bg-[#ffffffcc] rounded-lg backdrop-blur-sm border-0 placeholder:[font-family:'Mona_Sans',Helvetica] placeholder:font-medium placeholder:text-licorice placeholder:text-sm"
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="mt-2 w-full py-3 bg-pumpkin rounded-lg text-vanilla font-extrabold text-lg hover:underline hover:-translate-y-1 transition-all shadow-sm"
          >
            Envoyer
          </Button>

          {/* Pièce jointe facultative mobile */}
          <div className="flex items-center justify-center gap-2.5 px-4 py-2 w-full bg-[#ffffff33] rounded-lg border border-solid border-[#160a00] backdrop-blur-sm">
            <div className="relative w-fit font-corps text-licorice text-sm text-center leading-5">
              <span className="text-[#160a00] font-corps font-bold">
                * <strong>Pièce jointe facultative</strong>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

  return (
    <>
      {desktopReturn}
      {mobileReturn}
    </>
  );
};
