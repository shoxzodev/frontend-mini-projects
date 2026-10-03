"use client";
import LoginAlertBox from "@/src/components/ui/LoginAlertBox";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import style from "./Login.module.scss";
import { useEffect } from "react";
import { logins } from "@/src/store/login";
import sha256 from "sha256";

export default function Login() {
    const visibility = logins((set:any) => set.visibility);
    const setVisibility = logins((set:any) => set.setVisibility); 
    const status = logins((set:any) => set.status);
    const data = logins((set:any) => set.data);
    const error = logins((set:any) => set.error);
    const sumbitData = logins((set:any) => set.sumbitData);
    const changeInput = logins((set:any) => set.changeInput);
    const changeSaving = logins((set:any) => set.changeSaving);
    const changePassword = logins((set:any) => set.changePassword);
    const setStatus = logins((set:any) => set.setStatus);

    useEffect(() => {
            localStorage.setItem("user" , JSON.stringify({
                user:process.env.NEXT_PUBLIC_USER,
                password:sha256(process.env.NEXT_PUBLIC_PASSWORD as string)
            },null,2));
    } , [])

    return (
        <div className={`${status ? style.indexMinus : ""} ${style.root}`}>
            <button onClick={() => setStatus(true) } className={style.btn}>login</button>
            <LoginAlertBox state={status} closeState={setStatus}>
                <div className={`${status ? style.visible : style.hidden} ${style.box}`}>
                    <div className={style.alertTop}>
                        <button onClick={() => setStatus(false)} className={style.closeBtn}>
                            <CloseIcon />
                        </button>
                    </div>

                    <div className={style.alertImg}>
                        <img className={style.img} src="https://www.w3schools.com/howto/img_avatar2.png"/>
                    </div>

                    <form onSubmit={sumbitData} className={style.form}>
                        <div className={style.input__wrapper}>
                            <h1 className={style.input__title}>Username</h1>
                            <input onChange={changeInput} className={style.input} value={data.user} name="name" type="text" placeholder="Enter Username" />
                            <p className={style.error}>{error.user}</p>
                        </div>
                        <div className={style.input__wrapper}>
                            <h1 className={style.input__title}>Password</h1>
                            <div className={style.password__wrapper}>
                                <input onChange={changeInput} className={`${style.input__password} ${style.input}`} value={data.password} name="password" type={visibility ? "text" : "password"} placeholder="Enter Password"/>
                                <button onClick={setVisibility} className={style.password__visible} type="button">
                                    {visibility  ? <VisibilityIcon sx={{fontSize:"1rem"}} /> : <VisibilityOffIcon sx={{fontSize:"1rem"}} />}
                                </button>
                            </div>
                            <p className={style.error}>{error.password}</p>
                        </div>
                        <button type="submit" className={style.submitBtn}>Login</button>
                    </form>

                    <div className={style.rememeberWrapper}>
                        <input onChange={changeSaving} type="checkbox" id="checked" />
                        <label className={style.checker} htmlFor="checked">Rememeber me</label>
                    </div>
                    
                    <div className={style.alertBottom}>
                        <button onClick={() => setStatus(false)} className={style.cancelBtn}>Cancel</button>
                        <div>
                            <span>Forgot </span>
                            <u className={style.changePassword} onClick={changePassword}>password?</u>
                        </div>
                    </div>
                </div>
            </LoginAlertBox>
        </div>
    )
}