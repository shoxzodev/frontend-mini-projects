"use client";
import LoginAlertBox from "@/src/components/ui/LoginAlertBox";
import style from "./Login.module.scss"
import { useState } from "react";

export default function Login() {   
    const [ status , setStatus ] = useState<boolean>(false);
    return (
        <div style={{}}>
            <button onClick={() => setStatus(true) } className={style.btn}>login</button>
            <LoginAlertBox status={status}>
                <p>alert box</p>
            </LoginAlertBox>
        </div>
    )
}