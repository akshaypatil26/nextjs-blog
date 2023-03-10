import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Intropage from "../components/intropage";
import Navbar from "../components/navbar";

export default function home() {
  return (
    <>
      <Navbar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Intropage />
        {/* <section className={utilStyles.headingMd}>
        <p>UX Designer, Full Stack developer</p>
        <p>
          I'm <b>Akshay</b>. I am a UX designer and Front-end engineer.
          <br />
          I'm currently taking Google UX Design Professional Certificate Course
          from Coursera and diving deep into React JS.{" "}
        </p>
      </section>

      <section className="sociallinks">
        <a href="/">Github</a>
        <a href="/">Linkedin</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </section> */}
      </Layout>
    </>
  );
}
