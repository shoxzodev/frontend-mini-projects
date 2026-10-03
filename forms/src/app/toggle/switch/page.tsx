"use client"
import style from "./Swtch.module.scss" 

import { useState } from "react";

export default function ToggleSwitch() {
    const [ toggle1 , setToggle1 ] = useState<boolean>(false);
    const [ toggle2 , setToggle2 ] = useState<boolean>(false);

    return (
        <div className={style.wrapper}>
          <button className={`${toggle1 ? style.toggle1__color__blue : style.toggle1__color__silver} ${style.toggle1}`} onClick={() => setToggle1((current) => current ? false : true)}>
            <div className={`${style.toggle1__cube} ${toggle1 ? style.toggle1__cube__right : style.toggle1__cube__left}`}></div>
          </button>
          <button className={`${toggle2 ? style.toggle2__color__blue : style.toggle2__color__silver} ${style.toggle2}`} onClick={() => setToggle2((current) => current ? false : true)}>
            <div className={`${style.toggle2__cube} ${toggle2 ? style.toggle2__cube__right : style.toggle2__cube__left}`}></div>
          </button>
        </div>
    )
}