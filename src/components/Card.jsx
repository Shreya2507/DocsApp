import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion"

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.5} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white py-10 px-8 overflow-hidden '>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 left-0 w-full '>
                <div className='flex items-center justify-between mb-5 py-3 px-8 '>
                    <h5>{data.filesize}</h5>
                    <span className=' w-6 h-6 bg-zinc-600 rounded-full items-center justify-center flex '>
                        {data.close ? <IoClose /> : <MdOutlineFileDownload size="1em" color='#fff' />}
                    </span>
                </div>


                {/* if 1st value true then && will run 2nd value */}
                {
                    data.tag.isOpen && (
                        // <div className={`tag w-full py-4 ${data.tag.tagColor === "red" ? "bg-red-400" : "bg-blue-400"} flex items-center justify-center`}>
                        <div className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>

                    )
                }


            </div>
        </motion.div>
    )
}

export default Card
