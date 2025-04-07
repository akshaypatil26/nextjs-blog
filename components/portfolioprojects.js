import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
export default function Portfolioprojects() {
    return (
      <>
        <h1 className="headingMd">Selected Projects</h1>
        {/* <hr></hr> */}
        <p className="my-3">
          {" "}
          {/* <img src={ require('../public/projects/testone.jpg') } /> */}
          Project 1:{" "}
          <a target="_blank" href="/projects/case-studies/mobile-ticketing.pdf">
            Mobile Ticketing App for Movie Theatre [PDF]
            <Image
              priority
              src="/projects/Mobile ticketing app thumbnail.png"
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
          Project 2:{" "}
          <a target="_blank" href="/projects/case-studies/digital-menu.pdf">
            {/* <a target='_blank' href="https://docs.google.com/presentation/d/1nB9jlYDm6LmH4Xsc_iD4oBFIh5rPa4G31hjWDkptNg8/edit?usp=sharing"> */}
            Digital Menu for Takeout Restaurant [PDF]
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
          <a target="_blank" href="/projects/case-studies/job-search-tool.pdf">
            Job Portal for First-gen Immigrants [PDF]
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

        <p className="my-3">
          Project 4:{" "}
          <a target="_blank" href="/projects/case-studies/store-locator.pdf">
            Store Locator Redesign [PDF]
            <Image
              priority
              src="/projects/store-locator-thumbnail-1.png"
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
          Project 5:{" "}
          <a target="_blank" href="/projects/case-studies/platerate-user-profile.pdf">
            User Profile for Food Rating App [PDF]
            <Image
              priority
              src="/projects/user-profile-thumbnail.png"
              // className={utilStyles.borderCircle}
              height={300}
              width={500}
              alt=""
            />
          </a>
        </p>
        <br></br>
        <hr></hr>
        <br></br>
        <a href="https://www.behance.net/patilakshay/projects" target="_blank">
          View all projects on Behance.net
        </a>
      </>
    );
}