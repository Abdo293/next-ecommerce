import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompareState {
  compare: ICart[];
}

const initialState: CompareState = {
  compare: [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare(state, action: PayloadAction<ICart>) {
      state.compare.push(action.payload);
    },
    removeCompare(state, action: PayloadAction<number>) {
      state.compare = state.compare.filter(
        (product) => product.id !== action.payload
      );
    },
    toggleCompare(state, action: PayloadAction<ICart>) {
      if (state.compare.includes(action.payload)) {
        state.compare = state.compare.filter(
          (productId) => productId !== action.payload
        );
      } else {
        state.compare.push(action.payload);
      }
    },
  },
});

export const { addCompare, removeCompare, toggleCompare } =
  compareSlice.actions;
export default compareSlice.reducer;
