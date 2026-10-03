"use client"

import { isValid } from "@/src/store/validation";
import style from "./PasswordValidation.module.scss"
import errorList from "@/src/database/errorList";
import { useFormik } from "formik";

export default function() {
    const errors = isValid((state:any) => state.errors);
    const visibility = isValid((state:any) => state.visibility);
    const validation = isValid((state:any) => state.validation);
    const closeValidation = isValid((state:any) => state.closeValidation);
    const password = isValid((state:any) => state.password);


    const formik = useFormik({
        initialValues: { username:"" },

        validate:(values) => {
            const err:{username?:string} = {};
            const username = values.username.trim();

            if(username.length < 8)
                err.username = "at least 8 characters required"

            if(username.match(/[0-9]/))
                err.username = "numbers not permited for username"

            return err
        },

        onSubmit:(values) => {
            for( let i in errors )
                if(!errors[i])
                    return
            
            const userList:{user:string , password:string}[] = JSON.parse(localStorage.getItem("userLIst") as string);
            userList.push({user: values.username , password })
            localStorage.setItem("userLIst" , JSON.stringify(userList));

            alert("you are registred successfully")
        }
    });

    return (
        <div className={style.wrapper}>
            <form onSubmit={formik.handleSubmit} className={style.form}>
                <div className={style.password__wrapper}>
                    <label htmlFor="username">Username</label>
                    <input className={style.input} value={formik.values.username} onChange={formik.handleChange} type="text" name="username" id="username" />
                    <p className={style.fail}>{formik.errors.username}</p>
                </div>
                <div className={style.password__wrapper}>
                    <label htmlFor="password">Password</label>
                    <input className={style.input} onBlur={closeValidation} onFocus={validation} onChange={validation} type="password" name="password" id="password" />
                </div>

                <button className={style.submitBtn} type="submit">Submit</button>
            </form>

            <div className={ `${visibility ? "" : style.table__hide} ${style.table}`}>
                <h2 className={style.title}>Password must contain the following</h2>
                <div className={style.error__list}>
                    {
                        errorList.map(item => 
                            <div key={item.id} className={style.error__item}>
                                <span className={errors[item.path] ? style.success : style.fail}>{ errors[item.path] ? "✔" : "✖"}</span> <span className={errors[item.path] ? style.success : style.fail}>{item.title}</span>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}