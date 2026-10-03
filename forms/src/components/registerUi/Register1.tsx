import style from "./Register.module.scss"
import { multipleStep } from "@/src/store/multiple";

export default function Register1() {
        const input = multipleStep((set:any) => set.input);
    const writeInput = multipleStep((set:any) => set.writeInput);
    return (
        <form>                
            <h1 className={style.title}>Register:</h1>
            <div className={style.form__wrapper}>
                <div className={style.firstName__wrapper}>
                    <h2 className={style.title__name}>Name:</h2>
                    <input value={input.firstName} onChange={writeInput} className={style.input} name="firstName" type="text" placeholder="First name..."/>
                </div>
                <input value={input.lastName} onChange={writeInput} className={style.input} type="text" placeholder="Last name..." name="lastName"/>
            </div>
        </form>
    )
}