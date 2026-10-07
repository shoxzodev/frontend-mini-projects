import { stateType } from "@/src/types/type";

const { createSlice } = require("@reduxjs/toolkit");

const popup = createSlice({
    name:"popup",

    initialState:{
        open:false,
        prompt:"",
        text:""
    },

    reducers: {
        openWindow:(state:stateType) => { state.open = true; },
        closeWindow:(state:stateType) => { state.open = false; },
        changePrompt:(state:stateType , action:{payload:string}) => { state.text = action.payload; },
        savePrompts: (state:stateType , action:{payload:string}) => { state.prompt = action.payload; }
    }
});

export default popup.reducer;
export const { openWindow , closeWindow , changePrompt , savePrompts } = popup.actions;