import { createPortal } from "react-dom";
import style from "./LoginAlertBox.module.scss"
import React from "react";

export default function LoginAlertBox({children , status}:{children:React.ReactNode , status?:boolean}) {
    console.log("re-render")

    return createPortal(
        <div className={`${status ? style.visible : style.hidden} ${style.alertBox}`}>
            {children}
        </div>,
        document.body
    )
}