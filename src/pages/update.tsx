import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/layouts/Layout";
import Markdown from "react-markdown";
import { useLangContext } from "@/context/LangContext";
import StaticArticle from "@/components/article/StaticArticle";
import Article from "@/components/article/Article";

export default function About() {
  const lang = useLangContext();

  return (
    <Layout title="Update - Angga7Togk">
      <div className="">
        {Object.entries(lang.data.pages.updates).map(
          ([key, update]: [string, any]) => (
            <Article
              key={key} 
              title={update?.title}
              content={update?.content}
              href={`/update/${key}`}
              date={new Date(update?.date)}
            />
          )
        )}
      </div>
    </Layout>
  );
}
