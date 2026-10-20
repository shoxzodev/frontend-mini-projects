"use client"

import React, { useRef, useState } from "react";

export default function DraggableElement() {
    const [ drag , setDrag ] = useState(false); 
    const thing = useRef<HTMLParagraphElement>(null);

    function changePosition(e:React.DragEvent<HTMLParagraphElement>) {
        setDrag(true)
    }

    function leavePostion(e:React.DragEvent<HTMLParagraphElement>) {
        const elem = thing.current as HTMLParagraphElement;
        elem.style.left = `${e.clientX - 10}px`;
        elem.style.top = `${e.clientY - 210}px`;
        setDrag(false)
    }

    return (
        <div className="p-10 h-full relative">
            <p ref={thing} onDragEnter={changePosition} onDragEnd={leavePostion} draggable className={`${drag ? "hidden" : ""} absolute cursor-pointer`}>
                salom
            </p>
        </div>
    )
}