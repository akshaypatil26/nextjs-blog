import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Portfolioprojects from "../components/portfolioprojects";

export default function Socials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

    <Portfolioprojects/>
    </Layout>
  );
}
