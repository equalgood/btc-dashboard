import React from "react";
import styles from "./index.module.css";

export function Button(props) {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={styles.button}
    >
      {props.children}
    </button>
  );
}
