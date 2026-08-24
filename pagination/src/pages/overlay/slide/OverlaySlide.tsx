import style from "./OverlaySlide.module.scss"
import memeber from "../../../assets/member.png"
import { useReducer } from "react";
import reducers from "../../../utils/reducers";

export default function OverlaySlide() {
    const [ state , dispatch ] = useReducer(reducers.reducer , reducers.initialState);

    const openTop = () => dispatch({type:"open_top"});
    const closeTop = () => dispatch({type:"close_top"});

    const closeBottom = () => dispatch({type:"close_bottom"});
    const openBottom = () => dispatch({type:"open_bottom"});

    const closeLeft = () => dispatch({type:"close_left"});
    const openLeft = () => dispatch({type:"open_left"});

    const closeRight = () => dispatch({type:"close_right"});
    const openRight = () => dispatch({type:"open_right"});

    return (
        <div className={style.block}>
            <div>
                <h1>Example</h1>
                <p>Slide in (top)</p>
                <div onMouseEnter={openTop} onMouseLeave={closeTop} className={style.block__top}>
                    <img style={{height:"auto"}} className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${style.position__top} ${state.top_status ? style.open : style.close }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Example</h1>
                <p>Slide in (bottom)</p>
                <div onMouseEnter={openBottom} onMouseLeave={closeBottom} className={style.block__bottom}>
                    <img style={{height:"auto"}} className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${style.position__bottom} ${state.bottom_status ? style.open : style.close }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>

             <div className={style.block__wrapper}>
                <h1>Example</h1>
                <p>Slide in (left)</p>
                <div onMouseEnter={openLeft} onMouseLeave={closeLeft} className={style.block__left}>
                    <img style={{height:"auto"}} className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${style.position__left} ${state.left_status ? style.openWidth
                         : style.closeWidth }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Example</h1>
                <p>Slide in (right)</p>
                <div onMouseEnter={openRight} onMouseLeave={closeRight} className={style.block__right}>
                    <img style={{height:"auto"}} className={style.img} src={memeber} alt="memeber img" />
                    <div className={`${style.reverse} ${style.position__right} ${state.right_status ? style.openWidth : style.closeWidth }`}>
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
        </div>
    )
}