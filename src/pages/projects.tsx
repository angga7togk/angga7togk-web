import StaticArticle from "@/components/article/StaticArticle";
import Layout from "@/components/layouts/Layout";
import { useLangContext } from "@/context/LangContext";
import React from "react";

const projects = () => {
  const lang = useLangContext();
  return (
    <Layout title="Projects - Angga7Togk">
      <div className="">
        <StaticArticle
          title={lang.data.pages.projects.minecraft_7togk.title}
          contents={lang.data.pages.projects.minecraft_7togk.contents}
        />

        <StaticArticle
          title={lang.data.pages.projects.mydly.title}
          contents={lang.data.pages.projects.mydly.contents}
        />

        <StaticArticle
          title={lang.data.pages.projects.animaku.title}
          contents={lang.data.pages.projects.animaku.contents}
        />

        <StaticArticle
          title={lang.data.pages.projects.bbm.title}
          contents={lang.data.pages.projects.bbm.contents}
        />

        <StaticArticle
          title={lang.data.pages.projects.ptysw.title}
          contents={lang.data.pages.projects.ptysw.contents}
        />
      </div>
    </Layout>
  );
};

export default projects;
