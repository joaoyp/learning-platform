import { createSlice } from "@reduxjs/toolkit";

export const ratingSlice = createSlice({
  name: "ratingSearch",
  initialState: {
    value: 3.0,
  },
  reducers: {
    setRatingSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRatingSearch } = ratingSlice.actions;

export default ratingSlice.reducer;
