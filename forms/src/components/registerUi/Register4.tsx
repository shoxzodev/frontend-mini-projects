import style from "./Register.module.scss"
import { multipleStep } from "@/src/store/multiple";

export default function Register4() {
    const input = multipleStep((set:any) => set.input);
    const writeInput = multipleStep((set:any) => set.writeInput);

    return (
        <form>                
            <h1 className={style.title}>Register:</h1>
            <div className={style.form__wrapper}>
                <div className={style.firstName__wrapper}>
                    <h2 className={style.title__name}>Login Info:</h2>
                    <input value={input.username} onChange={writeInput} className={style.input} name="username" type="text" placeholder="Username..."/>
                </div>
                <input value={input.password} onChange={writeInput} className={style.input} type="password" placeholder="Password..." name="password"/>
         
            </div>
        </form>
    )
};