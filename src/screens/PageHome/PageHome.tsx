import { ActionsSlidesSubsection } from "./sections/ActionsSlidesSubsection/ActionsSlidesSubsection";
import { CausesSubsection } from "./sections/CausesSubsection/CausesSubsection";
import { ContactSubsection } from "./sections/ContactSubsection/ContactSubsection";
import { EquipeSubsection } from "./sections/EquipeSubsection/EquipeSubsection";
import { FondationSubsection } from "./sections/FondationSubsection/FondationSubsection";
import { FooterSubsection } from "./sections/FooterSubsection/FooterSubsection";
import { GalaSubsection } from "./sections/GalaSubsection/GalaSubsection";
import { HeroSliderSubsection } from "./sections/HeroSliderSubsection/HeroSliderSubsection";
import { ImpactSubsection } from "./sections/ImpactSubsection/ImpactSubsection";
import { PreActusSubsection } from "./sections/PreActusSubsection/PreActusSubsection";
import { SliderCercleSubsection } from "./sections/SliderCercleSubsection";
import { TopBarSubsection } from "./sections/TopBarSubsection/TopBarSubsection";
import { ValeursSubsection } from "./sections/ValeursSubsection/ValeursSubsection";

export const PageHome = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-screen">
      <div className="bg-blanc w-full flex flex-col">
        <TopBarSubsection />
        <HeroSliderSubsection />
        <PreActusSubsection />
        <FondationSubsection />
        <ValeursSubsection />
        <CausesSubsection />
        <ActionsSlidesSubsection />
        <ImpactSubsection />
        <GalaSubsection />
        <SliderCercleSubsection />
        <EquipeSubsection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
