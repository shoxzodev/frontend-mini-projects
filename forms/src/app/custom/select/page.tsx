"use client"

import style from "./CustomSelect.module.scss"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { selector } from "@/src/store/select";
import customSelect from "@/src/database/customSelect";

export default function CustomSelect() {
    const selected = selector((set:any) => set.selected);
    const hide = selector((set:any) => set.hide);
    const selectors = selector((set:any) => set.selectors);
    const keyboard = selector((set:any) => set.keyboard);
    const closeSelect = selector((set:any) => set.closeSelect);
    const main = selector((set:any) => set.main);

    return (
        <div onClick={closeSelect} id="close" className={style.container}>
            <button name="selector" onKeyDown={keyboard} onClick={selectors} className={style.selector}>
                <span>{selected}</span>
                <ArrowDropDownIcon />
            </button>
            <div className={hide ? style.wrapper: style.wrapper__hide}>
                {
                    customSelect.map(
                        item => <button key={item.id} onClick={main} name={item.title} className={ selected == item.title ?  style.wrapper__item__active : style.wrapper__item }>{item.title}</button>
                    )
                }
            </div>
        </div>
    )
}