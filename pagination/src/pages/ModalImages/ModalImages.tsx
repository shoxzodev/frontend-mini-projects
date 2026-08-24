import type React from "react"
import tigger  from "../../assets/tiger.jpg"
import styles from "./ModalImages.module.scss"
import { createPortal } from "react-dom"
import { useState } from "react"
import ClearIcon from '@mui/icons-material/Clear';


function Modal({children , body , modalStatus}:{children:React.ReactNode , body:HTMLElement , modalStatus:boolean}) {
    return createPortal(
        <div className={ modalStatus ? styles.block : styles.none }>
            { children }
        </div>,
        body
    )
}

export default function ModalImages() {
    const [ status , setStatus ] = useState<boolean>(false)

    return (
        <div>
            <Modal modalStatus={status} body={document.body}>
                <div className={styles.modal_croos_block}>
                    <button onClick={() => setStatus(false)} className={styles.close_btn}>
                        <ClearIcon sx={{fontSize:"30px" }}/>
                    </button>
                </div>
                <div className={styles.image_block}>
                    <div className={styles.block_pos}>
                        <img className={styles.modal_img} src={tigger} alt="tigger image" />
                        <p className={styles.img_title}>snow</p>
                    </div>
                </div>
            </Modal> 
            <img onClick={() => setStatus((current:boolean) => current ? false : true )} className={styles.tigger} src={tigger} alt="tigger image" />
        </div>
    )
}