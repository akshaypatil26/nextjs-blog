import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Socials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={`${utilStyles.headingMd}`}>UX Portfolio</h1>
      <p className="my-3">
        {" "}
        Project 1:{" "}
        <a href="https://docs.google.com/presentation/d/1s1mKeRNtsbJiCWikgs-I6yXGylX2RYeIFDfSibW3rjA/edit?usp=sharing">
          Mobile Ticketing App for Movie Theatre
        </a>
      </p>
      <hr></hr>
      <p className="my-3">
        {" "}
        Project 2:{" "}
        <a href="https://docs.google.com/presentation/d/1nB9jlYDm6LmH4Xsc_iD4oBFIh5rPa4G31hjWDkptNg8/edit?usp=sharing">
          Digital Menu for Takeout Restaurant
        </a>
      </p>
      <hr></hr>
      <p className="my-3">
        {" "}
        Project 3:{" "}
        <a href="https://docs.google.com/presentation/d/1jun99PQj6IBtmOxEVXezb8-NoQkLnj5Of5DU094z-Gw/edit?usp=sharing">
          Job Portal for First-gen Immigrants
        </a>
      </p>
      <br></br>
    </Layout>
  );
}
