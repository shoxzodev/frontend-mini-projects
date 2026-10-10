"use client";
import { useEffect, useState } from "react";

export default function CountDownTimer() {
    const [ mount , setMount ] = useState(false);
    
    useEffect(() => {
        setMount(true);
    } , [mount])

    if(!mount)
        return null

    
    return (
        <div>
            <p></p>
        </div>
    )
}