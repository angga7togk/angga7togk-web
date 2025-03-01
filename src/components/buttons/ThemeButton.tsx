import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const ThemeButton = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Deteksi preferensi tema sistem
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    let theme = localStorage.getItem("theme");

    if (theme === null) {
      theme = systemPrefersDark ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setDark(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-black/20 dark:bg-white/20 rounded-full size-12 text-sm font-semibold text-center cursor-pointer transition-all duration-300 hover:bg-black/25 hover:dark:bg-white/25 flex items-center justify-center"
    >
      {dark ? (
        <FaMoon size={18} />
      ) : (
        <MdSunny size={18} />
      )}
    </button>
  );
};

export default ThemeButton;
