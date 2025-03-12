import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import ThemeButton from "../buttons/ThemeButton";
import LangButton from "../buttons/LangButton";
import Link from "next/link";
import { useLangContext } from "@/context/LangContext";
import NavLink from "../buttons/NavLink";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import NavFootLink from "../buttons/NavFootLink";

const Navbar = () => {
  const lang = useLangContext();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setOpen(false), // Close on swipe left
    onSwipedRight: () => setOpen(true), // Open on swipe right

    trackMouse: true, // Enable mouse swipe gestures
  });

  return (
    <nav
      {...handlers}
      className={`fixed top-0 left-0 ${
        !open ? "-translate-x-[97%] rounded-r-2xl" : "translate-x-0"
      } md:translate-0 w-full md:w-[30%] bg-gray-300 dark:bg-zinc-800 h-screen transition-all duration-300 z-50`}
    >
      <div className="w-full h-full relative">
        <hr onClick={toggle} className={`absolute right-0.5 top-1/2 -translate-y-1/2 h-1/4 border border-gray-500 ${open && 'hidden'} md:hidden`}>

        </hr>

        <div className="p-14 pb-6 flex flex-col justify-between h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-between gap-x-3">
              <ThemeButton />
              <img
                src="/img/angga7togk.jpeg"
                alt="Angga7Togk Profile"
                className="size-20 rounded-full"
              />
              <LangButton />
            </div>

            <Link href="/" className="text-2xl font-serif pt-1 pb-0.5">
              Angga7Togk
            </Link>

            <p className="m-0 p-0 text-[12px] font-sans text-gray-500 text-center">
              Building web, mobile, and Minecraft server solutions since
              forever.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            {lang.data.navbar.links.map(
              (link: { name: string; link: string }) => (
                <NavLink key={link.name} href={link.link}>
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          <div className="w-full flex items-center gap-x-2">
            <NavFootLink
              href="https://github.com/angga7togk"
              Icon={FaGithub}
              title="Github Angga7Togk"
            />
            <NavFootLink
              href="https://www.youtube.com/@angga7togk_"
              Icon={FaYoutube}
              title="Youtube Angga7Togk"
            />
            <NavFootLink
              href="https://www.instagram.com/angga7togk/"
              Icon={FaInstagram}
              title="Instagram Angga7Togk"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
