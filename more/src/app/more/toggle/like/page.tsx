"use client"
import { LikeFilled } from "@ant-design/icons";
import { useState } from "react";

export default function ToggleLike() {
    const [ rotate , setRotate ] = useState(false);
    const rotating = () => setRotate(current => current ? false : true);
    
    return (
        <div className="p-5">
            <button onClick={rotating} className={`text-black duration-100 ease-in-out cursor-pointer text-5xl hover:text-blue-600 ${ rotate ? "rotate-180" : "" }`}>
                <LikeFilled />
            </button>
        </div>
    )
}