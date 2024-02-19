export default function Sociallinks() {
  return (
    <>
      <section className="my-10 justify-center">
        {/* {[
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
        ))} */}
        {/* for email */}

        <div className="flex justify-evenly">
          <a
            target="_blank"
            key="email"
            href="mailto:asp.ahoy@gmail.com"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="email"
              width="36px"
              src="images/social/email.png"
              alt="email Icon"
            ></img>
          </a>
          {/* for behance */}
          <a
            target="_blank"
            key="behance"
            href="https://www.behance.net/patilakshay"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="behance"
              width="36px"
              src="images/social/behance.svg"
              alt="Behance Icon"
            ></img>
          </a>

          {/* for linkedin */}
          <a
            target="_blank"
            key="linkedin"
            href="https://www.linkedin.com/in/akshaysanjaypatil/"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="behance"
              width="36px"
              src="images/social/linkedin.png"
              alt="linkedin Icon"
            ></img>
          </a>

          {/* for github */}
          <a
            target="_blank"
            key="github"
            href="https://github.com/akshaypatil26"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="github"
              width="36px"
              src="images/social/github.svg"
              alt="github Icon"
            ></img>
          </a>

          {/* for instagram */}
          <a
            target="_blank"
            key="instagram"
            href="https://www.instagram.com/foodjunkieguy/"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="instagram"
              width="36px"
              src="images/social/instagram.png"
              alt="instagram Icon"
            ></img>
          </a>

          {/* for twitter */}
          <a
            target="_blank"
            key="twitter"
            href="https://twitter.com/foodjunkieguy"
            className="mx-1 enlarge-on-hover"
          >
            <img
              title="twitter"
              width="36px"
              src="images/social/twitter.png"
              alt="twitter Icon"
            ></img>
          </a>
        </div>
      </section>
    </>
  );
}
