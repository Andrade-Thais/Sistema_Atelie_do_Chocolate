import { configureStore } from "@reduxjs/toolkit";
import pedidoReducer from "./pedidoReducer";

const store = configureStore({
  reducer: {
    pedido: pedidoReducer,
  },
});

export default store;
