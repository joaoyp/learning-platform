import { createSlice } from "@reduxjs/toolkit";

export const priceSlice = createSlice({
  name: "priceSearch",
  initialState: {
    value: [0, 500],
  },
  reducers: {
    setPriceSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setPriceSearch } = priceSlice.actions;

export default priceSlice.reducer;
