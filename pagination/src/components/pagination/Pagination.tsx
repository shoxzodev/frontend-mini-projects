import type React from 'react';
import styles from "./Pagination.module.css"
import numbers from "../../utils/numbers"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Pagination({children}:{children:React.ReactNode}) {
    const params = useLocation();
    const navigate = useNavigate();
    const path = params.pathname.split('/')[2];    
    const index:number = numbers.reduce( ( acc:number , item , index) => {
        if (item.path == "/" + path)
            acc = index

        return acc
    } , 0 );
    
    return (
        <footer className={styles.footer}>
              <button onClick={() => navigate("/images" +  numbers[index-1].path ) } className={styles.btn}>
                  <KeyboardDoubleArrowLeftIcon sx={{fontSize:"1.1rem"}} />
              </button>
                  <nav className={styles.nav}>
                    {children}
                  </nav>
              <button onClick={() => navigate("/images" +  numbers[index+1].path)} className={styles.btn}>
                  <KeyboardDoubleArrowRightIcon sx={{fontSize:"1.1rem"}} />
              </button>
        </footer>
    )
}