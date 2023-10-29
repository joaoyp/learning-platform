import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchBarSlice.actions;

export default searchBarSlice.reducer;
