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
    <div className="mycontainer">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="displaypicture">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </div>

      <Intropage />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section className={utilStyles.headingMd}>
        <p>
          My name is Akshay Patil, and I am a UX designer and front-end
          engineer. I graduated from the New Jersey Institute of Technology with
          an M.S. in Computer Science. Since then, I have been working as a
          full-stack developer, using multiple web and mobile technologies.
          Currently, I am enrolled in Google's UX Design Professional
          Certificate Course on Coursera, while also expanding my knowledge in
          React JS. My passion lies in creating unique and accessible digital
          experiences for end users.
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
    </div>
  );
}
