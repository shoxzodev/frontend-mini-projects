"use client";

import { useState } from "react";

export default function ToogleDarkMode() {
    const [ textColor , setTextColor ] = useState("");
    
    function toggleColor() {
        const color = document.body.style.background; 
        document.body.style.background = color == "black" ? "" : "black";
        setTextColor( color == "black" ? "" : "text-white")
    }

    return (
        <div className="p-3">
            <h1 className={`text-[2rem] ${textColor}`}>Toggle Dark/Light Mode</h1>
            <p className={`text-[1rem] my-3 ${textColor}`}>Click the button to toggle between dark and light mode for this page.</p>
            <button onClick={toggleColor} className="border-gray-600 bg-gray-600 rounded-md hover:bg-gray-700 cursor-pointer p-2 text-white">Toggle dark mode</button>
        </div>
    )
};