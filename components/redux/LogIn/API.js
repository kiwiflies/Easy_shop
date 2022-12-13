import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosSet from "../../../helpers/axiosSet";

export const API = Object.freeze({
  postSignUp: createAsyncThunk("post/signUp", async (data) => {
    return await axiosSet.post("user_api/register", data);
  }),
  postLogIn: createAsyncThunk("post/logIn", async (data) => {
    return await axiosSet.post("user_api/login", data);
  }),
  updateUser: createAsyncThunk("post/signUp", async (data) => {
    return await axiosSet.post("user_api/register", data);
  }),
});
