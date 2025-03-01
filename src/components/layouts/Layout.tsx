import { useLangContext } from "@/context/LangContext";
import Head from "next/head";
import React, { PropsWithChildren } from "react";
import Navbar from "../nav/Navbar";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout = ({
  title,
  description,
  keywords,
  children,
}: PropsWithChildren<Props>) => {
  const lang = useLangContext();
  return (
    <div className="text-black dark:text-white dark:bg-black">
      <Head>
        <title>{title || "Angga7Togk - Software Developer"}</title>
        <link rel="shortcut icon" href="/img/icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content={description || ""} />
        
        <link
          rel="preconnect"  
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <main className="w-full md:ps-[30%] min-h-screen">
        <div className="md:px-24 pl-6 pr-5 py-8 md:py-16">
          {children}

          <footer className="mt-16">
            <hr className="border-gray-300" />
            <p className="text-sm opacity-80 mt-4">
              © {new Date().getFullYear()} Angga7Togk
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Layout;
