import style from "./Register.module.scss"
import { multipleStep } from "@/src/store/multiple";

export default function Register2() {
    const input = multipleStep((set:any) => set.input);
    const writeInput = multipleStep((set:any) => set.writeInput);

    return (
        <form>                
            <h1 className={style.title}>Register:</h1>
            <div className={style.form__wrapper}>
                <div className={style.firstName__wrapper}>
                    <h2 className={style.title__name}>Contact Info:</h2>
                    <input value={input.email} onChange={writeInput} className={style.input} name="email" type="email" placeholder="E-mail..."/>
                </div>
                <input value={input.phoneNumber} onChange={writeInput} className={style.input} type="tel" placeholder="Phone..." name="phoneNumber"/>
            </div>
        </form>
    )
};