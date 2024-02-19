import Link from "next/link";
export default function Actionlinks() {
  return (
    <>
      <section className="my-7">
        {/* {[
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
        ))} */}
        <section className="">
          <div className="my-2 flex justify-center">
            <Link href="/uxportfolio">
              <button className="rounded-button action-button">
                UX Portfolio
              </button>
            </Link>
          </div>
          <div className="my-2 flex justify-center">
            <Link
              target="_blank"
              href="/projects/resume/akshay-patil-resume-product-designer.pdf"
            >
              <button className="rounded-button secondary-button">
                View Resume
              </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}
