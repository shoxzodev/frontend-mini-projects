export default function Parallax() {
    return (
        <div className="bg-enroll">
            <div className="h-181 flex justify-center items-center bg-white/35">
                <button className="bg-gray-800 text-[2rem] text-white py-2 px-4">
                    SCROLL DOWN
                </button>
            </div>
            <div className="bg-white py-10 px-10">
                <h1 className="text-center text-[2rem]">Parallax Demo</h1>
                <p className="text-justify leading-7">
                    Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.
                </p>
            </div>
            <div className="bg-parallax2 flex justify-center items-center">
                <h2 className="text-[3rem] text-white">Less Height</h2>
            </div>
            <div className="bg-black py-15 pl-10">
                <h3 className="text-white">Scroll up and down to really get the feeling of how Parallax Scrolling works.</h3>
            </div>
            <div className="bg-parallax3 flex justify-center items-center">
                <h4 className="text-[2rem] text-white">SCROLL UP</h4>
            </div>
            <div className="bg-black py-15 pl-10">
                <h3 className="text-white">Scroll up and down to really get the feeling of how Parallax Scrolling works.</h3>
            </div>
            <div className="h-183 flex justify-center items-center bg-white/35">
                <button className="bg-gray-800 text-[2rem] text-white py-2 px-4">
                    COOL !
                </button> 
            </div>
        </div>
    )
}