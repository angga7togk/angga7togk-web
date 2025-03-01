import StaticArticle from "@/components/article/StaticArticle";
import Layout from "@/components/layouts/Layout";
import { useLangContext } from "@/context/LangContext";
import React from "react";

const about = () => {
  const lang = useLangContext();
  return (
    <Layout title="About - Angga7Togk">
      <div className="">
        <StaticArticle
          title={lang.data.pages.about.me.title}
          contents={lang.data.pages.about.me.contents}
        />

        <StaticArticle
          title={lang.data.pages.about.how_i_know_coding.title}
          contents={lang.data.pages.about.how_i_know_coding.contents}
        />

        <StaticArticle
          title={lang.data.pages.about.personal_life.title}
          contents={lang.data.pages.about.personal_life.contents}
        />

        <StaticArticle
          title={lang.data.pages.about.hobbies.title}
          contents={lang.data.pages.about.hobbies.contents}
        />

        <StaticArticle
          title={lang.data.pages.about.youtube.title}
          contents={lang.data.pages.about.youtube.contents}
        />
      </div>
    </Layout>
  );
};

export default about;
