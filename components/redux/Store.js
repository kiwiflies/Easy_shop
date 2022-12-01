import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./ModalSlice/slice";
import productSlice from "./product/slice";
import footerSlice from "./FooterSlice/slice";
import loginSlice from "./LogIn/slice";


const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    product: productSlice.reducer,
    footer: footerSlice.reducer,
    login: loginSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export default store;
