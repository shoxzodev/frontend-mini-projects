import { useState } from "react";

export default function ReadMore() {
    const [ visible , setVisible ] = useState<boolean>(false)

    const changeVisibility = () => setVisible((current) => current ? false : true);  

    return (
        <div className="bg-gray-300 p-4">
            <h1 className="text-[1.8rem] font-bold">Example Text</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae 
                <span className={visible ? "hidden" : ""}>scel...</span>
                <span className={visible ? "" : "hidden"}>
                    scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                </span>
            </p>

            <button onClick={changeVisibility} className="bg-gray-700 p-3 text-white cursor-pointer mt-2 hover:bg-gray-400 hover:text-black duration-75">{visible ? "Read more" : "Read less"}</button>
        </div>
    )
}