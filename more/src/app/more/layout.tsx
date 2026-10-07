"use client"

import store from "@/src/store/store";
import React from "react";
import { Provider } from "react-redux";

export default function More({children}:{children:React.ReactNode}) {
    return (
        <Provider store={store}>
            <div className="h-full">
                {children}
            </div>
        </Provider>
    )
}