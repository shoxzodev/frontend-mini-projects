"use client"

import React, { useState } from "react";
import style from "./Checkbox.module.scss"
import radioInfo from "@/src/database/radioInfo";

export default function Checkbox() {
    const [ visible , setVisible ] = useState<string>("first");
    
    function changeVisibility(e:React.MouseEvent<HTMLDivElement>) {
        const el = e.currentTarget as HTMLDivElement;
        setVisible(el.id)
    }

    return (
        <div className={style.wrapper}>
            <input className={style.checkbox} type="checkbox" />

        <div className={style.radio__wrapper}>
            {
                radioInfo.map((item:{id:number , name:string}) => {
                    return <div id={item.name} onClick={changeVisibility} className={style.radio__parent}>
                                <div key={item.id} className={style.radio}>
                                    <div className={`${visible == item.name ? "" : style.radio__hidden } ${style.radio__child}`}></div>
                                </div>
                                <p className={style.list}>{item.name}</p>
                            </div>
                })
            }
        </div>
        </div>
    )
}