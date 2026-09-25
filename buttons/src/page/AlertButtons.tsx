import buttonType from "../database/buttonTypes";
import type { buttonTypes } from "../types/interface";

export default function AlertButtons() { 
    return (
        <div className="flex gap-2.5 ">
            {
                buttonType.map(
                    ( item:buttonTypes ) => <button key={item.id} className={`text-white ${item.bgColor} ${item.alert} p-[7px_15px_8px] cursor-pointer duration-100`}>{item.name}</button>
                )
            }
        </div>
    )
}