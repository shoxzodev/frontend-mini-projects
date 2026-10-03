"use client"

import users from '@/src/database/users';
import { user } from '@/src/store/users/users';
import { userStore } from '@/src/types/elements.types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect } from 'react';

export default function Dropdown() {
    const filterUser = user((state:any) => state.filterUser);
    const data = user((state:any) => state.data);
    const open = user((state:any) => state.open);
    const setData = user((state:any) => state.setData);
    const openSide = user((state:any) => state.openSide);

    useEffect(() => {
        setData(users)
    } , [])
    
    return (
        <div className="p-2">
            <button onClick={openSide} className="bg-green-600 p-2 cursor-pointer flex justify-center items-center">
                <span className="text-white text-[1rem]">Dropown</span>
                <ArrowDropDownIcon sx={{color:"white"}} />
            </button>

        <div className={`${open ? "flex flex-col" : "hidden"} max-w-60`}>
            <input onChange={filterUser} className="mb-0 searchInput" type="search" placeholder="Search.." />
            <ul className="flex flex-col border border-t-0 border-l-gray-300 border-r-gray-300 border-b-gray-300">
                {
                    Array.isArray(data) ? data.map(item => <li className="bg-gray-100 cursor-pointer px-2 py-1 hover:bg-gray-200" key={item.id}>{item.name}</li>)
                    : "...loading"
                }
            </ul>
        </div>
        </div>
    )
}