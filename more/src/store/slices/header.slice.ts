import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:"headers",
    initialState: {
        fontSize:"text-[5rem]",
        sticky:false
    },
    reducers: {
        changeFontSize: ( state:{ fontSize:string } ,  action ) => {
            action.payload > 100  
            ? state.fontSize = "text-[2rem]"    
            : state.fontSize = "text-[5rem]"
        },

        stickyHeader:(state:{sticky:boolean} , action) => {
            console.log(action.payload)
            
            if( action.payload > 100 ) {
                state.sticky = true   
            } else {
                state.sticky = false
            }
        } 
    }
});

export default headerSlice.reducer
export const { changeFontSize , stickyHeader } = headerSlice.actions