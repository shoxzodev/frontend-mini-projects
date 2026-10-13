"use client"

import { useEffect, useReducer } from "react";
import timerReducer from "@/src/reducers/timers"

export default function CountDownTimer() {
    const [ state , dispatch ] = useReducer( timerReducer.reducer , timerReducer.initialState);

    const timing = () => {
        let seconds = state.timer.seconds;
        let minutes = state.timer.minutes;
        let hour = state.timer.hour;
        let day = state.timer.day;

        const stopInterval = setInterval(() => {              
            seconds--;
        
            if( seconds <= 0 ) {
                minutes--;

                if(minutes <= 0) {
                    hour--;
                    minutes = 59;
                }

                if(hour <= 0) {
                    hour = 23;
                    day--;
                }

                if(day <= 0)
                    return clearInterval(stopInterval)

                dispatch({
                    type:"all-timers", 
                    payload:{
                        seconds:59,
                        minutes,
                        hour,
                        day
                    }
                });

                dispatch({type:"lifecycle"});
                return clearInterval(stopInterval);
            }

            dispatch({type:"timer-second" , payload:seconds})

        } , 1000);
    }

    useEffect(() => {
        timing();
    } , [state.mount])

    return (
        <div className="h-full">
            <div className="flex gap-3 text-[2rem] justify-center items-center h-full border-2">
                <span>{state.timer.day}</span>
                <span>{state.timer.hour}</span>
                <span>{state.timer.minutes}</span>
                <span>{state.timer.seconds}</span>
            </div>
        </div>
    )
}