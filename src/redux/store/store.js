import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../slices/searchBarSlice";
import filterReducer from "../slices/filterSlice";
import orderReducer from "../slices/orderSlice";
import categoryReducer from "../slices/categorySlice";
import durationReducer from "../slices/durationSlice";
import ratingReducer from "../slices/ratingSlice";
import priceReducer from "../slices/priceSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarReducer,
    filterSearch: filterReducer,
    orderSearch: orderReducer,
    categorySearch: categoryReducer,
    durationSearch: durationReducer,
    ratingSearch: ratingReducer,
    priceSearch: priceReducer,
  },
});
