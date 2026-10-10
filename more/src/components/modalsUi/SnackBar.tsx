"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function SnackBar({hide , makeHidden}:{hide:boolean , makeHidden:Dispatch<SetStateAction<boolean>>}) {
    const [ mount , setMount ] = useState(false);

    useEffect(() => {
        setMount(true);

        if(!hide)
            return

        setTimeout(() => {
            makeHidden(false)
        } , 3000 );

    } , [mount , hide]) 

    if(!mount)
        return null

    return createPortal(
        <button className={`fixed duration-150 ${hide ? "bottom-2": "-bottom-10" }  left-[50%] translate-x-[-50%] bg-gray-700 text-white px-3 py-2`}>
            Some text some messages..
        </button>,
        document.body
    )
}