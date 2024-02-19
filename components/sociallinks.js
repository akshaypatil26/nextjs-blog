export default function Sociallinks() {
  return (
    <>
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
    </>
  );
}
