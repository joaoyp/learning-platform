import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../slices/searchBarSlice";
import filterReducer from "../slices/filterSlice";
import orderReducer from "../slices/orderSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarReducer,
    filterSearch: filterReducer,
    orderSearch: orderReducer,
  },
});
