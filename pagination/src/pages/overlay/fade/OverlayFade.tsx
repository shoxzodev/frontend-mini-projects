import style from "./OverlayFade.module.scss"
import memeber from "../../../assets/member.png"
import { useReducer } from "react";
import reducers from "../../../utils/reducers"

export default function OverlayFade () {
    const [ state , dispatch ] = useReducer(reducers.reducer , reducers.initialState);
    const openText = () => dispatch({type:"open_text"});
    const closeText = () => dispatch({type:"close_text"});
    const openBox = () => dispatch({type:"open_box"});
    const closeBox = () => dispatch({type:"close_box"});

    return (
       <div className={style.block}>
            <div>
                <h1>Example</h1>
                <p>Fade in (text)</p>
                <div onMouseEnter={openText} onMouseLeave={closeText} className={style.block__text}>
                    <img className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${state.text_status ? style.text__show : style.text__hide }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Example</h1>
                <p>Fade in a (box)</p>
                <div onMouseEnter={openBox} onMouseLeave={closeBox} className={style.block__box}>
                    <img className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.block__reverse} ${state.box_status ? style.bg__show  : style.bg__hide}`}>
                        <p className={state.box_status ? style.text__show : style.text__hide }>John</p>
                    </div>
                </div>
            </div>
        </div>
    )
}