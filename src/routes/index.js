import React from "react";
import { Route, Routes } from "react-router-dom";
import { Wallet } from "../modules/wallet/pages/Wallet";
import { BuyBitcoin } from "../modules/wallet/pages/BuyBitcoin";
import { SellBitcoin } from "../modules/wallet/pages/SellBitcoin";
import { BitcoinPrice } from "../modules/wallet/pages/BitcoinPrice";
import { NotFound } from "../modules/wallet/pages/NotFound";

export function WalletModule(props) {
  return (
    <Routes>
      <Route path="/" element={<Wallet />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
      <Route path="/buy" element={<BuyBitcoin />}></Route>
      <Route path="/sell" element={<SellBitcoin />}></Route>
      <Route path="/bitcoin" element={<BitcoinPrice />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
