import buttons from "../database/buttons";
import { slideshowType } from "../types/type";

const initialState:slideshowType = {
    text:0,
    changes:buttons[0]
}

function reducer(state:any , action:any) {
    switch(action.type) {
        case "text": {
            return {
                ...state,
                text:action.payload
            };
        }
        case "changes":
            return {
                ...state,
                changes:action.payload
            };        
        default:
            return state
    }
};


export default { initialState , reducer }