export default function Intro() {
  return (
    <>
      <section className="my-7">
        <p className="text-justify">
          Hello! I'm Akshay, a Product/UX Designer with a foundation in
          front-end development. My commitment lies in creating accessible,
          intuitive, and user-centered digital products. I specialize in merging
          design and technical expertise to elevate user experiences.
          <br />
        </p>
      </section>

      {/* <section className="actionlinks my-7">
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
      </section> */}
    </>
  );
}
