import { createSlice } from "@reduxjs/toolkit";

export const durationSlice = createSlice({
  name: "durationSearch",
  initialState: {
    value: "Any",
  },
  reducers: {
    setDurationSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDurationSearch } = durationSlice.actions;

export default durationSlice.reducer;
