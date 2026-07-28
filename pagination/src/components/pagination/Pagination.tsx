import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from "./Pagination.module.css"
import type React from 'react';

export default function Pagination({children}:{children:React.ReactNode}) {
    return (
        <footer className={styles.footer}>
              <button className={styles.btn}>
                  <KeyboardDoubleArrowLeftIcon sx={{fontSize:"1.1rem"}} />
              </button>
                  <nav className={styles.nav}>
                    {children}
                  </nav>
              <button className={styles.btn}>
                  <KeyboardDoubleArrowRightIcon sx={{fontSize:"1.1rem"}} />
              </button>
        </footer>
    )
}