import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../shared/ui/buttons/Button";
import { Modal } from "../../../../shared/ui/modals/Modal";

export function ErrorModal() {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorReducer.errorMessage);

  const isErrorModalOpened = useSelector(
    (state) => state.errorReducer.isOpened
  );

  if (!isErrorModalOpened) return null;

  function closeModal() {
    dispatch({ type: "CLOSE_ERROR", payload: "" });
  }
  return (
    <Modal onClick={closeModal}>
      <p>{errorMessage}</p>
      <Button style={{ fontSize: "3rem" }} onClick={closeModal}>
        Okay!
      </Button>
    </Modal>
  );
}
