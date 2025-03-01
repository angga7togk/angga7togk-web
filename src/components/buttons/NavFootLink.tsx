import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  href: string;
  Icon: IconType;
  title: string;
};

const NavFootLink: React.FC<Props> = ({ href, Icon, title }) => {
  return (
    <Link
      href={href}
      title={title}
      target="_blank"
      className="bg-black/20 dark:bg-white/20 size-12 flex items-center justify-center rounded-full hover:bg-black/25 hover:dark:bg-white/25 transition-all duration-300"
    >
      <Icon size={16} />
    </Link>
  );
};

export default NavFootLink;
