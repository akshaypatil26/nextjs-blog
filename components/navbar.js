import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navcontainer}>
        <div className={styles.navbar}>
          {/* <h3>Navbar</h3> */}
          <li>
            <a href="/">Log</a>
          </li>
          <li>
            <a href="/newhome">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          {/* <button className={styles.hidden}>
              <p>Hamburger menu</p>
            </button> */}
        </div>
      </div>
      {/* <hr className={styles.partition}></hr> */}
    </>
  );
}