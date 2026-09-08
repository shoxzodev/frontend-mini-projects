import { useState } from "react";
import styles from "./Slideshow.module.scss"
import files from "../../utils/files"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SlideShow() {
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
                    <p className={styles.title}>{data.title}</p>
                </div>
            <button onClick={() => changeData("right")} className={styles.rightBtn}>
                <ArrowForwardIosIcon />
            </button>

            <div className={styles.round__wrapper}>
                {
                    files.map(
                        (item:any) => <button onClick={() => setData(item)} className={`${data.id == item.id ? styles.isActive : ""} ${styles.round}`}></button>
                    )
                }
            </div>
        </div>
    )
}