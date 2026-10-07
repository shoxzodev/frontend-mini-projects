"use client"

import { closeWindow } from "@/src/store/slices/popup.slice";
import React, { RefObject, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

export default function PopUpModal({children , clearText}:{children:React.ReactNode , clearText:RefObject<HTMLInputElement | null>}) {
    const [ mount , setMount ] = useState(false);
    const close = useSelector((state:any) => state.popup.open);
    const dispatch = useDispatch();

    useEffect(() => {
        setMount(true)
    }, [mount]);

    if(!mount)
        return null

    // close window 
    const blurWindow = (e:React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const divElement = e.target as HTMLDivElement;
        const inputElement = clearText.current as HTMLInputElement;
        inputElement.value = "";

        if(divElement.id == "closeWindow")
            dispatch(closeWindow())
    }

    return createPortal(
        <div id="closeWindow" onClick={blurWindow} className={`h-full w-full ${close ? "bg-black/20 absolute" : "" }`}>
            <div className={`fixed rounded-sm flex-col flex justify-center items-center translate-x-[-50%] left-[50%] bg-gray-100 h-25 w-80  duration-150 ${close ? "opacity-100 top-20" : "opacity-0 top-0"}`}>
                {children}
            </div>
        </div>,
        document.body
    )
}