import styles from "./FlimImage.module.scss"
import tiger from "../../assets/tiger.jpg"

export default function FlipImage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.first}>
                    <img className={styles.img} src={tiger} alt="tiger image" />
                </div>
                <div className={styles.second}>
                    <h1>Lion</h1>
                    <p>Lion is the most dangerous animal</p>
                </div>
            </div>
        </div>
    )
}