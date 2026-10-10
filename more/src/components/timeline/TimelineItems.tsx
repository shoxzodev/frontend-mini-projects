import { posterType } from "@/src/types/type";

export default function TimeLineItems({event , position}:{event:posterType , position:any}) {
    return (
        <div className="flex flex-col gap-80 max-sm:gap-10">
             {
                position(event).map( (item:any) => 
                    <div key={item.id} className={`p-5 rounded-xl bg-white`}>
                        <div className="relative">
                            <h1>{item.title}</h1>
                            <p>{item.info}</p>
                            <div className={`h-5 w-5 rotate-45 top-1 ${event == "odd" ? "-right-7" : event == "even" || event == "both" ? "-left-7" : ""} absolute bg-white `}></div>
                            <button className={`${event == "odd" ? "-right-15" : event == "even" || event == "both" ? "-left-15" : "" } h-5 w-5 rounded-[50%] outline-3 outline-amber-600 absolute top-1 bg-white -right-15 z-20`}></button>
                        </div>
                    </div>
                )}
        </div>
    )
}