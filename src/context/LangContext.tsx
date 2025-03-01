import { loadTranslations } from "@/i18n/translation";
import { useRouter } from "next/router";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface LangContextType {
  lang: string;
  setLang: (lang: string) => void;
  data: any;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  data: loadTranslations("en"),
});

export const useLangContext = ():    LangContextType => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLangContext must be used within a LangProvider");
  }
  return context;
};

export const LangProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  const [lang, setLang] = useState<string>("en");
  useEffect(() => {
    if (router.locale) {
      setLang(router.locale);
    } else {
      const localLang = localStorage.getItem("lang");
      if (localLang) {
        setLang(localLang);
      } else {
        setLang("en");
      }
    }
  }, []);

  const setLangHandle = (lang: string) => {
    setLang(lang);
    localStorage.setItem("lang", lang);
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: (lang) => setLangHandle(lang),
        data: loadTranslations(lang),
      }}
    >
      {children}
    </LangContext.Provider>
  );
};
