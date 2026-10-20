import { actionType, progressBars } from "../types/interface";

const initialState = {
    limit:true,
    process:0
};

function reducer(state:progressBars , action:actionType):any {
    switch(action.type) {
        case "limiiting":
            return {
                ...state,
                limit:action.payload 
            }
        case "counting":
            return {
                ...state,
                process:state.process
            }

        default:
            return state
    }
}

export default { initialState , reducer }