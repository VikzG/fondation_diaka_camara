import { TopBarSubsection } from "../PageHome/sections/TopBarSubsection/TopBarSubsection.tsx";
import { PresidentDetailsSection } from "./sections/PresidentDetailsSection/PresidentDetailsSection.tsx";
import { PresidentSection } from "./sections/PresidentSection/PresidentSection.tsx";
import { TeamIntroductionSection } from "./sections/TeamIntroductionSection/TeamIntroductionSection.tsx";
import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection.tsx";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection.tsx";

export const PageEquipe = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      <div className="bg-blanc w-full flex flex-col">
        <TopBarSubsection />
        <TeamIntroductionSection />
        <PresidentSection />
        <PresidentDetailsSection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
