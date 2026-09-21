import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Validation.module.scss"
import checkInput from "../../utils/validation";

export default function Validation() {
    const [ errName , setErrorName ] = useState({
        text:null,
        password:null,
        age:null
    });

    const [state , setState] = useState<boolean>(false)
    const [ visible , setVisible ] = useState<boolean>(false) 
    const [ hide , setHide ] = useState<boolean>(true)
    const navigator = useNavigate();
    function main(e:React.SubmitEvent) {
        e.preventDefault();
        
        setState(true);

        setTimeout(() => {
            navigator("/images/slider")
        } , 2000)
    }

    const togglePassword = () =>
        setHide(current => current ? false : true)

    function changer() {
            setTimeout(() => {
                setVisible(false)
            } , 2000)
        }
    
    if(visible) 
        changer()

    return (
        <div className={style.display}>
            <div className={`${ visible ? style.visibility__visible : style.visibility__hidden } ${style.warning} ${state ? style.color__success : style.color__error}`}> 
               <p>{state ? "S U C C E S S" : "E R R O R"}</p>
               <div className={`${ visible ? style.stick : ""} ${state ? style.stick__success : style.stick__error}`}></div>
            </div>
            <form onSubmit={main} className={style.form}>
                <h1 className={style.heading}>Form:</h1>
                <input className={style.input} onChange={(e:React.ChangeEvent) => checkInput(e , setErrorName)} name="full_name" type="text" minLength={5} maxLength={20} required  placeholder="John Doe"/>
                <p style={{color:"red"}}>{errName.text}</p>
                <div className={style.password}>
                <input className={style.input} onChange={(e:React.ChangeEvent) => checkInput(e , setErrorName)}name="password" placeholder="x04041234A" minLength={5} maxLength={20} required type={ hide ? "password" : "text"} />
                    <button className={style.hide} type="button" onClick={togglePassword}>{hide ? "kozcha" : "yoq"}</button>
                </div>
                <p style={{color:"red"}}>{errName.password}</p>
                <input className={style.input}  onChange={(e:React.ChangeEvent) => checkInput(e , setErrorName)} name="age" type="number" min={0} max={100} placeholder="age" required style={{width:"100px"}} />
                <p style={{color:"red"}}>{errName.age}</p>
                <button onClick={() => setVisible(true)} className={style.submit} type="submit">submit</button>
            </form>
        </div>
    )
}