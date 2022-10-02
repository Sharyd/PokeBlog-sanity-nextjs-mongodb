import { configureStore } from "@reduxjs/toolkit";
import pokeCartReducer from "./cart-slice";
const store = configureStore({
  reducer: { pokeCart: pokeCartReducer },
});
export default store;
