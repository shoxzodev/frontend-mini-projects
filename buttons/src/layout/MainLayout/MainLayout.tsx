import { useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import routers from "../../database/routers";

export default function MainLayout() {
    const [ visibility , setVisibility ] = useState<boolean>(false);
    const currentLocation = useLocation();
    const navigate = useNavigate();

    window.onscroll = () => {
        if(window.scrollY > 60)
            setVisibility(true)
        else
            setVisibility(false)
    }

    const toTop = () =>
        window.scrollTo({top:0})

    function next() {
        const findPath = routers.findIndex(item => item.path == currentLocation.pathname );

        if(findPath == routers.length - 1)
            return

        navigate(routers[findPath+1].path)
    }

    function back() {
        const findPath = routers.findIndex(item => item.path == currentLocation.pathname );
        
        if(findPath == 0)
            return

        navigate(routers[findPath-1].path)
    }

    return (
    <div className="h-full">
        <header className="bg-black text-white">
            <nav className="flex">
                <div className="relative">
                    <div className="text-[0.7rem] p-2 hover:bg-red-700 cursor-pointer duration-200 ease-in-out relative showLink">
                        <span>More</span>
                        <div className="absolute left-0 -bottom-49.5 flex-col bg-[#bababa] lists">
                            {
                                routers.map(item => <NavLink key={item.id} className={({isActive}) => (isActive ? "activeLink link":"link")} to={item.path}>{item.name}</NavLink> )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="px-5 pt-5 h-700">
            <Outlet />
        </div>
        <div className="flex gap-2 fixed bottom-10 w-full justify-center">
            <button onClick={back} className="bg-gray-300 h-7 w-7 pl-1 pb-1 rounded-full cursor-pointer hover:bg-gray-500 duration-150 hover:text-white"><ArrowBackIosIcon sx={{fontSize:"1rem"}} /></button>
            <button onClick={next} className="bg-gray-300 h-7 w-7 pb-1 rounded-full cursor-pointer hover:bg-gray-500 duration-150 hover:text-white"><ArrowForwardIosIcon sx={{fontSize:"1rem"}}/></button>
        </div>
        <button onClick={toTop} className={`${visibility ? "" : "hidden"} h-7 w-7 bg-red-600 fixed right-10 bottom-10 flex justify-center items-center rounded-xs cursor-pointer hover:bg-gray-600 duration-150 ease-in-out`}>
            <ExpandLessIcon sx={{color:"white"}} />
        </button>
    </div>
    )
}