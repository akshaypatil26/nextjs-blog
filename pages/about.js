import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3>About this website:</h3>
        <p>
          This website/blog is a log of all of the things I do to better myself
          at coding (and UX design). <br />
          Every week, I'll update my progress with a as a text log over here.
          This basic example of a blog is from the Next.js documentation. I plan
          to make changes to this overtime as and when I learn new ways of
          maintaining a blog.
          <br />
          <br />
        </p>

        <h3>How did it start:</h3>
        <p>
          On January 1st, 2023, I decided to get better and fluent in coding.
          For that to happen the only way I could think of was to be regular
          with writing code. About 3 months before that, I had started to learn
          German on Duolingo app. There is a feature on the app which tracks
          your daily streak. Unintentionally, to maintain the streak, I started
          to learn a little bit of German daily. Even if it was for 5 mins, I
          got into a habit where I cannot pass a day without learning German on
          the app. I decided to do the same with programming.
        </p>
      </section>
    </Layout>
  );
}
