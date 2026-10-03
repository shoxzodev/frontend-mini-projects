"use client"
import { useEffect } from "react";
import { user } from "@/src/store/users/users";
import users from "@/src/database/users";

export default function SortList() {
    const data = user((state:any) => state.data);
    const setData = user((state:any) => state.setData);
    const sorting = user((state:any) => state.sorting);

    useEffect(() => {
        setData(users)
    } , [])

    return(
        <div className="p-3">
            <button onClick={sorting} className="bg-gray-600 mb-2 hover:bg-green-600 cursor-pointer text-white flex justify-center items-center rounded-sm p-[4px_15px]">sort</button>
            <ul className="flex flex-col max-w-100">
                {
                    Array.isArray(data) ? data.map(
                                                item => <li key={item.id} className="border-b border-b-gray-300 py-1 px-2">{item.country.name}</li>

                                            ) :
                                            "...loading"
                }
            </ul>
        </div>
    )
}