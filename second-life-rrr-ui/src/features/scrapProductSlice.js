import { createSlice } from "@reduxjs/toolkit";
import BASE_URL from "../service/Base_URL";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  scrapProductSuccess: false,
};

export const scrapProductSlice = createSlice({
  name: "scrapProduct",
  initialState,
  reducers: {
    scrapProductSuccess: (state) => {
      state.scrapProductSuccess = true;
    },
  },
});

export const { scrapProductSuccess } = scrapProductSlice.actions;

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

    // console.log("Request Data:", scrapData); // Log the request data

    const response = await axios.post(BASE_URL.addScrapProducts, scrapData, {
      headers,
    });

    if (response.data) {
      dispatch(scrapProductSuccess());
      toast.success("Product Successfully Added!");
    }
  } catch (error) {
    console.error("Error:", error); // Log any errors
    toast.error("Product adding failed! Please try again");
  }
};

// Removed unused function scrapProductSuccess

export const scrapptoductisAdded = (state) => state.auth.scrapProductSuccess;

export default scrapProductSlice.reducer;
