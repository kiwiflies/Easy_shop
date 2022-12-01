import * as React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API } from "./API";

const productSlice = createSlice({
  name: "productCategory",
  initialState: {
    productCategoryData: [],
    title: null
  },
  reducers:{
    changeTitle: (state, action) => {
      state.title = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(API.getProductCategory.fulfilled, (state, action) => {
      state.productCategoryData = action.payload.data?.data;
    });
  },
});

export default productSlice;
export const {changeTitle} = productSlice.actions; 
