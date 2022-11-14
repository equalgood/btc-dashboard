import React from "react";
import styles from "./index.module.css";

export function SingleAction(props) {
  const action = props.action;
  const date = new Date(action.date).toLocaleDateString("en-GB", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  const description = props.action.description;
  return (
    <li className={styles["recent-actions__list-item"]}>
      <p>{date}</p>
      <p className={styles["recent-actions__list-item_description"]}>
        {description}
      </p>
    </li>
  );
}
