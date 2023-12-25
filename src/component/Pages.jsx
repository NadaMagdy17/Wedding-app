import React from 'react'
import left from '../assets/chevron-left.jpg'
import right from '../assets/chevron-right.png'
const Pages =()=>{

    return(
       <div className='w-[521px] h-[104px] mx-auto'>
        <div  className=" pt-6 pb-10 justify-center items-center inline-flex">

            <div className='w-[120px] h-10 p-2 justify-center items-center flex'>
                <img className='w-6 h-6 relative' src={left} alt='/'/>
                <div
                    className="text-neutral-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">Previous
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-red-950 text-base font-medium font-['Roboto'] leading-none tracking-wide">1
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2  rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">2
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">3
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className='text-stone-400 text-base font-medium  leading-none tracking-wide'>4
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">5
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">...
                    </div>
                </div>
            </div>
            <div className="w-[42px] h-10 p-2 bg-neutral-200 rounded justify-center items-center inline-flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                    <div className="text-stone-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">11
                    </div>
                </div>
            </div>


            <div className='w-[120px] h-10 p-2 justify-center items-center flex'>

                <div className="text-neutral-400 text-base font-medium font-['Roboto'] leading-none tracking-wide">next
                </div>
                <img className='w-6 h-6 relative' src={right} alt='/'/>
            </div>
        </div>
       </div>
    )
}
export default Pages;