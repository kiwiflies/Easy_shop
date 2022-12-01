import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosSet from "../../../helpers/axiosSet";

export const API = Object.freeze({
    getFooterPages: createAsyncThunk("get/footerPages", async () => {
        return await axiosSet.get("api/vacancy/list");
    }),
})