import React from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { MainLogo } from "../../../../shared/assets/logos/MainLogo";

export const MainHeader = function () {
  const dollarBalance = useSelector((state) => state.reducer.dollarBalance);
  const bitcoinBalance = useSelector((state) => state.reducer.bitcoinBalance);
  const exchangeRate = useSelector((state) => state.reducer.exchangeRate);
  return (
    <header className={styles.header}>
      <MainLogo />
      <p>1 bitcoin = {exchangeRate} $</p>
      <div>
        <p>{dollarBalance} $</p>
        <p>{bitcoinBalance} bitcoins</p>
      </div>
    </header>
  );
};
