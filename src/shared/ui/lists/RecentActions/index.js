import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { SingleAction } from "./SingleAction";

export function RecentActions(props) {
  const actions = useSelector((state) => state.reducer.actions);
  return (
    <aside className={styles.history}>
      <ul className={styles["recent-actions__list"]}>
        {actions.map((action) => (
          <SingleAction key={action.id} action={action} />
        ))}
      </ul>
    </aside>
  );
}
