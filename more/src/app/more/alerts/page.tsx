"use client"

import windows from "@/src/database/windows";
import React, { useState } from "react";

export default function Alerts() {
    const [ data , setData ] = useState(windows); 
    
    const removeItem = (itemId:number , event:React.MouseEvent<HTMLSpanElement>) => {
        const filteredData = windows.filter(item => {
            return item.id != itemId
        });
        const spanElement = event.currentTarget as HTMLSpanElement;
        const spanParentElement = spanElement.parentElement;
        spanParentElement!.style.opacity = "0"

        setTimeout(() => {
            setData(filteredData);
        } , 500)
    }

    return (
        <div>
            <ul className="m-auto flex gap-2 flex-col max-w-300">
                {data.map(
                    item => <li data-type={item.id} key={item.id} className={`
                            ${ 
                                item.id == 1 
                                ? "bg-red-500" 
                                : item.id == 2 ? "bg-green-500" 
                                : item.id == 3 ? "bg-yellow-500" 
                                : "bg-gray-500"}
                                  flex justify-between px-3 py-2 text-white duration-200 ease-linear opacity-100
                                `}
                            >
                            <span>{item.title} </span>
                            <span onClick={ (e:React.MouseEvent<HTMLSpanElement>) => removeItem(item.id , e)} className="text-black hover:text-white cursor-pointer">x</span>
                    </li>
                )}
            </ul>
        </div>
    )
}