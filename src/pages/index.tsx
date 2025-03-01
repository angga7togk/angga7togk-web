import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layouts/Layout";
import Markdown from "react-markdown";
import { useLangContext } from "@/context/LangContext";
import StaticArticle from "@/components/article/StaticArticle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const lang = useLangContext();

  return (
    <Layout>
      <div className="">
        <StaticArticle
          title={lang.data.pages.home.hello.title}
          contents={lang.data.pages.home.hello.contents}
        />

        <StaticArticle
          title={lang.data.pages.home.update.title}
          contents={lang.data.pages.home.update.contents}
        />

        <StaticArticle
          title={lang.data.pages.home.about_site.title}
          contents={lang.data.pages.home.about_site.contents}
        />
      </div>
    </Layout>
  );
}
