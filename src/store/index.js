import {reducer} from "../modules/wallet/store/reducer";
import {errorReducer} from "../modules/wallet/store/errorReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
  reducer,
  errorReducer,
};

export const store = configureStore({ reducer: rootReducer });
