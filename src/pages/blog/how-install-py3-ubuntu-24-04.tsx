import Layout from '@/components/layouts/Layout'
import { useLangContext } from "@/context/LangContext";
import En from "@/blogs/how-install-py3-ubuntu-24-04/En.mdx"
import Id from "@/blogs/how-install-py3-ubuntu-24-04/Id.mdx"

export default function MDXPage() {
  const lang = useLangContext();
  return (
    <Layout>
      {lang.lang === "id" ? <Id /> : <En/>}
    </Layout>);

}
