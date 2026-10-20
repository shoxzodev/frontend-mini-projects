"use client"

import { useState } from "react";
export default function DeviceLook() {
    const [ turn , setTurn ] = useState(false);

    const switchDevice = () =>
        setTurn(current => current ? false : true);

    return (
        <div className="p-10 flex items-center gap-10">
            <div className="bg-black rounded-[10px] relative w-[320px] h-158">
                <span className="absolute bg-gray-700 w-10 h-1.5 left-[50%] translate-[-50%] top-2 rounded-[10px]"></span>
                <div className="absolute w-75 h-147 left-2.5 top-4 rounded-sm">
                    { turn 
                    ? <iframe src="http://localhost:5173/login" className="border-none rounded-sm h-full w-full"></iframe>
                    : <div className="h-full w-full bg-black"></div> }
                    </div>
                <button onClick={switchDevice} className="cursor-grab h-4 w-4 rounded-[50%] bg-white absolute bottom-[0.1px] left-[50%] translate-[-50%]"></button>
            </div>

            <div className="bg-black rounded-[10px] relative w-160 h-158">
                <span className="absolute bg-gray-700 w-10 h-1.5 left-[50%] translate-[-50%] top-2 rounded-[10px]"></span>
                <div className="absolute w-155 h-147 left-2.5 top-4 rounded-sm">
                    { turn 
                    ? <iframe src="http://localhost:5173/login" className="border-none rounded-sm h-full w-full"></iframe>
                    : <div className="h-full w-full bg-black"></div> }
                    </div>
                <button onClick={switchDevice} className="cursor-grab h-4 w-4 rounded-[50%] bg-white absolute bottom-[0.1px] left-[50%] translate-[-50%]"></button>
            </div>
        </div>
    )
}