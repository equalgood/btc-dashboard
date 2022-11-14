import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModal } from "../../ui/ErrorModal";
import { PageLayout } from "../../../../routes/ui/layouts/PageLayout";
import { Button } from "../../../../shared/ui/buttons/Button";

export function BuyBitcoin() {
  const dispatch = useDispatch();
  const dollarBalance = useSelector((state) => state.reducer.dollarBalance);
  const exchangeRate = useSelector((state) => state.reducer.exchangeRate);
  const suggestion =
    exchangeRate >= 10000
      ? "Prices are high, are you sure that you want to buy?"
      : "Prices are low, buy more!";

  function buyHandler() {
    if (dollarBalance - exchangeRate < 0) {
      dispatch({
        type: "THROW_ERROR",
        payload: "You have not enough money to buy",
      });
      return;
    }
    dispatch({ type: "BUY_BITCOIN", payload: 1 });
  }

  return (
    <PageLayout>
      <h1>Bitcoin price is {exchangeRate}$</h1>
      <p>{suggestion}</p>
      <Button onClick={buyHandler}>Buy 1 Bitcoin</Button>
      <ErrorModal />
    </PageLayout>
  );
}
