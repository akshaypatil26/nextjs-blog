import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.navbar}>
          {/* <h3>Navbar</h3> */}
          <ul className={styles.navleft}>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <ul className={styles.navright}>
            <li>
              <a href="/logs">Logs</a>
            </li>
            {/* <li>
              <a href="/socials">Socials</a>
            </li> */}
            {/* <button className={styles.hidden}>
              <p>Hamburger menu</p>
            </button> */}
          </ul>
        </div>
      </div>
      {/* <hr className={styles.partition}></hr> */}
    </>
  );
}
