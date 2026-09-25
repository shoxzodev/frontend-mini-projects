import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import type { Router } from '../types/interface';
import { NavLink } from 'react-router-dom';
import routers from '../database/routers';

export default function SplitButton() {
    const [ open , setOpen ] = useState<boolean>(false);

    const isOpen = () => setOpen(true);
    const isClose = () => setOpen(false);
    return (
        <div>
            <div className="flex h-10 max-w-27.5">
                <button className="bg-blue-400 hover:bg-blue-500 duration-100 ease-in-out h-full text-white px-3">Button</button>
                <button onPointerLeave={isClose} onPointerOver={isOpen} onPointerEnter={isOpen}  className={`${open ? "bg-blue-500" : "bg-blue-400" } duration-100 ease-in-out h-full px-2 pb-0.5 relative`}>
                    <PlayArrowIcon sx={{color:"white" , fontSize:"1rem" , rotate: open ? "-90deg" : "90deg" , transition:"0.2s linear"}}/>
                    <nav className={`absolute ${open ? "" : "hidden"} absolute left-0  -bottom-64 flex flex-col`}>
                        {
                            routers.map((item:Router) => <NavLink to={item.path} key={item.id} onPointerEnter={isOpen} onPointerLeave={isClose} className={ ({isActive}) => (isActive ? 'linked activeLink' : "linked" ) }>{item.name}</NavLink>  )
                        }
                    </nav>
                </button>
            </div>
        </div>
    )
}