"use client";
import styles from "@/src/app/images/magnificer/glas/glass.module.scss"
import { useRef } from "react";

export default function MagnificierGlas() {
    const magnificer = useRef<HTMLDivElement>(null);

    const changeMagificerFace = (e:React.MouseEvent<HTMLImageElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const magnificierElement = magnificer.current as HTMLDivElement;
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        e.currentTarget.style.cursor = "none";

        magnificierElement.style.top = y + "%";
        magnificierElement.style.left = x + "%";
        magnificierElement.style.backgroundPosition = x + "%" + y + "%"; // x position
    }

    return (
        <div className={styles.glas}>
            <div className={styles.glas__wrapper}>
                <img onMouseMove={changeMagificerFace} className={styles.glas__img} src="https://www.w3schools.com/howto/img_girl.jpg" alt="" />
                <div ref={magnificer} className={styles.magnificer}></div>
            </div>
        </div>
    )
}