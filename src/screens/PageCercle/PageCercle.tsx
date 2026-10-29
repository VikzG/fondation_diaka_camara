import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection/IntroductionSection";
import { WhyJoinSection } from "./sections/WhyJoinSection/WhyJoinSection";

export const PageCercle = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-screen">
      <div className="bg-blanc w-full flex flex-col">        <HeroSection />
        <IntroductionSection />
        <WhyJoinSection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
