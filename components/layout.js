import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Akshay S. Patil";
export const siteTitle = "Akshay S. Patil";
// const subheadingcn = "utilStyles.headingMd";

export default function Layout({ children, home }) {
  return (
    // <div className={styles.container}>
    <div className="mycontainer">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className="intro-heading">{name}</h1>

            <h4 className="intro-subheading">
              UX Designer, Front End Engineer
            </h4>
          </>
        ) : (
          <></>
          // Small Profile photo for non home pages
          // <>
          //   <Link href="/">
          //     <Image
          //       priority
          //       src="/images/profile.jpg"
          //       className={utilStyles.borderCircle}
          //       height={108}
          //       width={108}
          //       alt=""
          //     />
          //   </Link>
          //   <h2 className={utilStyles.headingLg}>
          //     <Link href="/" className={utilStyles.colorInherit}>
          //       {name}
          //     </Link>
          //   </h2>
          // </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
