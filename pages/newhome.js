import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>UX Designer, Full Stack developer</p>
        <p>
          I'm <b>Akshay</b>. I am a UX designer and Front-end engineer.
          <br />
          I'm currently taking Google UX Design Professional Certificate Course
          from Coursera and diving deep into React JS.{" "}
        </p>
      </section>

      <section>
        <p>Social links</p>
      </section>
    </Layout>
  );
}
