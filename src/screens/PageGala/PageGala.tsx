import { BilleterieSubsection } from "./sections/BilleterieSubsection/BilleterieSubsection";
import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection";
import { EncheresSubsection } from "./sections/EncheresSubsection/EncheresSubsection";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { GalaSubsection } from "./sections/GalaSubsection/GalaSubsection";
import { HeroSubsection } from "./sections/HeroSubsection/HeroSubsection";
import { IntervenantsIntroSubsection } from "./sections/IntervenantsIntroSubsection.tsx/IntervenantsIntroSubsection";
import { IntervenantsSubsection } from "./sections/IntervenantsSubsection/IntervenantsSubsection";
import { MaitressesCeremonieSubsection } from "./sections/MaitressesCeremonieSubsection/MaitressesCeremonieSubsection";
import { ObjectifsSubsection } from "./sections/ObjectifsSubsection/ObjectifsSubsection";
import { PartenaireSubsection } from "./sections/PartenaireSubsection/PartenaireSubsection";
import { TopBarSubsection } from "../PageHome/sections/TopBarSubsection/TopBarSubsection";

export const PageGala = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-blanc w-full flex flex-col">
        <TopBarSubsection />
        <HeroSubsection />
        <GalaSubsection />
        <ObjectifsSubsection />
        <FrameSubsection />
        <MaitressesCeremonieSubsection />
        <IntervenantsSubsection />
        <IntervenantsIntroSubsection />
        <BilleterieSubsection />
        <PartenaireSubsection />
        <EncheresSubsection />
        <ContactSubsection />
        <FooterSubsection />
      </div>
    </div>
  );
};
