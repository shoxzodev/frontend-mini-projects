import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import dateTime from "@/src/database/dateTime"

export default function Calendar() {    
    return (
       <div className="p-5">
            <div className="max-w-250 m-auto">
                <div className="bg-green-600 flex justify-center items-center relative py-20">
                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="text-white mb-0 text-[1.5rem] font-bold">AUGUST</h1>
                        <h2 className="text-white mt-0 text-[1.3rem] font-bold">2021</h2>
                    </div>
                    <button className="text-white absolute left-3 cursor-pointer hover:text-gray-200 duration-150">
                        <NavigateBeforeIcon  sx={{fontSize:"2.5rem" , fontWeight:900}}/>
                    </button>
                    <button className="text-white absolute right-3 cursor-pointer hover:text-gray-200 duration-150">
                        <NavigateNextIcon sx={{fontSize:"2.5rem" , fontWeight:900}} />
                    </button>
                </div>
                <div className="bg-gray-300 flex py-3 px-20 justify-between">
                    {dateTime.weekDays.map(
                        (item , index) => <p className=" text-gray-500" key={index}>{item}</p>
                    )}
                </div>
                <div className="grid gap-x-30 py-3 grid-cols-7 bg-gray-200 px-20">
                    {
                        dateTime.date.map(
                           ( item , index) => <p className="text-gray-500" key={index}>{index + 1}</p>
                        )
                    }
                </div>
            </div>
       </div>
    )
}