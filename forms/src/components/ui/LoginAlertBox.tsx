"use client"
import { createPortal } from "react-dom";
import style from "./LoginAlertBox.module.scss"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { logins } from "@/src/store/login";

export default function LoginAlertBox({children , state , closeState }:{children:React.ReactNode , state:boolean , closeState:Dispatch<SetStateAction<boolean>>}) {
    const [ mounted , setMounted ] = useState(false);
    const setStatus = logins((set:any) => set.setStatus);

    useEffect(() => {
        setMounted(true)
    }, []);

    if(!mounted) {
        return null
    }

    function hideBlock(e:React.MouseEvent<HTMLElement>) {
        const element = e.target as HTMLDivElement;

        if(element.id == "block" && state )
            setStatus(false)
    }

    
    return createPortal(
        <div id="block" onClick={hideBlock} className={`${state ? style.hidden : style.visible} ${style.alertBox}`}>
            {children}
        </div>,
        document.body
    )
}