"use client"

import users from "@/src/database/users";
import { DeleteFilled } from "@ant-design/icons";
import { useState } from "react";

export default function ClosableIcons() {
    const [ data , setData ] = useState<{id:number , name:string}[]>(users);

    const deleteItem = (id:number) => {
        const filter = data.filter(item => item.id != id);
        setData(filter);
    }

    return (
        <div className="pt-4">
            <ul className={`flex flex-col ${data.length > 0 ? "border border-gray-200" : ""} max-w-150 m-auto`}>
                {
                    data.length >= 0 ? data.map(
                        item => <li className="cursor-pointer bg-gray-50 hover:bg-gray-100 pl-3 flex justify-between items-center border-t-0 border-x-0 border-b-gray-200 border" key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => deleteItem(item.id)} className="hover:bg-gray-300 text-red-500 text-[1rem] py-2 px-3 cursor-pointer">
                                <DeleteFilled />
                            </button>
                        </li>
                    )
                    : ""
                }
            </ul>
        </div>
    )
}