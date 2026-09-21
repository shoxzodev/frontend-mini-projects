import style from "./Zoom.module.scss"

export default function Zoom() {

    window.onmousemove = (e) => {
        const z = document.getElementById("main");
        const m = z?.getBoundingClientRect();
        const x = e.clientX - m!.left;
        const y = e.clientY - m!.top;

        z!.style.transform = `translate(${x}px, ${y}px)`
    }

    return (
        <div className={style.wrapper}>
            <div id="main" className={style.scope}>
            </div>
        </div>
    )
}


/*
    x:1227
    y:903

    layerX
    layerY

    pageX
    pageY

    clientX
    clinetY

    offsetX
    offsetY

    screenX
    screenY

    movementX
    movementY
*/ 