import { useEffect , useState , useDeferredValue } from "react";
import alphabet from "../database/alphabet";

export default function Notification() {
    const [number , setNumber] = useState<number>(0);
    const [ letter , setLetter ] = useState<string>('loading');
    const [show , setShow] = useState<boolean>(false);
    const later = useDeferredValue(number);
    const laterN = useDeferredValue(letter);

    useEffect(() => {
        timer();
    } , [later, laterN])

    function timer() {
        setInterval(() => {
            const math = Math.floor(Math.random() * 10)
            setNumber(math);
            setLetter(alphabet.sort(() => 0.5 - Math.random()).slice(0,math).join(''));
            console.log("render")
        } , 5000)
    }

    return (
        <div>  
            <button onPointerMove={() => setShow(true) } onPointerOut={() => setShow(false)} className="bg-gray-700 text-white py-2 px-4 relative cursor-pointer hover:bg-red-600 duration-150 linear">
                <span>Inbox</span>
                <div className="absolute flex justify-center items-center -right-2 -top-2.5 rounded-full h-7 w-7 bg-red-500">
                    <span>{later}</span>
                </div>
            </button>
            <div className={`${show ? "opacity-100" : "opacity-0"} duration-150 ease-in bg-gray-300 w-30 text-center h-12 flex justify-center z-10 items-center p-3 leading-4 relative translate-x-21 translate-y-4`}>
                <div className={`absolute w-0 h-0 border-l-5 border-r-25 border-b-38 z-0 border-l-transparent border-r-transparent border-b-gray-300 -left-2 -top-6 -rotate-30`}></div>
                <span className="text-gray-950">
                    {laterN}
                </span>
            </div>
        </div>
    )
}