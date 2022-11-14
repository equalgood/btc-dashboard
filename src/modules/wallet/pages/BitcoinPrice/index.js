import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModal } from "../../ui/ErrorModal";
import { PageLayout } from "../../../../routes/ui/layouts/PageLayout";
import { Button } from "../../../../shared/ui/buttons/Button";

export function BitcoinPrice(props) {
  const dispatch = useDispatch();
  const exchangeRate = useSelector((state) => state.reducer.exchangeRate);

  function increaseHandler() {
    dispatch({ type: "INCREASE_RATE", payload: 1000 });
  }

  function decreaseHandler() {
    if (exchangeRate <= 1000) {
      dispatch({
        type: "THROW_ERROR",
        payload: "Bitcoin price cannot be below 1,000$",
      });
      return;
    }
    dispatch({ type: "DECREASE_RATE", payload: 1000 });
  }

  return (
    <PageLayout>
      <h1>Bitcoin price is {exchangeRate}$</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button onClick={increaseHandler}>
          Increase Bitcoin
          <br />
          Price (+1,000)
        </Button>
        <Button onClick={decreaseHandler}>
          Decrease Bitcoin
          <br />
          Price (-1,000)
        </Button>
      </div>
      <ErrorModal />
    </PageLayout>
  );
}
