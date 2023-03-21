import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        {[
          ["Home", "/"],
          ["Logs", "/logs"],
          // ["UX designs", "/uxdesigns"],
          // ["Experience", "/experience"],
        ].map(([title, url]) => (
          <a
            href={url}
            className="px-3 hover:text-slate-400"
          >
            {title}
          </a>
        ))}
      </nav>

      {/* <div className={styles.navbar}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/logs">Logs</a>
        </li>
       
      </div> */}
    </>
  );
}
