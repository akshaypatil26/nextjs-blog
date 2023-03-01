import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function logs({ allPostsData }) {
  return (
    <Layout>
      {/* <div className="mycontainer"> */}
      <section>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Logs</h2>
          <p>
            Below is a list of logs that I maintain about my current work in UX
            design and full stack development. These logs are longer than a
            tweet but briefer than a blog post. The purpose of these logs is to
            maintain consistency in building and learning new things, while
            keeping a record of my progress to look back on later.
          </p>
          <br />
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
        {/* </div> */}
      </section>
    </Layout>
  );
}
