// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { toast } from "react-toastify";
// import BASE_URL from "../service/Base_URL";

// const initialState = {
//   isLoggedIn: false,
//   userDetails: null, // Add user details to the state
//   registrationSuccess: false, // Track registration success
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     scrapProductaddedSuccess: (state, action) => {
//       state.isLoggedIn = true;
//       state.userDetails = action.payload; // Store user details in the state
//     },
//   },
// });

// export const {
//   scrapProductaddedSuccess,
//   userLogoutSuccess,
//   scrapProductAddSuccess,
//   //   registrationSuccess,
//   resetRegistrationSuccess,
// } = authSlice.actions;

// // Async Action Creators
// // import axios from 'axios';

// export const addScrapProduct = (scrapProductData) => async (dispatch) => {
//   // export const registerUser = (scrapProductData) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:8080/auth/user/add-scrap-product",

//       productData,
//       {
//         headers,
//       }
//     );
//     const { responseData } = response.data;
//     if (responseData) {
//       dispatch(scrapProductAddSuccess());
//       toast.success("Product Successfully Added");
//     }
//   } catch (error) {
//     toast.error("Product Add Failed! Please try again");
//   }
// };

// // export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// // export const selectUserDetails = (state) => state.auth.userDetails; // Selector for user details
// // export const selectRegistrationSuccess = (state) =>
// //   state.auth.scrapProductAddSuccess;

// export default productSlice.reducer;
