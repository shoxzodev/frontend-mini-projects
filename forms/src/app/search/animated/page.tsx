import style from "./AnimatedSearch.module.scss"
import SearchIcon from '@mui/icons-material/Search';

export default function AnimatedSearch() {
    return (
        <div className={style.block}>
            <div className={style.wrapper}>
                <button className={style.btn}>
                    <SearchIcon sx={{fontSize:"1rem" , color:"white"}} />
                </button>
                <input className={style.searchInput} type="text" placeholder="Search..." spellCheck={false} />
            </div>
        </div>
    )
}