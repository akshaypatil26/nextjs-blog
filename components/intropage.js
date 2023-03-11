import styles from "./intropage.module.css";

export default function Intropage() {
  return (
    <>
      <section>
        {/* <div>
          <p>UX Designer, Full Stack developer</p>
        </div> */}
        <p>
          My name is Akshay Patil, and I am a UX designer and front-end
          engineer. I graduated from the New Jersey Institute of Technology with
          an M.S. in Computer Science. Since then, I have been working as a
          full-stack developer, using multiple web and mobile technologies.
          <br />
          <br />
          Currently, I am enrolled in Google's UX Design Professional
          Certificate Course on Coursera, while also expanding my knowledge in
          React JS. <br />
          <br />
          My passion lies in creating unique and accessible digital experiences
          for end users.
        </p>
        <br></br>
      </section>
      <section className="sociallinks">
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
      </section>
      <br></br> <br></br>
    </>
  );
}
