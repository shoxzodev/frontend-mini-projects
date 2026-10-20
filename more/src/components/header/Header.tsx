"use client"

import { useSelector } from "react-redux";

export default function Header() {
    const fontSize = useSelector((state:any) => state.headers.fontSize);
    const sticky  = useSelector((state:any) => state.headers.sticky);

    return (
        <header className={`bg-gray-200 flex duration-150 ${fontSize} justify-center items-center font-bold py-10 ${sticky ? "sticky " : "fixed top-5" }  w-full top-0`}>
            Header
        </header>
    )
}