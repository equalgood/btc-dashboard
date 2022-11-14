import React from "react";
import styles from "./index.module.css";
import { NavigationLink } from "../../links/NavigationLink";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavigationLink to="/wallet" title="my wallet" id="wallet" />
      <NavigationLink to="/buy" title="buy bitcoin" id="buy" />
      <NavigationLink to="/sell" title="sell bitcoin" id="sell" />
      <NavigationLink to="/bitcoin" title="bitcoin price" id="bitcoin" />
    </nav>
  );
}
