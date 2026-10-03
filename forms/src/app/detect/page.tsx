"use client"

import { colors } from "@mui/material";
import { useState } from "react";
import fa from "zod/v4/locales/fa.cjs";

export default function DetectCapsLock() {
    const [ state , setState ] = useState<boolean>(false);
    function detect(e:React.KeyboardEvent<HTMLInputElement>) {
        if(e.getModifierState("CapsLock"))
          return  setState(true)

        setState(false)
    }
    
    return (
        <div style={{padding:"10px"}}>
            <input style={{padding:"5px"}} onKeyDown={detect} type="text" placeholder="...some text here" />
            <p style={{color:"red"}}>{state ? "please turn off the CapsLock" : ""}</p>
        </div>
    )
}