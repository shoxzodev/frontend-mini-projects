"use client";
import { useRef } from "react";

export default function FullscreenWindow() {
    const videoELement = useRef<HTMLVideoElement>(null);
    const makeFullScreen = () => {
        const elment = videoELement.current as HTMLVideoElement;
        elment.requestFullscreen()
    }
    
    return (
        <div>
            <div className="bg-gray-200 max-w-150 p-5">
                <video ref={videoELement} controls className="h-50 w-100">
                    <source src="/video.mp4" type="video/mp4" />
                </video>

                <button onClick={makeFullScreen} className="bg-gray-600 mt-3 hover:bg-gray-500 text-white cursor-pointer p-2">Open Video in FullScreen</button>
            </div>
        </div>
    )
}