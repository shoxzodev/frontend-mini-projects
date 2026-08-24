import style from "./Thumbnails.module.scss"
import tiger from "../../assets/tiger.jpg"

export default function Thubnails() {
    return (
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={style.wrapper__block}>
                <img src={tiger} alt="tiger images" />
            </div>
        </div>
    </div>
    )
}