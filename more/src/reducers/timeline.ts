import years from "../database/years";
import { posterType } from "../types/type";

const initialState = {
    mount:false,
    state:false,
    position(poster:posterType) {
        if(poster == "odd")
            return years.filter((item , index) => {
                    if( index % 2 != 0 ) 
                        return item
                    });
        else if(poster == "even")
            return years.filter((item , index) => {
                    if( index % 2 == 0 ) 
                        return item
                    }); 
            
        return years
    }
};

function reducer(state:any , action:any) {
    switch(action.type) {
        case "mount":
            return {
                ...state,
                mount:action.payload   
            }
        
        case "state":
            return {
                ...state,
                state:action.payload   
            }
        
        default:
            return state
        
    }
};


export default { initialState , reducer }