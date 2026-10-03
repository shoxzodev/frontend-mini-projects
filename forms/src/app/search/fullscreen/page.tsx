"use client"
import style from "./FullScreenSearch.module.scss"
import { useRef, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function FullScreenSearch() {
    const item = useRef<HTMLDivElement>(null);
    const [ hide , setHide ] = useState<boolean>(true);

    function openFullScreen() {
        item.current?.requestFullscreen();
    }

    function closFullScreen() {
        document.exitFullscreen()
    }

    item.current?.addEventListener("fullscreenchange" , (e) => {
        if(!document.fullscreenElement) {
            setHide(true)
        }
    })

    return (
        <div>
            <button onClick={() => {
                openFullScreen()
                setHide(false)
            }}>Open Search Box</button>
            <div ref={item} className={`${hide ? style.hidden : style.show } ${style.fullscreen}`}>
                <button onClick={closFullScreen} className={style.closeBtn}>
                    <CloseIcon />
                </button>
                <div className={style.wrapper}>
                    <input className={style.searchInput} type="text" placeholder="Search..." spellCheck={false} />
                    <button className={style.btn}>
                        <SearchIcon sx={{fontSize:"1rem" , color:"white"}} />
                    </button>
                </div>
            </div>
        </div>
    )
}