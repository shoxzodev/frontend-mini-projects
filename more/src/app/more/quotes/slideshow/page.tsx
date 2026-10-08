"use client"

import buttons from "@/src/database/buttons";
import React, { useReducer } from "react";
import slideshowReducer from "@/src/reducers/slideshow"

export default function PageSlideshow() {
    const [state , dispatch] = useReducer(slideshowReducer.reducer , slideshowReducer.initialState);

    function main(e:React.MouseEvent<HTMLButtonElement>) {
        const btnElement = e.target as HTMLButtonElement;

        if(btnElement.name == "left") {
            if(state.text <= 0)
                return 0

            dispatch({type:"changes" , payload:buttons[state.text-1]});
            dispatch({type:"text" , payload:state.text-1});

        } else if(btnElement.name == "right") {
            if(state.text >= buttons.length - 1 ) {
                dispatch({type:"changes" , payload:buttons[0]});
                dispatch({type:"text" , payload:0});
                return
            }

            dispatch({type:"changes" , payload:buttons[state.text + 1]});
            dispatch({type:"text" , payload:state.text + 1});
        }
    }

    function changePage(index:number) {
        dispatch({type:"changes" , payload:buttons[index]});
        dispatch({type:"text" , payload:index});
    }

    return (
        <div className="py-10">
            <div className="max-w-300 m-auto">
                <div className="flex justify-center relative items-center pt-35 pb-45 bg-gray-50">
                    <div className="flex flex-col gap-2">
                        <i className="text-center">{ state.changes.paragraph}</i>
                        <p className="text-center text-blue-500">{state.changes.italic}</p>
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
                            ( item , index) => <button key={item.id} name={String(index)} onClick={() => changePage(index)} className={`h-4 w-4 bg-gray-400 hover:bg-gray-600 ${state.text == index ? "bg-gray-600" : "" } duration-100 rounded-[50%] cursor-pointer`}></button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}