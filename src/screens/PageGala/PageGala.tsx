import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection";
import { GalaActionsSubsection } from "./sections/GalaActionsSubsection/GalaActionsSubsection";
import { GalaSubsection } from "./sections/GalaSubsection/GalaSubsection";
import { HeroSubsection } from "./sections/HeroSubsection/HeroSubsection";
import { PartenaireSubsection } from "./sections/PartenaireSubsection/PartenaireSubsection";

export const PageGala = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-blanc w-full flex flex-col">
        <HeroSubsection />
        <GalaSubsection />
        <GalaActionsSubsection />
        <PartenaireSubsection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
