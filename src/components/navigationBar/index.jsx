import { Link } from "react-router-dom";

import styles from "./navigationBar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.navigationContainer}>
      <Link className={styles.navigationLink} to={"songs"}>songs</Link>
      <Link className={styles.navigationLink} to={"songs2"}>songs2</Link>
    </div>
  );
};

export default NavigationBar;
