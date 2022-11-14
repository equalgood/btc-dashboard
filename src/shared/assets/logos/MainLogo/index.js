import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { BitcoinIcon } from "../../icons/BitcoinIcon";

export function MainLogo() {
  return (
    <Link to={"/wallet"} className={styles.logo}>
      <BitcoinIcon className={styles["logo__icon"]} />
      <p>bitcoin frenzy</p>
    </Link>
  );
}
