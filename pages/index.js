import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Intropage from "../components/intropage";
import Intro from "../components/intro";
import Actionlinks from "../components/actionlinks";
import Sociallinks from "../components/sociallinks";
import Portfolioprojects from "../components/portfolioprojects";

const name = "Akshay S. Patil";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <div className="mycontainer">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        {/* <div>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </div> */}
        <Intro />
        <Actionlinks />
        <Sociallinks />
        <hr></hr>

        <section className="my-10">
          <Portfolioprojects />
        </section>
        {/* <Intropage /> */}
      </div>
    </Layout>
  );
}
