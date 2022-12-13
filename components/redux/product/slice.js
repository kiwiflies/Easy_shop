import * as React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { API } from "./API";
import { fakeData } from "../../FakeData/CategoryListFake";

const productSlice = createSlice({
  name: "productCategory",
  initialState: {
    productCategoryData: [],
    title1: null,
    title2: null,
    categoryDataRejected: false,
  },
  reducers:{
    changeTitle1: (state, action) => {
      state.title1 = action.payload
    },
    changeTitle2: (state, action) => {
      state.title2 = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(API.getProductCategory.fulfilled, (state, action) => {
      state.productCategoryData = action.payload.data?.data;
    })
    .addCase(API.getProductCategory.rejected, (state) => {
      state.categoryDataRejected = true;
      state.productCategoryData = fakeData;
      console.log(fakeData);
    });
  },
});

export default productSlice;
export const {changeTitle1, changeTitle2} = productSlice.actions; 
