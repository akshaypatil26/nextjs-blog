import utilStyles from "../styles/utils.module.css";

export default function Intropage() {
  return (
    <>
      <section className={utilStyles.headingMd}>
        <div className="introheader">
          <h2>Akshay S. Patil</h2>
          <p>UX Designer, Full Stack developer</p>
        </div>
        <p>
          I'm <b>Akshay</b>. I am a UX designer and Front-end engineer.
          <br />
          I'm currently taking Google UX Design Professional Certificate Course
          from Coursera and diving deep into React JS.{" "}
        </p>
      </section>

      <section className="sociallinks">
        <a href="/">Github</a>
        <a href="/">Linkedin</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </section>
    </>
  );
}
