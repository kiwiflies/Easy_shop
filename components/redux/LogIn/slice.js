import { createSlice } from "@reduxjs/toolkit";
import { API } from "./API";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    registerData: null,
    registerRejected: false,
    loginData: null,
    loginRejected: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(API.postSignUp.pending, (state) => {
        state.registerRejected = false;
      })
      .addCase(API.postSignUp.fulfilled, (state, action) => {
        state.registerData = action.payload.data;
      })
      .addCase(API.postSignUp.rejected, (state) => {
        state.registerRejected = true;
      })


      .addCase(API.postLogIn.pending, (state) => {
        state.loginRejected = false;
      })
      .addCase(API.postLogIn.fulfilled, (state, action) => {
        state.loginData = action.payload.data;
      })
      .addCase(API.postLogIn.rejected, (state) => {
        state.loginRejected = true;
      });
  },
});
export default loginSlice;
