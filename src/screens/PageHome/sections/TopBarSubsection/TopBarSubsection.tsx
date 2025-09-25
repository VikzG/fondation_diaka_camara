import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react"; // icônes burger + croix

export const TopBarSubsection = (): JSX.Element => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: "LA FONDATION", to: "/" },
    { label: "GALA 2025", to: "/gala" },
    { label: "CERCLE DES ALLIANCES", to: "/cercle" },
    { label: "NOTRE ÉQUIPE", to: "/equipe" },
    { label: "LA PRÉSIDENTE", to: "/fondatrice" },
  ];

  const socialIcons = [
    {
      defaultImage: "/nav_icons/nav_contact_icon.svg",
      hoverImage: "/nav_icons/nav_contact_icon_2.svg",
      to: "/#contact",
      hash: true,
    },
    {
      defaultImage: "/nav_icons/nav_don_icon.svg",
      hoverImage: "/nav_icons/nav_don_icon_2.svg",
      to: "/don",
      hash: false,
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // === VERSION MOBILE ===
  if (isMobile) {
    return (
      <header className="w-full fixed top-0 left-0 z-50">
        {/* Barre logo + burger toujours visible */}
        <nav className="flex items-center justify-between px-6 py-4 bg-vanilla shadow-md relative z-50">
          {/* Logo à gauche */}
          <HashLink to="#" smooth>
            <img
              className="h-[40px] cursor-pointer"
              alt="Logo Gala"
              src="/logo_gala_nav.svg"
            />
          </HashLink>

          {/* Bouton burger animé */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-licorice focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={menuOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </nav>

        {/* Panneau menu mobile animé */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                className="absolute top-0 right-0 w-full h-full bg-vanilla shadow-lg flex flex-col justify-start px-6 pt-24 gap-12"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 70, damping: 20 }}
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                  e.stopPropagation()
                }
              >
                <div className="flex w-full items-start justify-between">
                  {/* Icônes à gauche */}
                  <div className="flex flex-col gap-6 px-[13px] py-[30px] bg-[#ffffff80] rounded-[100px] backdrop-blur-[7.5px]">
                    {socialIcons.map((icon, index) =>
                      icon.hash ? (
                        <HashLink
                          key={index}
                          smooth
                          to={icon.to}
                          onClick={() => setMenuOpen(false)}
                          className="relative w-[52px] h-[55px] cursor-pointer group"
                        >
                          <div
                            className="absolute inset-0 bg-contain bg-no-repeat transition-opacity duration-300 group-hover:opacity-0"
                            style={{
                              backgroundImage: `url(${icon.defaultImage})`,
                            }}
                          />
                          <div
                            className="absolute inset-0 bg-contain bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundImage: `url(${icon.hoverImage})`,
                            }}
                          />
                        </HashLink>
                      ) : (
                        <Link
                          key={index}
                          to={icon.to}
                          onClick={() => setMenuOpen(false)}
                          className="relative w-[52px] h-[55px] cursor-pointer group"
                        >
                          <div
                            className="absolute inset-0 bg-contain bg-no-repeat transition-opacity duration-300 group-hover:opacity-0"
                            style={{
                              backgroundImage: `url(${icon.defaultImage})`,
                            }}
                          />
                          <div
                            className="absolute inset-0 bg-contain bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              backgroundImage: `url(${icon.hoverImage})`,
                            }}
                          />
                        </Link>
                      )
                    )}
                  </div>

                  {/* Liste des sections à droite */}
                  <ul className="flex flex-col gap-4 text-end w-2/3 font-legendes-bold">
                    {navigationItems.map((item, index) => {
                      const isActive = location.pathname === item.to;
                      return (
                        <li key={index}>
                          <Link
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            className={`block text-lg px-4 py-2 rounded-full transition-all duration-300 ${
                              isActive
                                ? "bg-colbat text-white font-bold shadow-md"
                                : "text-licorice hover:bg-gray-100"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }

  // === VERSION DESKTOP (inchangée) ===
  return (
    <header className="flex flex-col w-full relative z-50">
      <nav className="items-center justify-between px-20 py-5 w-full bg-vanilla flex fixed self-stretch shadow-[0px_1px_5px_#00000040]">
        {/* Logo cliquable */}
        <HashLink to="#" smooth>
          <img
            className="relative cursor-pointer"
            alt="Logo Gala"
            src="/logo_gala_nav.svg"
          />
        </HashLink>

        <NavigationMenu className="items-center justify-end flex relative self-stretch">
          <NavigationMenuList className="flex items-center justify-end gap-8">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.to;
              return (
                <NavigationMenuItem
                  key={index}
                  className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.to}
                      className={`w-fit [font-family:'Libertinus_Sans',Helvetica] text-base whitespace-nowrap relative cursor-pointer transition-all duration-300 ease-in-out
                        ${isActive ? "font-bold " : "font-normal"} 
                        hover:-translate-y-1 hover:font-medium`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Icônes sociales desktop */}
      <div className="inline-flex flex-col items-start justify-center gap-5 px-[13px] py-[30px] fixed top-40 right-10 z-50 bg-[#ffffff80] rounded-[100px] backdrop-blur-[7.5px]">
        {socialIcons.map((icon, index) =>
          icon.hash ? (
            <HashLink
              key={index}
              smooth
              to={icon.to}
              className="relative w-[52px] h-[55px] cursor-pointer group transform transition-transform duration-300 ease-out hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat transition-opacity duration-300 group-hover:opacity-0"
                style={{ backgroundImage: `url(${icon.defaultImage})` }}
              />
              <div
                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${icon.hoverImage})` }}
              />
            </HashLink>
          ) : (
            <Link
              key={index}
              to={icon.to}
              className="relative w-[52px] h-[55px] cursor-pointer group transform transition-transform duration-300 ease-out hover:scale-105"
            >
              <div
                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat transition-opacity duration-300 group-hover:opacity-0"
                style={{ backgroundImage: `url(${icon.defaultImage})` }}
              />
              <div
                className="absolute inset-0 bg-[length:100%_100%] bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${icon.hoverImage})` }}
              />
            </Link>
          )
        )}
      </div>
    </header>
  );
};
