"use client"
import userData from '@/src/database/userData';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function ContactChips() {
    const [ user , setUsers ] = useState(userData);

    const deleteUser = (id:number) => {
        const filter = user.filter(users => users.id != id );
        setUsers(filter);
    }

    return (
        <div className="p-3">
            <div className="flex gap-4 items-center">
                {
                    user.length > 0 ? user.map(
                        item => 
                        <div key={item.id} className="bg-gray-200 flex items-center gap-2 rounded-[15px] pr-3 relative">
                                <img src={item.img} alt="icon image"  className="relative -left-1 rounded-[50%]  h-12 w-12"/>
                                <span>{item.name}</span>
                                <button onClick={ () => deleteUser(item.id)} className="cursor-pointer text-gray-500 hover:text-black duration-50"> 
                                    <CloseIcon sx={{fontSize:"0.8rem"}} />
                                </button>
                        </div>
                    )
                    : "...loading"
                }
            </div>
        </div>
    )
}