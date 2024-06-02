// import { createSlice } from "@reduxjs/toolkit";
// import BASE_URL from "../service/Base_URL";
// import axios from "axios";
// import { toast } from "react-toastify";

// const initialState = {
//   scrapProductSuccess: false,
// };

// export const scrapProductSlice = createSlice({
//   name: "scrapProduct",
//   initialState,
//   reducers: {
//     scrapProductSuccess: (state) => {
//       state.scrapProductSuccess = true;
//     },
//   },
// });

// export const { scrapProductSuccess } = scrapProductSlice.actions;

// export const addScrapProduct = (scrapData) => async (dispatch) => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Token is missing!");
//       return;
//     }

//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     // console.log("Request Data:", scrapData); // Log the request data

//     const response = await axios.post(BASE_URL.addScrapProducts, scrapData, {
//       headers,
//     });

//     if (response.data) {
//       dispatch(scrapProductSuccess());
//       toast.success("Product Successfully Added!");
//     }
//   } catch (error) {
//     console.error("Error:", error); // Log any errors
//     toast.error("Product adding failed! Please try again");
//   }
// };

// // Removed unused function scrapProductSuccess

// export const scrapptoductisAdded = (state) => state.auth.scrapProductSuccess;

// export default scrapProductSlice.reducer;
// src/features/product/scrapProductSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../service/Base_URL"; // Adjust the import path as necessary

// Async thunk for fetching product data
export const fetchScrapProductData = createAsyncThunk(
  "scrapProduct/fetchScrapProductData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL.getScrapProducts);
      return response.data;
    } catch (error) {
      return rejectWithValue("Server Error");
    }
  }
);

const initialState = {
  scrapProductSuccess: false,
  scrapProductDetails: [],
  loading: false,
  error: null,
};

export const scrapProductSlice = createSlice({
  name: "scrapProduct",
  initialState,
  reducers: {
    scrapProductSuccess: (state) => {
      state.scrapProductSuccess = true;
    },
    // Removed getScrapProductSuccess as it's not needed with createAsyncThunk
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScrapProductData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchScrapProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.scrapProductDetails = action.payload;
      })
      .addCase(fetchScrapProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { scrapProductSuccess } = scrapProductSlice.actions;

// Thunk for adding a scrap product
export const addScrapProduct = (scrapData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Token is missing!");
      return;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(BASE_URL.addScrapProducts, scrapData, {
      headers,
    });

    if (response.data) {
      dispatch(scrapProductSuccess());
      toast.success("Product Successfully Added!");
    }
  } catch (error) {
    toast.error("Product adding failed! Please try again");
  }
};

export const scrapProductIsAdded = (state) =>
  state.scrapProduct.scrapProductSuccess;

export default scrapProductSlice.reducer;
