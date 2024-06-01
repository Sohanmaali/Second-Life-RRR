import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import BASE_URL from "../service/Base_URL";

const initialState = {
  isLoggedIn: false,
  userDetails: null, // Add user details to the state
  registrationSuccess: false, // Track registration success
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload; // Store user details in the state
    },
    userLogoutSuccess: (state) => {
      state.isLoggedIn = false;
      state.userDetails = null; // Clear user details on logout
    },
    registrationSuccess: (state) => {
      state.registrationSuccess = true;
    },
    resetRegistrationSuccess: (state) => {
      state.registrationSuccess = false;
    },
  },
});

export const {
  userLoginSuccess,
  userLogoutSuccess,
  registrationSuccess,
  resetRegistrationSuccess,
} = authSlice.actions;

// Async Action Creators
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL.userLogin, userData);
    const responsedata = response.data; // Assuming the response contains a user object
    if (responsedata) {
      dispatch(userLoginSuccess(responsedata));
      localStorage.setItem("token", responsedata.token); // Dispatch user details with success action
      toast.success("You are logged in now");
    } else {
      toast.error("Token missing in response");
    }
  } catch (error) {
    toast.error("Something went wrong during login");
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(BASE_URL.addUser, userData);
    const { responseData } = response.data;
    if (responseData) {
      dispatch(registrationSuccess());
      toast.success("Registration Successful! You can login now");
    }
  } catch (error) {
    toast.error("Registration Failed! Please try again");
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(userLogoutSuccess());
};

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserDetails = (state) => state.auth.userDetails;
export const selectRegistrationSuccess = (state) =>
  state.auth.registrationSuccess;

export default authSlice.reducer;
