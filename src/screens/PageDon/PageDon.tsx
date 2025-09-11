
import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection.tsx";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection.tsx";
import { TopBarSubsection } from "../PageHome/sections/TopBarSubsection/TopBarSubsection.tsx";
import { DonationSection } from "./sections/DonationSection/DonationSection.tsx";

export const PageDon = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <div className="bg-blanc w-full flex flex-col">
        <TopBarSubsection />
        <DonationSection />
        <ContactSubsection />
        <FooterSubsection/>
      </div>
    </div>
  );
};
