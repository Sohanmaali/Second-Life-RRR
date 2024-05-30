// import { configureStore } from "@reduxjs/toolkit";

// import userReducer from "../features/authSlice";

// export const store = configureStore({ reducer: userReducer });

// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import scrapProductReducer from "../features/Product";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    scrapProduct: scrapProductReducer, // Add scrapProductReducer to the store
  },
});
