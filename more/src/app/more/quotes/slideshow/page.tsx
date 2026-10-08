"use client"

import React, { useState } from "react";

const buttons = [
    {
        id:1,
        paragraph:"\"I love you the more in that I believe you had liked me for my own sake and for nothing else\"",
        italic:"- John Keats"
    },
    {
        id:2,
        paragraph:"\"But man is not made for defeat. A man can be destroyed but not defeated.\"",
        italic:"- Ernest Hemingway"
    },
    {
        id:3,
        paragraph:"\"I have not failed. I've just found 10,000 ways that won't work.\"",
        italic:"- Thomas A. Edison"
    },
];

export default function PageSlideshow() {
    const [text , setText] = useState<number>(0);
    const [ changes , setChanges ] = useState(buttons[0]) 

    function main(e:React.MouseEvent<HTMLButtonElement>) {
        const btnElement = e.target as HTMLButtonElement;

        if(btnElement.name == "left") {
            if(text <= 0) {
                return 0
            }

            setChanges(buttons[text-1]);
            setText(text-1);

        } else if(btnElement.name == "right") {
            if(text >= buttons.length - 1 ) {
                setChanges(buttons[0]);
                return setText(0)
            }

            setChanges(buttons[text+1]);
            setText(text+1)
        }
    }

    function changePage(index:number) {
        setChanges(buttons[index]);
        setText(index)
    }

    return (
        <div className="py-10">
            <div className="max-w-300 m-auto">
                <div className="flex justify-center relative items-center pt-35 pb-45 bg-gray-50">
                    <div className="flex flex-col gap-2">
                        <i className="text-center">{changes.paragraph}</i>
                        <p className="text-center text-blue-500">{changes.italic}</p>
                    </div>
                    <button onClick={main} name="left" className="top-[50%] absolute left-0 cursor-pointer text-[1.5rem] duration-100 hover:bg-gray-600 hover:text-white p-2">
                        ❮
                    </button>
                    <button onClick={main} name="right" className="top-[50%] absolute right-0 cursor-pointer text-[1.5rem] duration-100 hover:bg-gray-600 hover:text-white p-2">
                        ❯
                    </button>
                </div>
                <div className="flex justify-center gap-3 bg-gray-200 py-5">
                    {
                        buttons.map(
                            ( item , index) => <button key={item.id} name={String(index)} onClick={() => changePage(index)} className={`h-4 w-4 bg-gray-400 hover:bg-gray-600 ${text == index ? "bg-gray-600" : "" } duration-100 rounded-[50%] cursor-pointer`}></button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}