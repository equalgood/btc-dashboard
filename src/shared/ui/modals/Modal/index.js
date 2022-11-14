import React from "react";
import styles from "./index.module.css";

export function Modal(props) {
  return (
    <React.Fragment>
      <div className={styles.modal}>{props.children}</div>
      <div onClick={props.onClick} className={styles.overlay}></div>
    </React.Fragment>
  );
}
