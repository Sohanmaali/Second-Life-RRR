// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import scrapProductReducer from "../features/scrapProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrapProduct: scrapProductReducer, // Add scrapProductReducer to the store
  },
});
