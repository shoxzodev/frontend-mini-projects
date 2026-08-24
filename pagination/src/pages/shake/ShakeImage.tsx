import style from "./ShakeImage.module.scss" 
import tigger from "../../assets/tiger.jpg"

export default function ShakeImage() {
    return (
        <img src={tigger} className={style.shaking} />
    )
}