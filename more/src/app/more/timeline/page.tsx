"use client"

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
                <div className="w-full flex flex-col py-3 px-7 gap-80 max-sm:hidden">
                    {
                        state.position("odd").map( (item:any) => 
                            <div key={item.id} className={`p-5 rounded-xl bg-white`}>
                                <div className="relative">
                                    <h1>{item.title}</h1>
                                    <p>{item.info}</p>
                                    <div className={`h-5 w-5 rotate-45 top-1 -right-7 absolute bg-white `}></div>
                                    <button className={`h-5 w-5 rounded-[50%] outline-3 outline-amber-600 absolute top-1 bg-white -right-15 z-20`}></button>
                                </div>
                            </div>
                    )}
                </div>
                <div className="h-full w-3 bg-white"></div>
                <div className=" w-full flex flex-col px-7 py-60 gap-80 max-sm:py-3 max-sm:gap-10">
                    {
                        state.position( !state.state ? "even" : "both" ).map(
                            (item:any) => 
                                <div key={item.id} className={`p-5 rounded-xl bg-white`}>
                                    <div className="relative">
                                        <h1>{item.title}</h1>
                                        <p>{item.info}</p>
                                        <div className={`h-5 w-5 rotate-45 top-1 -left-7 absolute bg-white `}></div>
                                        <button className={`h-5 w-5 rounded-[50%] outline-3 outline-amber-600 absolute top-1 bg-white -left-15 z-20`}></button>
                                    </div>
                                </div>
                        )}
                </div>
            </div>
        </div>

    )
}