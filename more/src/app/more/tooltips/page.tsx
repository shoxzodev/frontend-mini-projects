import tooltips from "@/src/database/tooltips";

export default function Tooltips() {
    return (
        <div className="px-10 py-10 flex gap-40">
            {
                tooltips.map( item =>
                <button  key={item.id} className="relative border-b cursor-pointer parent">
                    <div className={`absolute bg-gray-500 w-25 rounded-sm child ease-in-out duration-75 ${item.class1}`}>
                        <div className="relative">
                            <div className={`absolute bg-gray-500 h-2 w-2 -z-10 rotate-45 ${item.class2}`}></div>
                            <span className="text-white">Tooltip text</span>
                        </div>
                    </div>
                    <span className="text-blue-500">{item.name}</span>
                </button>
                )
            }
        </div>
    )
}