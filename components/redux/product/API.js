import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosSet from "../../../helpers/axiosSet";

export const API = Object.freeze({
    getProductCategory: createAsyncThunk("get/productCategory", async () => {
        return await axiosSet.get("api/product/category/list");
    }),
})