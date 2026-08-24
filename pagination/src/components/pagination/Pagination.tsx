import type React from 'react';
import styles from "./Pagination.module.scss"
import numbers from "../../utils/numbers"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useLocation, useNavigate } from 'react-router-dom';
import type { paginations } from '../../types/interface';

export default function Pagination({children}:{children:React.ReactNode}) {
    const params = useLocation();
    const navigate = useNavigate();

    function main(e:React.MouseEvent<HTMLButtonElement>) {
        const path = params.pathname
                         .split("/")
                         .slice(2)
                         .join("/")
        const index:number  = numbers.reduce(
            (acc:number , page:paginations , index:number) => {
                
                if(page.path == "/" + path)
                    acc = index    
                
                return acc
            } , 0);
    
            const buttonElement = e.currentTarget as HTMLButtonElement;

            if(buttonElement.name === 'backward') {
                const newIndex = index-1;
                const obj = newIndex < 0 ? numbers[0] : numbers[newIndex]; 
                navigate("/images" + obj.path)
            } else if( buttonElement.name === 'forward' ) {
                const newIndex = index+1;
                console.log(newIndex)
                const obj = newIndex > numbers.length - 1 ? numbers.at(-1) : numbers[index + 1];
                navigate("/images" + obj?.path)
            }
    }


    return (
        <footer className={styles.footer}>
              <button name="backward" onClick={main} className={styles.btn}>
                  <KeyboardDoubleArrowLeftIcon sx={{fontSize:"1.1rem"}} />
              </button>
                  <nav className={styles.nav}>
                    {children}
                  </nav>
              <button onClick={main} name="forward" className={styles.btn}>
                  <KeyboardDoubleArrowRightIcon sx={{fontSize:"1.1rem"}} />
              </button>
        </footer>
    )
}