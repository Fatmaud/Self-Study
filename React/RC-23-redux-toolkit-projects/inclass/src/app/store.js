import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
//authSlice.js dosyasinda authSlice olrak export ettik, ama burada kedni verdigimiz isimle cagirabiliriz. (!!!export default vs. export const default)

import productReducer from "../features/productSlice";

//⬇️vs.redux combineReducers: toolkitte bu metod olmadan direkt birden fazla reduceri kullanabiliriz.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //? eger gelistirme asamasi production ise o zaman yukaridaki ifade false döndürür ve dolayisiyla devTool kullanima kapali olur.
});
