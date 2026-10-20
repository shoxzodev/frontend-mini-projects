"use client"

import Header from "@/src/components/header/Header";
import store from "@/src/store/store";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function More({children}:{children:React.ReactNode}) {
    const [ mount , setMount ] = useState(false)

    useEffect(() => {
        setMount(true)
    } , [mount])


    if(!mount)
        return null

    
    return (
        <Provider store={store}>
            <Header />
            <div className="h-full pt-50">
                {children}
            </div>
        </Provider>
    )
}