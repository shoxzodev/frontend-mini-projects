import gallery_list from "../../utils/gallery.list"
import styles from "./Gallery.module.scss"

export default function Gallery() {
    return (
        <div className={styles.container}>
           { gallery_list.map( (gallery:{id:number , img_url:string}) => (
                <div key={gallery.id} className={styles.wrapper}>
                    <a  href={`https://www.w3schools.com/howto/`+gallery.img_url } target="_blank">
                        <img className={styles.gallery_img} src={`https://www.w3schools.com/howto/`+gallery.img_url } alt={gallery.img_url.split('.')[0]} />
                    </a>
                    <div className={styles.parag}>
                        <p className={styles.text}>  
                            Add a description of the image here
                        </p>
                    </div>
                </div>
           ) ) }  
        </div>
    )
}