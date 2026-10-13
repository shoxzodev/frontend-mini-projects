import { timerInterface } from "../types/interface";

const initialState = {
    timer:{
        day:1180,
        hour:23,
        minutes:59,
        seconds:59
    },
    mount:false
};

function reducer(state:timerInterface , action:any) {
    switch(action.type ) {
        case "lifecycle":
            return {
                ...state,
                mount: !state.mount
            }

        case "timer-second":
            return {
                ...state,
                timer: {
                    ...state.timer,
                    seconds:action.payload
                }
            }

        case "all-timers":
            return {
                ...state,
                timer: action.payload
            }
        default:
            return state
    }
};


export default { initialState , reducer }