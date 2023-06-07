import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slicers/pageSlice";

export const store = configureStore({
    reducer:{
    page: pageSlice
    }
})