import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const DonateButton = () => (
  <div className="absolute inset-0 flex items-end mb-5 justify-center">
    <Link to="/don">
      <Button
        className="group relative h-auto flex items-center gap-14 px-8 py-3 bg-[#ffffffcc] rounded-[10px] shadow-[0px_1px_2px_#00000040] backdrop-blur-[7.5px] hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        {/* Wrapper pour gérer le fade */}
        <div className="relative w-[52px] h-[55px]">
          {/* Image par défaut */}
          <img
            className="absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            alt="Don icon"
            src="/nav_icons/nav_don_icon.svg"
          />
          {/* Image au hover */}
          <img
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            alt="Don icon hover"
            src="/nav_icons/nav_don_icon_2.svg"
          />
        </div>

        <span className="text-colbat font-bold text-lg group-hover:underline decoration-inherit transition-colors duration-300">
          Faire un don
        </span>
      </Button>
    </Link>
  </div>
);

export default DonateButton;
