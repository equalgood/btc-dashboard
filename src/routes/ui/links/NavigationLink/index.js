import React from "react";
import styles from "./index.module.css";
import { Link, useMatch } from "react-router-dom";
import { ChartIcon } from "../../../../shared/assets/icons/ChartIcon";

export function NavigationLink(props) {
  const isSelected = useMatch(props.to) != null;

  return (
    <Link
      to={props.to}
      id={props.id}
      className={`${styles["screen-anchor"]} ${
        isSelected ? styles.active : ""
      }`}
    >
      <ChartIcon className={styles["screen-anchor__icon"]} />
      <p className={styles[props.className]}>{props.title}</p>
    </Link>
  );
}
