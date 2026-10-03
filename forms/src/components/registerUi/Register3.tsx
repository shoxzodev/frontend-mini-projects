import style from "./Register.module.scss"
import { multipleStep } from "@/src/store/multiple";

export default function Register3() {
    const input = multipleStep((set:any) => set.input);
    const writeInput = multipleStep((set:any) => set.writeInput);

    return (
        <form>                
            <h1 className={style.title}>Register:</h1>
            <div className={style.form__wrapper}>
                <div className={style.firstName__wrapper}>
                    <h2 className={style.title__name}>Birthday:</h2>
                    <input value={input.day} onChange={writeInput} className={style.input} name="day" type="text" placeholder="dd"/>
                </div>
                <input value={input.month} onChange={writeInput} className={style.input} type="text" placeholder="mm" name="month"/>
                <input value={input.year} onChange={writeInput} className={style.input} type="text" placeholder="year" name="year"/>
            </div>
        </form>
    )
};