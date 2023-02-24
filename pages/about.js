import Head from "next/head";
import Contact from "../components/contact";
import Aboutcomponent from "../components/aboutcomponent";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Aboutcomponent />
      <Contact />
    </Layout>
  );
}
