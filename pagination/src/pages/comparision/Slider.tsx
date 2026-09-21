import type React from "react";
import style from "./Slider.module.scss"
import { useState } from "react";

export default function Slider() {
    const [ limit , setLimit ] = useState<boolean>(false) 

    function main(e:React.PointerEvent) {
        const x = e.target as HTMLElement;
        x.setPointerCapture(e.pointerId);
        setLimit(true)
    }
    
    function master() {
        setLimit(false)
    }

    function limmiter() {
        let k = 0;

        return () => {
            k += 5;
            return k
        }
    }

    let s = limmiter();

    function prime(e:React.PointerEvent) {
        if(!limit)
            return
        const x = e.target as HTMLElement;
        const z = x.parentElement as HTMLElement;

        if(e.clientX <= 1331)
            z.style.width = `${700-s()}px`
    }

    return (
    <div id="parrent" className={style.container}>
        <div className={style.left}></div>
        <div className={style.right}>
            <button onPointerDown={main} onPointerMove={prime} onPointerUp={master} className={style.btn}></button>
        </div>
    </div>
    )
}