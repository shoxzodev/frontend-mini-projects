"use client"

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Collapsble() {
    const [ hide , setHide ] = useState<boolean>(false);
    const changeVisibility = () => setHide(current => current ? false : true);

    return (
        <div className="max-w-200 m-auto py-10">
            <div onClick={changeVisibility} className="flex items-center justify-between px-4 py-3 bg-gray-500 hover:bg-gray-600 duration-100 cursor-pointer">
                <span className="text-white text-[1rem]">Collapsible</span>
                <span className="text-white text-[0.7rem] font-extrabold">
                    {hide ? <MinusOutlined /> : <PlusOutlined />}
                </span>
            </div>
            <p className={`duration-250 ease-in-out px-4 bg-gray-200 ${hide ? "h-30 py-3" : "h-0"} overflow-y-hidden`}>
                Some collapsible content. Click the button to toggle between showing and hiding the collapsible content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    )
}