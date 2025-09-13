import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const TopBarSubsection = (): JSX.Element => {
  const location = useLocation();

  const navigationItems = [
    { label: "LA FONDATION", to: "/" },
    { label: "GALA 2025", to: "/gala" },
    { label: "CERCLE DES ALLIANCES", to: "/cercle" },
    { label: "ACTUALITÉS", to: "/actualites" },
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

      {/* Icônes sociales */}
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
