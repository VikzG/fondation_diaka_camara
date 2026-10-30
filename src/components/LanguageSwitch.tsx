import { useLanguage, type Lang } from "../lib/i18n";

const LANGS: Lang[] = ["fr", "en"];

export const LanguageSwitch = ({ className = "" }: { className?: string }): JSX.Element => {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-licorice/30 p-0.5 [font-family:'Libertinus_Sans',Helvetica] text-sm ${className}`}
      role="group"
      aria-label="Langue / Language"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-0.5 rounded-full uppercase transition-colors duration-300 ${
            lang === code ? "bg-licorice text-vanilla font-bold" : "text-licorice hover:bg-licorice/10"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
};
