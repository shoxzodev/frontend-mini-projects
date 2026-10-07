import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popup.slice";

const store = configureStore({
    reducer:{
        popup:popupSlice,
    }
});

export default store