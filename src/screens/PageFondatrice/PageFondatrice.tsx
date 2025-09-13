import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection.tsx";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection.tsx";
import { TopBarSubsection } from "../PageHome/sections/TopBarSubsection/TopBarSubsection.tsx";
import { HeroSection } from "./sections/HeroSection/HeroSection.tsx";
import { FamilySection } from "./sections/FamilySection/FamilySection.tsx";
import { AboutMeSection } from "./sections/AboutMeSection/AboutMeSection.tsx";
import { FoundationSection } from "./sections/FoundationSection/FoundationSection.tsx";
import { AdvocacySection } from "./sections/AdvocacySection/AdvocacySection.tsx";
import { MissionSection } from "./sections/MissionSection/MissionSection.tsx";

export const PageFondatrice = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-screen">
      <div className="bg-blanc w-full flex flex-col">
        <TopBarSubsection />
        <HeroSection />
        <FamilySection />
        <AboutMeSection />
        <FoundationSection />
        <AdvocacySection />
        <MissionSection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
