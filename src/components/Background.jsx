import React from 'react'

function Background() {
    return (
        <div className='fixed z-[2] w-full h-screen'>
            <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold'>Documents.</div>
            <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-700'>Docs.</h1>
        </div>
    )
}

export default Background