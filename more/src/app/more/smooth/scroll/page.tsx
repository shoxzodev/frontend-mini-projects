export default function SmoothScroll() {
    return (
        <div className="h-full">
            <div id="top" className="bg-red-600 px-20 pt-20 h-200">
                <h1 className="text-white text-[2rem]">Section 1</h1>
                <p className="text-white my-3">Click on the link to see the "smooth" scrolling effect.</p>
                <a className="bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-400 duration-75" href="#bottom">Click Me to Smooth Scroll to Section2 Bellow</a>
                <p className="text-white mt-3">Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
            </div>
            <div id="bottom" className="bg-yellow-500 px-20 pt-20 h-200">
                <h1 className="text-[2rem]">Section 2</h1>
                <a href="#top" className="bg-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-400 duration-75">Click Me to Smooth Scroll to Section1 Above</a>
            </div>
        </div>
    )
}