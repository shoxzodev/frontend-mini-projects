"use client"

import { changeFontSize, stickyHeader } from "@/src/store/slices/header.slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function StickyHeader() {
    const [ mount , setMount ]  = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setMount(true)
    } , [mount])

    if(!mount)
        return null

    window.onscroll = () => dispatch(stickyHeader(window.scrollY));
    
    return (
        <div>
            <h1 className="text-[3rem] font-bold leading-14 px-4 py-5 text-center">
                This example demonstrates scroll the page.
            </h1>
            <p className="text-[2rem] px-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, sequi doloribus. Aperiam voluptates nostrum doloremque ex! Nihil neque rerum aperiam voluptates unde harum expedita assumenda accusamus, voluptatibus optio velit numquam hic fugit eligendi molestias ipsam cum perferendis sequi quae facilis mollitia cupiditate eaque maiores officia! Quidem, ipsam ab ipsa quia aliquam nulla, omnis itaque similique eveniet, fugit autem. Dolorum ex debitis perspiciatis ullam magni veniam sint nobis maiores quisquam officia veritatis unde fuga sequi harum quo, ad amet. Sed assumenda, aut tempore exercitationem porro nulla quos esse sunt voluptatibus omnis impedit, perferendis perspiciatis veritatis accusantium nisi modi, fuga libero. Ducimus obcaecati ab delectus aliquam suscipit cum odit quidem, officia beatae ex distinctio ipsa est magnam perspiciatis ipsum mollitia repellat explicabo neque eum quam dolores dolorem, perferendis eligendi. Illum ipsa veritatis ducimus quos, nesciunt quidem fugiat! Optio, odio. Quibusdam, explicabo, possimus mollitia iure dolor eos quia delectus quisquam consectetur maiores voluptates earum necessitatibus! Saepe consequatur enim sint, quis rem minima quidem praesentium error fugit dolorum repudiandae earum culpa omnis id consectetur, dolorem iusto quo nisi voluptatem quae voluptatibus, ea corporis recusandae. Minus magni aut dignissimos quidem consequuntur adipisci omnis, possimus, soluta quas cumque deserunt in facere unde praesentium deleniti alias dolorem ad repellendus nihil quae ratione quo. Ea eius nostrum dolore in inventore quisquam quo obcaecati. Numquam doloremque magnam velit perspiciatis aliquid illo eligendi magni. Consequatur tempora eaque explicabo quos suscipit molestiae reiciendis adipisci repellendus, ipsum commodi sit quae? Alias ut ratione deserunt labore suscipit aliquid similique facilis explicabo eius tempore? Illo, dolor cupiditate porro harum quo debitis laborum. Quas quod dolores iure, quibusdam molestiae sit pariatur corrupti unde veniam qui cumque! Corporis, perspiciatis earum numquam officia cupiditate quo ea necessitatibus omnis accusamus natus repellendus exercitationem autem totam laborum expedita provident aspernatur asperiores iste delectus ex a? Magni sapiente exercitationem sequi.
            </p>
        </div>
    )
}