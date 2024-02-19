export default function Actionlinks() {
  return (
    <>
      <section className="actionlinks my-7">
        {[
          [
            "View Resume",
            "projects/resume/akshay-patil-resume-product-designer.pdf",
            "_blank",
          ],
          ["View UX Portfolio", "/uxportfolio", ""],
        //   ["Behance Profile", "https://www.behance.net/patilakshay", "_blank"],
          // ["Request Resume", "mailto:akshaypatil26@duck.com", "_blank"],
        ].map(([title, url, targey]) => (
          <a target={targey} key={title} href={url} className="mx-1">
            {title} <br />
          </a>
        ))}
      </section>
    </>
  );
}
