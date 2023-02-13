import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className="mycontainer">
        <div className={styles.navbar}>
          {/* <h3>Navbar</h3> */}

          <li>
            <a href="/newhome">Log</a>
          </li>
          <li>
            <a href="/newhome">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </div>
      </div>
      <hr className={styles.partition}></hr>
    </>
  );
}
