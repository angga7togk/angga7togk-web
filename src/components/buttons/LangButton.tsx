import { useLangContext } from "@/context/LangContext";
import React from "react";

const LangButton = () => {
  const lang = useLangContext();

  return (
    <button
      onClick={() => lang.setLang(lang.lang === "en" ? "id" : "en")}
      className="bg-black/20 dark:bg-white/20  rounded-full size-12 text-sm font-semibold text-center cursor-pointer  transition-all duration-300 hover:bg-black/25  hover:dark:bg-white/25"
    >
      {lang.lang.toUpperCase()}
    </button>
  );
};

export default LangButton;
