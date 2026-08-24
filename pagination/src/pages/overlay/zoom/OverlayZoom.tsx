import style from "./OverlayZoom.module.scss"
import reducers from "../../../utils/reducers"
import { useReducer } from "react";
import memeber from "../../../assets/member.png"

export default function OverlayZoom() {
    const [ state , dispatch ] = useReducer(reducers.reducer , reducers.initialState);
    const openZoom = () => dispatch({type:"open_zom"})
    const closeZoom = () => dispatch({type:"close_zom"})
    

    return (
         <div className={style.block}>
                <div onMouseEnter={openZoom} onMouseLeave={closeZoom} className={style.block__text}>
                    <img className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${state.zom_status ? style.text__show : style.text__hide }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
    )
}