import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Socials() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className={`${utilStyles.headingMd}`}>UX Projects</h1>
      <hr></hr>
      <p className="my-3">
        {" "}
        {/* <img src={ require('../public/projects/testone.jpg') } /> */}
        Project 1:{" "}
        <a target='_blank' href="https://docs.google.com/presentation/d/1s1mKeRNtsbJiCWikgs-I6yXGylX2RYeIFDfSibW3rjA/edit?usp=sharing">
          Mobile Ticketing App for Movie Theatre
          <Image
            priority
            src="/projects/Mobile ticketing app thumbnail.png"
            // className={utilStyles.borderCircle}
            height={300}
            width={500}
            alt=""
            hover={true}
          />
        </a>
      </p>
      <br></br>
      <hr></hr>

      <p className="my-3">
        Project 2:{" "}
        <a target='_blank' href="https://docs.google.com/presentation/d/1nB9jlYDm6LmH4Xsc_iD4oBFIh5rPa4G31hjWDkptNg8/edit?usp=sharing">
          Digital Menu for Takeout Restaurant
          <Image
            priority
            src="/projects/digital menu thumbnail.png"
            // className={utilStyles.borderCircle}
            height={300}
            width={500}
            alt=""
          />
        </a>
      </p>
      <br></br>
      <hr></hr>

      <p className="my-3">
        Project 3:{" "}
        <a target='_blank'  href="https://docs.google.com/presentation/d/1jun99PQj6IBtmOxEVXezb8-NoQkLnj5Of5DU094z-Gw/edit?usp=sharing">
          Job Portal for First-gen Immigrants
          <Image
            priority
            src="/projects/job search tool thumbnail.png"
            // className={utilStyles.borderCircle}
            height={300}
            width={500}
            alt=""
          />
        </a>
      </p>
      <br></br>
      <hr></hr>
    </Layout>
  );
}
