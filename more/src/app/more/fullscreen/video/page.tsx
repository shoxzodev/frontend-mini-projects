"use client"
import { useRef, useState } from "react";

export default function FullscreenVideo() {
  const video = useRef<HTMLVideoElement>(null);
  
  const stopVideo = () => {
      const videoEelement = (video.current as HTMLVideoElement);

      videoEelement.paused ? videoEelement.play()
                         : videoEelement.pause();
  };

  return (
    <div className="h-full flex justify-center items-center">
      <div className="h-full w-full border relative">
        <video ref={video} autoPlay={true} muted loop className=" w-full absolute left-0 bottom-0" >
            <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 px-5 py-3 bg-black/70 w-full">
          <h1 className="text-white text-[3rem] mb-2">Heading</h1>
          <p className="text-white mb-2 text-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic totam ipsam excepturi officiis aliquam maxime laudantium. Quas, cupiditate soluta. Accusantium recusandae temporibus porro laborum odio totam itaque quam. Magni commodi incidunt corporis voluptatem animi inventore officiis possimus dolore sapiente facere.
          </p>
          <button onClick={stopVideo} className="text-white bg-black px-4 py-2 cursor-pointer text-[2rem] hover:bg-white hover:text-black duration-100">Pause</button>
        </div>
      </div>
    </div>
  );
};