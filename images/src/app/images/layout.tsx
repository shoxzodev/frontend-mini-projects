import style from "@/src/app/images/image.module.scss"

export default function ImageLayout({children}:{children:React.ReactNode}) {
    return (
        <div className={style.images__layout}>
            { children }
        </div>
    )
}