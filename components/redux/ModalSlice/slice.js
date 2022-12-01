import * as React from "react";
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    data: [],
    review_data:[],
    display: false,
    reviewDisplay: false,
  },
  reducers: {
    modalData: (state, action) => {
      state.data = action.payload;
    },
    modalClose: (state, action) => {
      state.display = action.payload;
    },
    reviewData: (state, action) => {
      state.review_data = action.payload;
    },
    reviewClose: (state, action) => {
      state.reviewDisplay = action.payload;
    },
  },
});
export default modalSlice;
export const { modalData, modalClose, reviewClose, reviewData } = modalSlice.actions;
