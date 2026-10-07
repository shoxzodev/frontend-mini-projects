"use client"

import PopUpModal from "@/src/components/modalsUi/PopModal";
import { changePrompt, closeWindow, openWindow, savePrompts } from "@/src/store/slices/popup.slice";
import { CloseOutlined } from "@ant-design/icons";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function OpenModal() {
    const dispatch = useDispatch();
    const prompt = useSelector((state:any) => state.popup.prompt);
    const text = useSelector((state:any) => state.popup.text);
    const clear = useRef<HTMLInputElement>(null);

    // save text to prompt
    const savePrompt = () =>  { 
        const inputElement = clear.current as HTMLInputElement;
        
        inputElement.value == "" 
                           ? dispatch(savePrompts(inputElement.value))
                           : dispatch(savePrompts(text));
        
        inputElement.value = "";
        dispatch(closeWindow());
    };

    return (
        <div className="p-3">
            <button onClick={() => dispatch(openWindow())} className="bg-gray-700 text-white px-3 py-1 rounded-sm cursor-pointer hover:bg-gray-600">Open</button>
            <p className="text-red-600">{prompt}</p>
            <PopUpModal clearText={clear}>
                <div className="flex justify-end w-full pt-2 pb-4 px-5 cursor-pointer">
                    <button onClick={ () => dispatch(closeWindow())} className="hover:text-red-500 duration-75 ease-linear cursor-pointer">
                        <CloseOutlined />
                    </button>
                </div>
                <div className="flex">
                    <input ref={clear} onChange={(e:React.ChangeEvent<HTMLInputElement>) => dispatch(changePrompt(e.target.value))} className="bg-white border-black px-3 py-1" placeholder="write some text.." type="text" />
                    <button onClick={savePrompt} className="bg-gray-700 text-white px-3 py-1 cursor-pointer hover:bg-gray-600">save</button>
                </div>    
            </PopUpModal>
        </div>
    )
};