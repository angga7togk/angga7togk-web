import en from "./lang/en";
import id from "./lang/id";

export const loadTranslations = (lang: string) => {
  switch (lang) {
    case "en":
      return en;
    case "id":
      return id;
    default:
      return en;
  }
};
