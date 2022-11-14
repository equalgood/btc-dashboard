import React from "react";
import styles from "./index.module.css";
import { MainHeader } from "./ui/headers/MainHeader";
import { Navbar } from "../routes/ui/navbars/Navbar";
import { WalletModule } from "../routes";
import { RecentActions } from "../shared/ui/lists/RecentActions";

function App() {
  return (
    <div className={styles.app}>
      <MainHeader />
      <Navbar />
      <WalletModule />
      <RecentActions />
    </div>
  );
}

export default App;
