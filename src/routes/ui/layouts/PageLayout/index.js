import React from "react";
import styles from "./index.module.css";

export function PageLayout(props) {
  return <main className={styles.main}>{props.children}</main>;
}
