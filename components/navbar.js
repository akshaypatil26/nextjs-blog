import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/logs">Logs</a>
        </li>
        {/* <li>
          <a href="/socials">Socials</a>
        </li> */}
      </div>
    </>
  );
}
