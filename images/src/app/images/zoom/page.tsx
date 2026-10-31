"use client";
import styles from "@/src/app/images/zoom/zoom.module.scss";
import React, { useRef } from "react";

export default function Zoom() {
    const image = useRef<HTMLImageElement>(null);
    const magnificier = useRef<HTMLDivElement>(null);
    const rectangular = useRef<HTMLDivElement>(null);


    const showImagePosition = (e:React.MouseEvent<HTMLImageElement>) => {
        const magnificierElement = magnificier.current as HTMLDivElement;
        const rectangulars = rectangular.current as HTMLDivElement;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        rectangulars.style.left = x + "%"; 
        rectangulars.style.top = y + "%";
        magnificierElement.style.backgroundPosition = x + "%" + y + "%"; // x position
    }
    
    return (
        <div className={styles.zoom}>
            <div className={styles.flex}>
                <div className={styles.zoom__main}>
                    <div ref={rectangular} className={styles.rect}></div>
                    <img onMouseMove={showImagePosition} ref={image} className={styles.zoom__img} src="https://www.w3schools.com/howto/img_girl.jpg" alt="" />
                </div>
                <div ref={magnificier} className={styles.zoom__img__background}></div>
            </div>
        </div>
    )
}