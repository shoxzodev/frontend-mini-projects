import { NavLink, Outlet } from "react-router-dom";
import style from "./SlideShowLayput.module.scss"

export default function SlideShowLayout() {
    return (
        <div>
            <nav className={style.nav}>
                <NavLink className={({isActive}) => (isActive ? style.nav__items__active : style.nav__items)} title="this is the slide show page" to={"/images/slideshow"} end>slideshow</NavLink>
                <NavLink className={({isActive}) => (isActive ? style.nav__items__active : style.nav__items)} to={"/images/slideshow/gallery"} title="this is the slide show gallery page" end>slideshow gallery</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}