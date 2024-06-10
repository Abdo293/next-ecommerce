import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface productState {
  product: IproductDetails | null;
}

const initialState: productState = {
  product: null,
};
const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IproductDetails>) => {
      state.product = action.payload;
    },
  },
});

export const { selectProduct } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
