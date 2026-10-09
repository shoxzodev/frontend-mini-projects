"use client";

import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import React, { useRef, useState } from "react";

export default function ToDoList() {
    const [ list , setList ] = useState<{id:number , title:string , active:boolean}[]>([]);
    const [ text , setText ] = useState<string>("");
    const inputItem = useRef<HTMLInputElement>(null);

    const addList = () => {
        const inputElement = inputItem.current as HTMLInputElement;

        if(inputElement.value.trim() == "")
            return

        setList((current) => {
            return [
                ...current,
                { id: current.length > 0 ? current.at(-1)!.id + 1 : 1 , title:text , active:true }
            ]
        });
        
        inputElement.value = "";
    };

    const writeText = (e:React.ChangeEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;
        setText(element.value.trim());
    }

    function deleteIcon(id:number , e:React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        const filter = list.filter(item => item.id !== id);
        setList(filter);
    }

    const disActive = (id:number) => {
        const filter = list.reduce( ( acc:any , item:any ) => {
            
        if(item.id == id)       
            acc.push({ id:item.id , title:item.title , active:item.active ? false : true });
        else
            acc.push(item)

                return acc
        } , [] );

        setList(filter);
    };


    return (
        <div className="p-4">
            <div className="border-2 max-w-250 m-auto h-125 overflow-auto hide-trace">
                <div className="bg-red-600 px-10 py-5">
                    <h1 className="text-white text-[2rem] text-center mb-2">My To Do List</h1>
                    <div className="flex">
                        <input ref={inputItem} onChange={writeText} className="bg-white border-none outline-0 p-2 border w-full" type="text" placeholder="Title..." />
                        <button onClick={addList} className="p-3 bg-gray-200 cursor-pointer w-20 hover:bg-gray-400 hover:text-white">Add</button>
                    </div>
                </div>
                    <ul className="flex flex-col">
                    { list.length > 0 ? list.map((item) => 
                            <li id="list" onClick={() => disActive(item.id)} className={`${item.active ? "odd:bg-gray-200" : "bg-gray-500 text-white hover:bg-gray-500"} cursor-pointer pl-5 hover:bg-gray-300 duration-75 flex items-center gap-2`} key={item.id}>
                                <button className="pt-2">
                                    <CheckOutlined />
                                </button>
                                <div className="flex justify-between items-center w-full">
                                    <span className={`text-[1.5rem] ${item.active ? "" : "line-through"}`}>{item.title}</span>
                                    <button className="text-[0.8rem] cursor-pointer hover:text-white duration-75 hover:bg-red-600 py-4 px-5" name="delete" onClick={(e:React.MouseEvent<HTMLButtonElement>) => deleteIcon(item.id , e)}>
                                        <CloseOutlined />
                                    </button>
                                </div>
                            </li>) 
                    : "" }
                    </ul>
            </div>
        </div>
    )
}