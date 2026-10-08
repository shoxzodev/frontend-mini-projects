import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./slices/popup.slice";
import toggleDark from "./slices/darkmode.slice";

const store = configureStore({
    reducer:{
        popup:popupSlice,
        darkmode: toggleDark
    }
});

export default store