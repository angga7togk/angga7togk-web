import StaticArticle from "@/components/article/StaticArticle";
import Layout from "@/components/layouts/Layout";
import { useLangContext } from "@/context/LangContext";
import React from "react";

const contact = () => {
  const lang = useLangContext();
  return (
    <Layout title="Contact - Angga7Togk">
      <StaticArticle
        title={lang.data.pages.contact.me.title}
        contents={lang.data.pages.contact.me.contents}
      />
      <StaticArticle
        title={lang.data.pages.contact.alternative.title}
        contents={lang.data.pages.contact.alternative.contents}
      />
    </Layout>
  );
};

export default contact;
