"use client"

import users from "@/src/database/users";
import { user } from "@/src/store/users/users";
import { useEffect } from "react";

export default function Table() {
    const data = user((state:any) => state.data);
    const setData = user((state:any) => state.setData);
    const sortByName = user((state:any) => state.sortByName);

    useEffect(() => {
        setData(users)
    } , [])

    return (
        <div className="max-w-200 p-2">
            <button onClick={sortByName} className="bg-gray-600  mb-2 hover:bg-green-600 cursor-pointer text-white flex justify-center items-center rounded-sm p-[4px_15px]">sort</button>
            <table className="border border-gray-300 w-full">
                <thead className="border border-gray-300 bg-gray-200">
                    <tr>
                        <th className="text-[1rem] font-bold px-2 py-1 text-left">Name</th>
                        <th className="text-[1rem] font-bold text-left">Country</th>
                    </tr>
                </thead>
                <tfoot>
                    {
                    Array.isArray(data) ?  data.map(
                                                item => <tr key={item.id} className="cursor-pointer hover:bg-gray-200">
                                                            <td className="text-[1rem] px-2 py-1 text-left">{item.name}</td>
                                                            <td className="text-[1rem] text-left">{item?.country?.name}</td>
                                                        </tr>) :
                                        <tr>
                                            <td>...loading</td>
                                        </tr>
                    }
                </tfoot>
            </table>
        </div>
    )
}