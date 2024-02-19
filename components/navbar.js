import Link from "next/link";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className="mycontainer">
          <Link target="" href="/" className="mr-10">
            Home
          </Link>
          <Link target="" href="/uxportfolio" className="mr-5">
            UX Portfolio
          </Link>
        </div>
      </div>
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
