"use client"

import { useEffect, useState } from "react";

export default function ScrollDrawing() {
const [ mount , setMount ] = useState(false);

useEffect(() => {
    setMount(true)
} , [mount])


if(!mount)
    return null

let triangle = document.getElementById("triangle") as SVGPathElement | null;

if(triangle != null) {
let length = triangle.getTotalLength();

triangle.style.strokeDasharray = String(length);
triangle.style.strokeDashoffset = String(length);

window.onscroll = () => {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  var draw = length * scrollpercent;
  
  if(triangle != null)
    triangle.style.strokeDashoffset = String(length - draw);
}

}

    return (
        <div className="px-4 py-5 h-[2000px]">
            <svg id="mySVG">
                <path fill="none" stroke="red" stroke-width="3" id="triangle" d="M150 0 L75 200 L225 200 Z" />
            </svg>
        </div>
    )
}