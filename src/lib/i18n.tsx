import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

const STORAGE_KEY = "lang";

// Le choix est mémorisé dans le navigateur ; le français reste la langue par défaut
const readStoredLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
};

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void }>({
  lang: "fr",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // navigation privée : le choix ne sera simplement pas mémorisé
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Renvoie la version du contenu correspondant à la langue active :
// chaque section déclare ses textes sous la forme { fr: {...}, en: {...} }
export const useTranslation = <T,>(content: Record<Lang, T>): T => content[useLanguage().lang];
