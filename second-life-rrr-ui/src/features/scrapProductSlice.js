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

// Async thunk for removing a scrap product
export const removeScrapProduct = createAsyncThunk(
  "scrapProduct/removeScrapProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token is missing!");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.delete(`${BASE_URL.deleteScrapProduct}/${productId}`, {
        headers,
      });
      return productId;
    } catch (error) {
      return rejectWithValue("Product removal failed! Please try again");
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
      })
      .addCase(removeScrapProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeScrapProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.scrapProductDetails = state.scrapProductDetails.filter(
          (product) => product.id !== action.payload
        );
        toast.success("Product Successfully Removed!");
      })
      .addCase(removeScrapProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // toast.error(action.payload);
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
