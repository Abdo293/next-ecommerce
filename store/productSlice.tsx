import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  products: ICart[];
  totalPrice: number;
}

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        const prevQuantity = item.quantity;
        item.quantity = quantity;
        state.totalPrice += (quantity - prevQuantity) * item.price;
      }
    },
  },
});

export const { addToCart, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
