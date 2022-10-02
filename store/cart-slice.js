import { createSlice } from "@reduxjs/toolkit";

const initialPokeCart = {
  items: [],
};
const pokeCart = createSlice({
  name: "pokeCart",
  initialState: initialPokeCart,
  reducers: {
    addItem(state, action) {
      const newPoke = action.payload;
      const existingPoke = state.items.find((poke) => poke.id === newPoke.id);
      if (!existingPoke) {
        state.items.push(newPoke);
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = pokeCart.actions;
export default pokeCart.reducer;
