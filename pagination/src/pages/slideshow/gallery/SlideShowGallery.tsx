import { useState } from "react";
import styles from "./SlideShowGallery.module.scss"
import files from "../../../utils/files"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SlideShowGallery() {
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

    return (
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
    )
}