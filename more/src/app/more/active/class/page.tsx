"use client";

import numbers from "@/src/database/numbers";
import { useState } from "react";

export default function ActiveClass() {
    const [ number , setNumber ] = useState<number>(numbers[0].number);

    return(
        <div className="p-5">
            <div className="flex gap-2">
                {numbers.map( item => <button key={item.id} onClick={() => setNumber(item.number)} className={`duration-200 px-3 py-1 cursor-pointer ${number == item.number ? "bg-gray-500 text-white" : "bg-gray-200"} hover:bg-gray-500 hover:text-white`}>{item.number}</button> )}
            </div>
        </div>
    )
}