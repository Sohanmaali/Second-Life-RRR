// import { createSlice } from "@reduxjs/toolkit";
// import BASE_URL from "../service/Base_URL";
// import axios from "axios";

// const initialState = {
//   categoryDetails: null,
// };

// export const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   reducers: {
//     setCategoryDetails: (state, action) => {
//       state.categoryDetails = action.payload;
//     },
//   },
// });

// export const { setCategoryDetails } = categorySlice.actions;

// // Async action to fetch all categories
// export const getAllCategories = () => async (dispatch) => {
//   try {
//     const response = await axios.get(BASE_URL.getAllcategories);
//     const responsedata = response.data;
//     if (responsedata) {
//       dispatch(setCategoryDetails(responsedata));
//     } else {
//       console.log("Category gatting fail");
//     }
//   } catch (error) {
//     // Handle error
//     console.error("Error fetching categories:", error);
//   }
// };

// export const selectCategoryDetails = (state) => state.category.categoryDetails;

// export default categorySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../service/Base_URL";

const initialState = {
  categoryDetails: [],
  loading: true,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryDetails: (state, action) => {
      state.categoryDetails = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCategoryDetails, setLoading } = categorySlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    // console.log("fetchCategories");
    dispatch(setLoading(true));
    const response = await axios.get(BASE_URL.getAllcategories);
    // const categories = response.data;
    if (response.data) dispatch(setCategoryDetails(response.data));
    console.log("categoryDetails ", initialState.categoryDetails);
  } catch (error) {
    // dispatch(setError(error.message));
  }
};

export const selectCategoryDetails = (state) => state.category.categoryDetails;
export const selectLoading = (state) => state.category.loading;
export const selectError = (state) => state.category.error;

export default categorySlice.reducer;
