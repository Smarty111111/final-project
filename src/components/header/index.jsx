import { Link } from "react-router-dom";
import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.link}>
          Home page
        </Link>
        <Link to="/chat" className={styles.link}>
          Chat
        </Link>
        <Link to="/test" className={styles.link}>
          Test API
        </Link>
      </nav>
    </div>
  );
};

export default Header;
