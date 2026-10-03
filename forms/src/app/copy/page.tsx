"use client"

import React, { useState } from "react";
import style from "./CopyText.module.scss"

export default function CopyText() {
    const [text , setText] = useState<string>("");
    const [ show , setShow ] = useState(false);
    const [ param , setParam ] = useState<string>("copy to clipboard!"); 
    const [ hide , setHide ] = useState(false);

    const saveChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const el = e.target as HTMLInputElement;
        setText(el.value.trim())
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(text);
        setParam("copied:")
    }

    return (
    <div className={style.block}>
        <div id="clipboard" className={style.wrapper}>
            <input onChange={saveChange} className={style.input} type="text" />
            <button onPointerEnter={() => setShow(true)} onPointerLeave={() => {
                setShow(false);
                setHide(false);
                setParam("copy to clipboard!");
            }} onClick={ () => { copyClipboard();  setHide(true) }} className={style.btn}>
                <span>Copy text</span>
            </button>
             <div className={`${show ? style.show : style.hide } ${style.transition}`}>           
                <div className={`${style.tooltip}`}>
                    <p>{`${param} ${hide ? text : ""}`}</p>
                </div>
                <div className={`${style.square}`}></div>
            </div>
        </div>
    </div>
    )
}