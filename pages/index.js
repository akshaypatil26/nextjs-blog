import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm <b>Akshay Patil</b>. I am UX designer and Front-end engineer.<br />
          I'm currently taking Google UX Design Professional Certificate Course
          from Coursera and diving deep into React JS.{" "}
        </p>
        <p>
          (This is a sample website I am trying to build with {" "}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <p>
        <Link href="/posts/first-post">First post {">"}</Link>
      </p>
    </Layout>
  );
}
