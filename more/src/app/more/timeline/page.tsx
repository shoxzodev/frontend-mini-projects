"use client"

import TimeLineItems from "@/src/components/timeline/TimelineItems";
import timeline from "@/src/reducers/timeline"
import { usePathname } from "next/navigation";
import { useEffect, useReducer } from "react";

export default function TimeLine() {
    const direction = usePathname();
    const [ state , dispatch ] = useReducer( timeline.reducer , timeline.initialState );
    
    useEffect(() => {
        dispatch({type:"mount" , payload: true});

        if( direction == "/more/timeline")
            document.body.style.background = "#474e5d"
    } , [state.mount]);

    if(!state.mount)
        return null

    window.onresize = () => {
        const meta = matchMedia("(max-width:640px)");
        dispatch({type:"state" , payload:meta.matches});
    }
    
    return (
        <div className="h-full flex justify-center">
            <div className="h-1200 w-250 flex justify-center">
                <div className="w-full py-3 px-7 max-sm:hidden">
                    <TimeLineItems event={"odd"} position={state.position} />
                </div>
                <div className="h-full w-3 bg-white"></div>
                <div className=" w-full px-7 py-60 max-sm:py-3">
                    <TimeLineItems event={!state.state ? "even" : "both"} position={state.position} />
                </div>
            </div>
        </div>

    )
}