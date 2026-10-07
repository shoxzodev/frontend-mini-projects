"use client";

import tooltips from "@/src/database/tooltips";
import { useState } from "react";

export default function Popups() {
    const [ show , setShow ] = useState(false);
    const toggleVisibility = () => setShow(current => current ? false : true);

    return (
        <div className="p-10">
            <button onClick={toggleVisibility} className="relative cursor-pointer">
                    <div className={`absolute bg-gray-500 w-45 py-1 ${show ? "opacity-100" : "opacity-0" } rounded-sm ease-in-out duration-75 ${tooltips[0].class4}`}>
                        <div className="relative">
                            <div className={`absolute bg-gray-500 h-2 w-2 -z-10 rotate-45 ${tooltips[0].class3}`}></div>
                            <span className="text-white">{tooltips[0].name2}</span>
                        </div>
                    </div>
                    <span className="text-blue-500">Click me to toggle the popup</span>
            </button>
        </div>
    )   
}