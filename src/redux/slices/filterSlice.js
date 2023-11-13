import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filterSearch",
  initialState: {
    value: "Creation",
  },
  reducers: {
    setFilterSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterSearch } = filterSlice.actions;

export default filterSlice.reducer;
