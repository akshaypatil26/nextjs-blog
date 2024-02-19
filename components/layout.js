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
          content="Hi, I am Akshay, UX Product Designer. Know more about me and my work here."
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
            <h1 className="myfont">{name}</h1>

            <h4 className="myfont2">Product Designer, Front End Developer</h4>
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
