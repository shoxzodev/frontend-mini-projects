"use client"

import { selector } from "@/src/store/select";
import style from "./AutoComplete.module.scss"
import React from "react";

export default function AutoComplete() {
    const hide = selector((set:any) => set.hide);
    const main = selector((set:any) => set.main);
    const selected = selector((set:any) => set.selected);
    const changeInput = selector((set:any) => set.changeInput);
    const data = selector((set:any) => set.data);
    const selectors = selector((set:any) => set.selectors);
    const keyboard = selector((set:any) => set.keyboard);
    const closeSelect = selector((set:any) => set.closeSelect);
    const handleSubmit = selector((set:any) => set.handleSubmit);

    return (
        <div onClick={closeSelect} id="closeList" className={style.wrapper}>
            <form onSubmit={handleSubmit} id="closeList" className={style.form}>
                <div className={style.input__wrapper}>
                <input id="changeInput" onChange={changeInput} onKeyDown={keyboard} onClick={selectors} type="text" className={style.input} placeholder="Country"  autoComplete="off"/>
                <div className={hide ? style.list : style.list__hide}>
                    {
                        data.map(
                            (item:{id:number , title:string}) => <button type="button" key={item.id} onClick={main} className={`${selected == item.title ? style.list__item__active : style.list__item__disactive} ${style.list__item}`} name={item.title}>{item.title}</button>
                        )
                    }
                </div>

                </div>
                 <button id="closeList" className={style.btn} type="submit">Submit</button>
            </form>
        </div>
    )
}