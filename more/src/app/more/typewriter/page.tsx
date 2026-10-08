"use client";

import React, { useEffect, useState } from "react";

export default function TypeWritter() {
    const [txt , setTxt] = useState<string>("");

    const writeType = () => {
        let str = "Lorem ipsum typing effect! Great stuff! Cant wait to check out the Try it Yourself!";
        let newText = "";
        let counter = 0;
        const stop = setInterval(() => {
            newText += str[counter];

            setTxt(newText)
            counter++;

            if(str.length == counter) {
                newText = "";
                clearInterval(stop);
            }

        } , 100);
    };

    return (
        <div className="p-3">
            <button className="bg-gray-500 cursor-pointer hover:bg-gray-600 text-white rounded-sm py-1 px-2" onClick={writeType}>Start the typing effect</button>
            <p>{txt}</p>
        </div>
    )
}