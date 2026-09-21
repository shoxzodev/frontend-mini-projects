import styles from "./Lightbox.module.scss"
import { useState} from "react";
import files from "../../../utils/files"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "../../../components/ui/SlideShowModal"

export default function Lighbox() {
    const [status , setStatus] = useState<boolean>(false)
    const [ data , setData ] = useState(files[0])

    function changeData(type:string) {
        if(type == "left") {
            if(data.id == 1)
                return setData(files[0])

            setData(files[(data.id - 1) - 1])
        } else {
            if(data.id == files.at(-1)?.id)
                return setData(files[0])
        
            setData(files[(data.id - 1) + 1])
        }
    }

    const  closeModal = () => setStatus(false)
 
    return (
        <div>
        <Modal status={status}>
        <div onClick={closeModal} className={styles.cross}>
            <CloseIcon sx={{cursor:"pointer", transition:"0.2s linear" , color:"white", ":hover": { color:"silver" }}} />
        </div>
        <div className={styles.container}>
            <div className={styles.number__wrapper}>
               <span>{ data.id }</span>
               <span> / </span>
               <span>{files.at(-1)?.id}</span>
            </div>
            <button onClick={() => changeData("left")} className={styles.leftBtn}>
                <ArrowBackIosIcon />
            </button>
                <div className={styles.wrapper}>
                    <div className={styles.block}>
                        <img src={data.name} alt={data.name} />         
                    </div>
                    <div className={styles.title}>{data.title}</div>
                </div>
            <button onClick={() => changeData("right")} className={styles.rightBtn}>
                <ArrowForwardIosIcon />
            </button>

            <div className={styles.gallery__wrapper}>
                {
                    files.map(
                        (item:any) => 
                        <div onClick={() => setData(item)} className={`${data.id == item.id ? styles.isActive : ""} ${styles.gallery}`}>
                            <img src={item.name} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
            </Modal>
            <div className={styles.listBox}>
                {
                    files.map(
                        (item:any) => 
                        <div onClick={() => { setData(item); setStatus(true) }} className={`${data.id == item.id ? styles.isActive : ""} ${styles.listBox__item}`}>
                            <img src={item.name} alt="" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}