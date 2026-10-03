"use client"

import style from "./MultipleForm.module.scss"
import page from "@/src/database/page";
import Register1 from "@/src/components/registerUi/Register1";
import Register2 from "@/src/components/registerUi/Register2";
import Register3 from "@/src/components/registerUi/Register3";
import Register4 from "@/src/components/registerUi/Register4";
import { multipleStep } from "@/src/store/multiple";

export default function MultipleForm() {
    const paginate = multipleStep((set:any) => set.paginate);
    const changePagination = multipleStep((set:any) => set.changePagination);

    return (
        <div className={style.wrapper}>
            <div className={style.form}>        
                { paginate == "register1" ? <Register1 /> 
                : paginate == "register2" ? <Register2 /> 
                : paginate == "register3" ? <Register3  /> 
                : <Register4  />
                }
                <div className={style.button__wrapper}>
                    <div className={style.button__container}>
                        {
                           paginate !== "register1" 
                           ? <button onClick={changePagination} name="previous" type="button" className={`${style.previous} ${style.button}`}>Previous</button>
                           : ""
                        }
                        <button onClick={changePagination} name="next" type="button" className={style.button}>Next</button>
                    </div>
                </div>
                <div className={style.position__wrapper}>
                    {
                        page.map(
                            item => <div key={item.id} id={item.path} className={ paginate == item.path ? style.roundBtn__active : style.roundBtn}></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}