import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Intropage from "../components/intropage";

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

        <Intropage />
      </div>
    </Layout>
  );
}
