"use client";

import { useState } from "react";

export default function TypeWritter() {
    const [text , setText] = useState("");
    const [ limit , setLimit ] = useState(0);

    function main() {
        // here is a limit for using , once user click to start it gives him a limit , and then when the proecess ends it starts normally
        if(limit >= 1)
            return 0;

        setLimit(1)
        let str = "salom";
        let news = "";
        let count = 0;
        const stop = setInterval(() => {
            news += str[count];
            setText(news);
            count++;

            if( str.length <= count ) {
                setLimit(0);
                clearInterval(stop);
            }
        } , 500)
    }

    return (
        <div className="p-3">
            <button onClick={main} className="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white rounded-sm py-1 px-2">Start the typing effect</button>
            <p>{text}</p>
        </div>
    )
}