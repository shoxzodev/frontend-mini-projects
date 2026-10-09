export default function FlipCard() {
    return (
        <div className="p-10">
            <div className="flip relative w-100 h-100">
                <div className="frontSide absolute bg-red-500 h-full w-full">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" className="h-full w-full" />
                </div>
                <div className="backSide absolute bg-blue-500 h-full pt-3 w-full cursor-pointer">
                    <h1 className="text-white text-[2rem] text-center">John Doe</h1>
                    <p className="text-white text-[1.3rem] text-center">Architect & Engineer</p>
                    <p className="text-white text-[1.3rem] text-center">We love that guy</p>
                </div>
            </div>
        </div>
    )
}