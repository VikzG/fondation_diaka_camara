import { Button } from "../../components/ui/button";
import { HashLink } from "react-router-hash-link";

export const PageNotFound = (): JSX.Element => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/page_presidente_section/banner_presidente.jpg')`,
      }}
    >
      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center gap-16 px-6">
        {/* Logo */}
        <img
          src="/logo_gala.svg"
          alt="Logo Fondation"
          className="w-52 h-auto mb-4"
        />

        {/* Code erreur avec flèches décoratives */}
        <div className="flex items-center justify-center gap-14">
          <img
            src="/orange_arrows/arrow_orange_left.svg"
            alt="Décor gauche"
            className="w-7 opacity-80 hidden md:block"
          />
          <h1 className="font-[beautique-display-bold] text-9xl text-vanilla tracking-wide">
            404
          </h1>
          <img
            src="/orange_arrows/arrow_orange_right.svg"
            alt="Décor droit"
            className="w-7 opacity-80 hidden md:block"
          />
        </div>

        {/* Message */}
        <p className="font-corps text-lg text-[#faf2d7] leading-7">
          Oups ! La page que vous cherchez semble avoir disparu ou n’existe pas.
        </p>

        {/* Bouton retour */}
        <HashLink smooth to="/" className="w-full max-w-sm">
          <Button className="group relative flex items-center justify-between w-full rounded-[500px] shadow-[0px_1px_2px_#00000040] h-auto py-2 overflow-hidden transition-all duration-500 bg-vanilla hover:bg-pumpkin">
            <span className="flex-1 text-center [font-family:'Mona_Sans',Helvetica] font-extrabold text-lg tracking-[0] leading-[35px] text-pumpkin group-hover:text-vanilla">
              Retourner à l'accueil
            </span>

            <div className="border-2 border-vanilla group-hover:border-transparent absolute right-[calc(100%-50px)] group-hover:right-[10px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-500 ease-in-out bg-pumpkin ">
              <img
                className="w-7 h-7"
                alt="Icon"
                src="/gala_arrow_button.svg"
              />
            </div>
          </Button>
        </HashLink>
      </div>
    </section>
  );
};
