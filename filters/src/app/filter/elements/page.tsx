"use client"

import { elem } from "@/src/store/elements/elements";
import { useMemo} from "react";

export default function Elements() {
    const status = elem((state:any) => state.status );
    const setStatus = elem((state:any) => state.setStatus);
    const changeData = elem((state:any) => state.changeData);

    const differentData = useMemo( changeData , [status]);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <div onClick={() => setStatus("all")} className={`px-2 py-1 cursor-pointer hover:bg-gray-400 duration-150 ${status == "all" ? "bg-gray-400" : "bg-gray-100"}`}>Show all</div>
                <div onClick={() => setStatus("cars")} className={`px-2 py-1 cursor-pointer hover:bg-gray-400 duration-150 ${status == "cars" ? "bg-gray-400" : "bg-gray-100"}`}>Cars</div>
                <div onClick={() => setStatus("animals")} className={`px-2 py-1 cursor-pointer hover:bg-gray-400 duration-150 ${status == "animals" ? "bg-gray-400" : "bg-gray-100"}`}>Animals</div>
                <div onClick={() => setStatus("fruits")} className={`px-2 py-1 cursor-pointer hover:bg-gray-400 duration-150 ${status == "fruits" ? "bg-gray-400" : "bg-gray-100"}`}>Fruits</div>
                <div onClick={() => setStatus("colors")} className={`px-2 py-1 cursor-pointer hover:bg-gray-400 duration-150 ${status == "colors" ? "bg-gray-400" : "bg-gray-100"}`}>Colors</div>
            </div>
            <div className="flex gap-2">
                {
                    Array.isArray(differentData) ? differentData.map(item => <div key={item.id} className="bg-blue-400 text-white h-20 w-20 flex justify-center items-center">{item.model}</div>) : null
                }
            </div>
        </div>
    )
}