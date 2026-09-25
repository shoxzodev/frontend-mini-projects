import fades from "../database/fades";

export default function FadeButtons() { 
    return (
        <div className="flex gap-2 ">
            {
                fades.map(
                    (item) => <button key={item.id} className={`${item.bg} ${item.hover} duration-300 linear py-2 px-4 ${item.color} cursor-pointer`}>{item.text}</button>
                )
            }
        </div>
    )
}