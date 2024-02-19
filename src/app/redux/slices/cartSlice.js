import { featuredProducts } from "@/data/featuredProducts";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  items: featuredProducts,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
