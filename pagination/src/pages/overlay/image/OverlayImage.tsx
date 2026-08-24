import style from "./OverlayImage.module.scss"
import reducers from "../../../utils/reducers"
import { useReducer } from "react";
import memeber from "../../../assets/member.png"
import members from "../../../assets/members.png"

export default function OverlayImage() {
    const [ state , dispatch ] = useReducer(reducers.reducer , reducers.initialState);
    const openImage = () => dispatch({type:"open_img"})
    const closeImage = () => dispatch({type:"close_img"})
    

    return (
         <div className={style.block}>
                <div onMouseEnter={openImage} onMouseLeave={closeImage} className={style.block__text}>
                    <img className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${state.image_status ? style.text__show : style.text__hide }`}>
                            <img height={200} width={200} src={members} alt="" />
                    </div>
                </div>
            </div>
    )
}