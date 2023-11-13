import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categorySearch",
  initialState: {
    value: [],
  },
  reducers: {
    setCategorySearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategorySearch } = categorySlice.actions;

export default categorySlice.reducer;
