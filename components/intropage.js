import styles from "./intropage.module.css";

export default function Intropage() {
  return (
    <>
      <section className="my-7">
        {/* <div>
          <p>UX Designer, Full Stack developer</p>
        </div> */}
        <p className="text-justify">
          My name is Akshay, and I am a UX Designer and Front End Engineer. I
          graduated from the New Jersey Institute of Technology with an M.S. in
          Computer Science. Since then, I have been working as a full-stack
          developer, leveraging a range of web and mobile technologies.
          <br />
          <br />I successfully earned{" "}
          <a
            target="_blank"
            href="https://coursera.org/verify/professional-cert/SV5N2C528EFJ"
          >
            Google's UX Design Specialization Certification
          </a>{" "}
          on Coursera, while showcasing my acquired skills and insights in my UX
          portfolio. Concurrently, I've been deepening my expertise in React JS,
          recognizing its pivotal role in crafting dynamic and responsive user
          interfaces. <br />
          <br />
          At the heart of my professional journey is a fervent commitment to
          fashioning unique and inclusive digital experiences for end users.
        </p>
      </section>

      <section className="actionlinks my-7">
        {[
          [
            "View Resume",
            "projects/resume/akshay-patil-design-resume.pdf",
            "_blank",
          ],
          ["View UX Portfolio", "/uxportfolio", ""],
          ["Behance Profile", "https://www.behance.net/patilakshay", "_blank"],
          // ["Request Resume", "mailto:akshaypatil26@duck.com", "_blank"],
        ].map(([title, url, targey]) => (
          <a target={targey} key={title} href={url} className="mx-1">
            {title} <br />
          </a>
        ))}
      </section>
      <section className="sociallinks my-7">
        {[
          ["Email", "mailto:akshaypatil26@duck.com"],
          ["Behance", "https://www.behance.net/patilakshay"],
          ["LinkedIn", "https://www.linkedin.com/in/akshaysanjaypatil/"],
          ["Github", "https://github.com/akshaypatil26"],
          ["Instagram", "https://www.instagram.com/foodjunkieguy/"],
          ["X.com", "https://twitter.com/foodjunkieguy"],
          // ["UX designs", "/uxdesigns"],
          // ["Experience", "/experience"],
        ].map(([title, url]) => (
          <a target="_blank" key={title} href={url} className="mx-1">
            {title} <br />
          </a>
        ))}
      </section>
      {/* 
      <section className="sociallinks my-7">
        <a target="_blank" href="https://github.com/akshaypatil26">
          Github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/akshaysanjaypatil/"
        >
          Linkedin
        </a>
        <a target="_blank" href="https://twitter.com/foodjunkieguy">
          Twitter
        </a>
        <a target="_blank" href="https://www.instagram.com/foodjunkieguy/">
          Instagram
        </a>
        <a href="mailto:akshaypatil26@duck.com">Email</a>
      </section> */}
    </>
  );
}
