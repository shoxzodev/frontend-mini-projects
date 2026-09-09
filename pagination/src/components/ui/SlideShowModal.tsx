import { createPortal } from "react-dom";
import styles from "./SlideShowModal.module.scss"
import type { ReactNode } from "react";

export default function Modal({children , status}:{children:ReactNode , status:boolean}) {
    return createPortal(
    <div className={ status ? styles.container__wrapper : styles.container__display}>
      <div className={styles.preContainer}>
            {children}
      </div>
    </div>,
        document.body
    )
}