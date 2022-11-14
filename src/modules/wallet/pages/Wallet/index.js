import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorModal } from "../../ui/ErrorModal";
import { PageLayout } from "../../../../routes/ui/layouts/PageLayout";
import { Button } from "../../../../shared/ui/buttons/Button";

export function Wallet() {
  const dispatch = useDispatch();
  const dollarBalance = useSelector((state) => state.reducer.dollarBalance);
  const bitcoinBalance = useSelector((state) => state.reducer.bitcoinBalance);

  function depositHandler() {
    dispatch({
      type: "DEPOSIT_DOLLARS",
      payload: 100,
    });
  }

  function withdrawHandler() {
    if (dollarBalance - 100 < 0) {
      dispatch({
        type: "THROW_ERROR",
        payload: "You have not enough money to withdraw",
      });
      return;
    }
    dispatch({
      type: "WITHDRAW_DOLLARS",
      payload: 100,
    });
  }

  return (
    <PageLayout>
      <h1>Your Bitcoin wallet</h1>
      <p>You now owns {bitcoinBalance} Bitcoins</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Button onClick={depositHandler}>Deposit 100$</Button>
        <Button onClick={withdrawHandler}>Withdraw 100$</Button>
      </div>
      <ErrorModal />
    </PageLayout>
  );
}
