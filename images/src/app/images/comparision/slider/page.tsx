"use client"

import styles from "@/src/app/images/comparision/slider/comparision.module.scss"
import { useRef, useState } from "react";

export default function ComparisionSlider() {
    const [position, setPosition] = useState(50); // позиция в процентах
    const wrapper = useRef<HTMLDivElement>(null);
    const active = useRef(false);

    function update(clientX: number) {
        const rect = wrapper.current!.getBoundingClientRect();
        const percent = ((clientX - rect.left) / rect.width) * 100;
        setPosition(Math.min(100, Math.max(0, percent)));
    }

    function downCapture(e: React.PointerEvent<HTMLButtonElement>) {
        e.currentTarget.setPointerCapture(e.pointerId);
        active.current = true;
        update(e.clientX);
    }

    function moveCapture(e: React.PointerEvent<HTMLButtonElement>) {
        if (!active.current) return;
        update(e.clientX);
    }

    function cancelPointer() {
        active.current = false;
    }

    return (
        <div className={styles.slider}>
            <div ref={wrapper} className={styles.slider__wrapper}>
                <div className={styles.slider__right}>After</div>

                <div
                    className={styles.slider__left}
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    Before
                </div>

                <button
                    className={styles.btn}
                    style={{ left: `${position}%` }}
                    onPointerDown={downCapture}
                    onPointerMove={moveCapture}
                    onPointerUp={cancelPointer}
                    onPointerCancel={cancelPointer}
                />
            </div>
        </div>
    )
}