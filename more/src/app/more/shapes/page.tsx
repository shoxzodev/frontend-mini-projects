export default function Shapes() {
    return (
        <div className="p-5 flex gap-5">
            <div className="flex flex-col items-center">
                <h1>Square</h1>
                <div className="h-20 w-20 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1>Circle</h1>
                <div className="h-20 w-20 rounded-[50%] bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1>Oval</h1>
                <div className="h-20 w-40 bg-gray-400 rounded-[50%]"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1>Rectangle</h1>
                <div className="h-20 w-40 bg-gray-400"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1>Triangle Up</h1>
                <div className="border-l-transparent border-l-30 border-r-30 border-r-transparent border-gray-400 border-b-70 h-20 w-15"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1>Triangle Down</h1>
                <div className="border-l-transparent border-l-30 border-r-30 border-r-transparent border-gray-400 border-t-70 h-20 w-15"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1>Triangle Left</h1>
                <div className="border-t-transparent border-b-34 border-t-34 border-b-transparent border-gray-400 border-l-70"></div>
            </div>
            <div className="flex flex-col items-center gap-3">
                <h1>Triangle Right</h1>
                <div className="border-t-transparent border-b-34 border-t-34 border-b-transparent border-gray-400 border-r-70"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1>Trapezoid</h1>
                <div className="border-l-transparent border-l-20 border-r-24 border-r-transparent border-gray-400 border-b-70 h-20 w-30"></div>
            </div>
            <div className="flex flex-col">
                <h1 className="pl-4">Parallelogram</h1>
                <div className="flex h-20 gap-0.5 ">
                    <div className="border-l-transparent border-l-76 mb-2 h-full mt-0.5 -rotate-90 border-b-70 border-b-gray-400"></div>
                    <div className="h-full w-30 border-r-76 border-r-transparent border-b-76 border-b-gray-400"></div>
                </div>
            </div>
        </div>
    )
}