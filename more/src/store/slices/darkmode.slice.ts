import { createSlice } from "@reduxjs/toolkit";


const darkmode = createSlice({
    name:"darkmode",
    initialState: {
        dark:false
    },
    reducers: {
        toggleDark:(state) => {
            state.dark = state.dark ? false : true;
        }
    }
});

export default darkmode.reducer;
export const { toggleDark } = darkmode.actions;