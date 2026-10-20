"use client"

import { useReducer, useRef } from "react";
import progress from "@/src/reducers/progress"

export default function ProgressBars() {
    const element = useRef<HTMLDivElement>(null);
    const [ state , dispatch ] = useReducer(progress.reducer , progress.initialState);

    function changeWidth() {
        dispatch({type:"limiiting" , payload:false})
        const divEl = element.current as HTMLDivElement;
        
        if(!state.limit)
            return 

        let count = 0;
        const stop = setInterval(() => {
            count++;
            dispatch({type:"counting" , payload:count})
            divEl.style.width = count + "%";
        
            if( count == 100 ) {
                dispatch({type:"counting" , payload:count})
                clearInterval(stop)
            }
        } , 30);
    }

    return (
        <div className="p-5">
            <div className="w-100">
            <div ref={element} className="bg-green-500 h-10 mb-4"></div>
                <span>{state.process}%</span>
                    <br />
                <button onClick={changeWidth} className="bg-gray-400 px-4 py-2 text-white cursor-pointer hover:bg-gray-600 duration-150">run</button>
            </div>
        </div>
    )
}