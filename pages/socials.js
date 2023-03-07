import Head from "next/head";
import Contact from "../components/contact";
import Aboutcomponent from "../components/aboutcomponent";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Socialcomponent from "../components/socialcomponent";

export default function Socials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Socialcomponent />
      <Aboutcomponent />
      <Contact />
    </Layout>
  );
}
