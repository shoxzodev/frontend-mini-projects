import type React from "react";
import styles from "./BreadCrupms.module.scss";

export default function BreadCrupms({children}:{children:React.ReactNode}) {
    return (
        <header className={styles.header}>
            <nav>
                {children}
            </nav>
        </header>
    )
}