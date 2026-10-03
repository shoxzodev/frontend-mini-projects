"use client"

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
export default function ToolTip({children}:{children:React.ReactNode}) {
    const [ mount , setMount ] = useState(false);
    
    if(!mount)
        return null

    useEffect(() => {
        setMount(true)
        console.log(document.getElementById("clipboard"))

    } , [mount])

    return createPortal (
        <div>
            {children}
        </div>,
        document.body
    )
}