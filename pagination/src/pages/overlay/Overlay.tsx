import { NavLink, Outlet } from "react-router-dom";
import styles from "./Overlay.module.scss"
import { useState } from "react";
import type { overlayLists } from "../../types/interface"
import overlayList from "../../utils/overlayList";
export default function Overlay() {
    const [ status, setStatus ] = useState<boolean>(false);
    
    const toggleList = () => 
        setStatus(
            (current:boolean) => current ? false : true
        )

    return (
        <div>
            <button onClick={toggleList}>open</button>
            <nav className={`${styles.list} ${status ? styles.list__show : styles.list__hide}`}>
                {overlayList.map(
                    (list:overlayLists) => <NavLink key={list.id} to={"/images/overlay" + list.path} className={({isActive}) => (isActive ? `${styles.list__items} ${styles.active}` : `${styles.list__items}` )}>{list.name}</NavLink>
                )}
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}