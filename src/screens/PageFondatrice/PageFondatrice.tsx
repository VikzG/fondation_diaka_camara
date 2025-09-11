import { ContactSubsection } from "../PageHome/sections/ContactSubsection/ContactSubsection.tsx";
import { FooterSubsection } from "../PageHome/sections/FooterSubsection/FooterSubsection.tsx";
import { TopBarSubsection } from "../PageHome/sections/TopBarSubsection/TopBarSubsection.tsx";

export const PageFondatrice = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-screen">
      <div className="bg-blanc w-full flex flex-col">
                <TopBarSubsection />
                <ContactSubsection />
                <FooterSubsection/>
               <p>La présidente</p>
      </div>
    </div>
  );
};