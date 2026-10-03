"use client"

import users from "@/src/database/users";
import { user } from "@/src/store/users/users";
import { useEffect } from "react";

export default function Filter() {
    const data = user((state:any) => state.data);
    const setData = user((state:any) => state.setData);
    const filterUser = user((state:any) => state.filterUser);

    useEffect(() => setData(users) , [])

    return (
        <div className="max-w-100 p-2">
            <input onChange={filterUser} className="searchInput" type="search" placeholder="Search for names.." />
            <ul className="flex flex-col ">
                {
                    Array.isArray(data) ?  data.map(
                                                item => <li key={item.id} className="px-2 py-2 cursor-pointer bg-gray-200 border border-[silver] text-[1rem] hover:bg-gray-300 duration-150">{item.name}</li>
                                            ) :
                                            "...loading"
                }
            </ul>
        </div>
    )
}