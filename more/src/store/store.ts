import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popup.slice";
import toggleDark from "./slices/darkmode.slice";
import headerSlice from "./slices/header.slice"

const store = configureStore({
    reducer:{
        popup:popupSlice,
        darkmode: toggleDark,
        headers: headerSlice
    }
});

export default store