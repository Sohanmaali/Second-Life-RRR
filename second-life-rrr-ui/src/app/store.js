// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import scrapProductReducer from "../features/scrapProductSlice";
import categoryReducer from "../features/categoriesSlice"; // Adjust the path as necessary

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrapProduct: scrapProductReducer, // Add scrapProductReducer to the store
    category: categoryReducer,
  },
});
