import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderSearch",
  initialState: {
    value: "Desc.",
  },
  reducers: {
    setOrderSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setOrderSearch } = orderSlice.actions;

export default orderSlice.reducer;
