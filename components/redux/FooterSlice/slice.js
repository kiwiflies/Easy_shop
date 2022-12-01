import * as React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API } from "./API";

const footerSlice = createSlice({
  name: "footerPages",
  initialState: {
    footerPagesData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(API.getFooterPages.fulfilled, (state, action) => {
      state.footerPagesData = action.payload.data;
    });
  },
});
export default footerSlice;
