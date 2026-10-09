"use client"

import years from "@/src/database/years";
import { posterType } from "@/src/types/type";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TimeLine() {
    const direction = usePathname();
    const [ mount , setMount ] = useState<boolean>(false);
    const [ state , setState ] = useState<boolean>(false);

    useEffect(() => {
        setMount(true)
        
        if( direction == "/more/timeline")
            document.body.style.background = "#474e5d"
    } , [mount]);

    if(!mount)
        return null

    window.onresize = () => {
        const meta = matchMedia("(max-width:640px)");
        setState(meta.matches)
    }
    
    const position = (poster:posterType) => {
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
    

    return (
        <div className="h-full flex justify-center">
            <div className="h-1200 w-250 flex justify-center">
                <div className="w-full flex flex-col py-3 px-7 gap-80 max-sm:hidden">
                    {
                        position("odd").map( item => 
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
                        position( !state ? "even" : "both" ).map(
                            item => 
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