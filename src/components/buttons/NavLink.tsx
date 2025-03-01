import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";

type Props = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<Props>) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={`${children?.toString()} Angga7Togk`}
      className="flex items-center gap-x-2 text-lg font-serif transition-all duration-300 hover:translate-x-2 scale-105 "
    >
      <div
        className={`bg-black dark:bg-white size-2  transition-all duration-300 ${
          hover ? "rotate-180 scale-120" : "rotate-45"
        }`}
      ></div>
      <span>{children}</span>
    </Link>
  );
};

export default NavLink;
