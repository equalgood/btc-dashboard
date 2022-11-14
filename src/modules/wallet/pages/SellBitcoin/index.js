import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModal } from "../../ui/ErrorModal";
import { PageLayout } from "../../../../routes/ui/layouts/PageLayout";
import { Button } from "../../../../shared/ui/buttons/Button";

export function SellBitcoin() {
  const dispatch = useDispatch();
  const bitcoinBalance = useSelector((state) => state.reducer.bitcoinBalance);
  const exchangeRate = useSelector((state) => state.reducer.exchangeRate);
  const suggestion =
    exchangeRate >= 10000
      ? "Prices are high, sell now!"
      : "Prices are low, are you sure that you want to sell?";

  function buyHandler() {
    if (bitcoinBalance === 0) {
      dispatch({
        type: "THROW_ERROR",
        payload: "You have no bitcoins to sell",
      });
      return;
    }
    dispatch({ type: "SELL_BITCOIN", payload: 1 });
  }

  return (
    <PageLayout>
      <h1>Bitcoin price is {exchangeRate}$</h1>
      <p>{suggestion}</p>
      <Button onClick={buyHandler}>Sell 1 Bitcoin</Button>
      <ErrorModal />
    </PageLayout>
  );
}
