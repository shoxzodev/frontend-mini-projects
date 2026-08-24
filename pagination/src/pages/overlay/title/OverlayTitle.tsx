import style from "./OverlayTItle.module.scss"
import reducers from "../../../utils/reducers"
import { useReducer } from "react";
import memeber from "../../../assets/member.png"

export default function OverlayTitle() {
    const [ state , dispatch ] = useReducer(reducers.reducer , reducers.initialState);
    const openTitle = () => dispatch({type:"open_title"})
    const closeTitle = () => dispatch({type:"close_title"})
    
    return (
        <div className={style.block}>
                <div onMouseEnter={openTitle} onMouseLeave={closeTitle} className={style.block__text}>
                    <img className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${state.zom_status ? style.text__show : style.text__hide }`}>
                        <p>Hello World</p>
                    </div>
                </div>
        </div>
    )
}