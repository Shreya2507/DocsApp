import React, { useState, useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);

    const data = [
        {
            desc: "Lorem ipsum dolor sit, conr adipisicing amet.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen:true,
                tagTitle: "Upload",
                tagColor: "bg-blue-500"
            }
        },
        {
            desc: "Lorem ipsum dolor sit, conr adipisicing amet.",
            filesize: "0.5mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "bg-red-400"
            }
        },
        {
            desc: "Lorem ipsum dolor sit, conr adipisicing amet.",
            filesize: "0.3mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "bg-lime-500"
            }
        },
        {
            desc: "Lorem ipsum dolor sit, conr adipisicing amet.",
            filesize: "1mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "bg-lime-800"
            }
        },
        {
            desc: "Lorem ipsum dolor sit, conr adipisicing amet.",
            filesize: "0.9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "bg-purple-500"
            }
        }
    ]

    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 p-5 w-full h-full bg-transparent flex gap-5 flex-wrap '>
            
            {data.map((item, index)=>(
                <Card data={item} reference={ref} />

            ))}
        </div>
    )
}

export default Foreground
