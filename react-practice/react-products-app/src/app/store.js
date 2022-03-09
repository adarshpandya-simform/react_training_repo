import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../feature/product.slice";

export const store = configureStore({
  reducer: {
    products: reducer,
  },
});
