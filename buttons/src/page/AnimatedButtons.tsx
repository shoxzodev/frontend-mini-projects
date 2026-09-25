import { useState } from "react";

export default function AnimatedButtons() {    
    const [ active , setActive ] = useState(false);
    
    function activate() {
        setActive(true);

        setTimeout(() => setActive(false) , 400)
    }

    return (
        <div className="flex gap-2 ">
            <button className="shadow-[0_4px_1px_#686868] active:translate-y-0.5 active:shadow-[0_1px_1px_#686868] px-6 py-3 rounded-[10px] bg-green-600 hover:bg-green-700 duration-150 cursor-pointer text-white button">Click</button>
            <button className={`px-6 py-3 bg-red-600 text-white cursor-pointer min-w-25 relative flex button`}>
                <span className="text">Hover</span>
            </button>
            <button onClick={activate} className={`px-6 py-3 cursor-pointer rounded-sm bg-green-600 hover:bg-green-700 text-white duration-75 relative`}>
                Click
                <div className={`${active ? "animate" : ""} fade`}></div>          
            </button>
        </div>
    )
}