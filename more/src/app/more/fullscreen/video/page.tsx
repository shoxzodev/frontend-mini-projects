"use client"
import { useState } from "react";

export default function FullscreenVideo() {
    const [ state , setState ] = useState(false);

    return (
    <video autoPlay={true} muted controls className="h-50 w-80" >
        <source src="/main.mp4" type="video/mp4" />
    </video>
  );
}