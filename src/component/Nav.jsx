import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Frame from '../assets/Frame.png'
import heart from '../assets/heart.png'
import Vector from '../assets/Vector.png'
import down from '../assets/down.png'
import icon from '../assets/icon.png'
import group from '../assets/Group 18.png'
import list from '../assets/list (1).png'
import list2 from  '../assets/list (2).png'
const Nav =()=>{
    const [nav,setNav]= useState(false);
    const handlNav =()=>{
        setNav(!nav);
    };
    return(
        <div>
            <div className=' w-full h-[84.88px] bg-[#590000]  px-10 justify-between items-center inline-flex '>
                <div className='w-[610.50px] justify-start items-center gap-1.5 inline-flex'>
                   <a href='/'><img className='w-16 h-[60.88px] relative' src={Frame} alt='/'/></a>
                    <div className='flex-col items-start'>
                        <p className='text-white text-sm font-normal  uppercase leading-[16.80px] tracking-wider'>Weddin</p>
                        <p className='text-white text-sm font-normal  uppercase leading-[16.80px] tracking-wider'>plannin</p>

                    </div>
                    <div className="w-[23px] h-[32px] absolute left-44 top-3 text-white text-4xl font-light font-['Merriweather'] leading-[43.20px] tracking-[3.24px]">g
                    </div>
                </div>


                <div>
                    <div className="w-[419px] h-9 hidden justify-end items-center gap-4 lg:inline-flex">
                        <div className="w-6 h-6 relative"><img src={heart} alt='/'/></div>
                        <div className="w-3 h-[0px] origin-top-left rotate-90 border border-stone-300"></div>
                        <div className="w-6 h-6 mr-2 relative">
                            <img src={Vector} alt='/'/>
                            <div
                                className="w-4 h-4 left-[14px] top-[8px] absolute bg-red-600 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
                                <div
                                    className="text-center text-white text-[10px] font-normal font-['Lexend'] leading-[15px]">0
                                </div>
                            </div>
                        </div>
                        <div className="w-3 h-[0px] origin-top-left rotate-90 border border-stone-300"></div>

                        <div className="w-[55px] h-7 px-1 py-1.5 justify-start items-center gap-1 inline-flex">
                            <div className="text-white text-base font-normal font-['Tajawal'] leading-tight ">EGP</div>
                            <div className="w-4 h-4 relative"><img src={down} alt='/' /></div>
                        </div>

                        <div className="w-3 h-[0px] origin-top-left rotate-90 border border-stone-300"></div>
                        <div className="w-[52px] h-9 px-1 py-1.5 justify-start items-center gap-1 inline-flex">
                            <div className="w-6 h-6 relative"><img src={icon} alt='/' /></div>
                            <div className="w-4 h-4 relative"><img src={down} alt='/' /></div>
                        </div>

                        <div className='w-[152px] h-6 inline-flex gap-1 p items-center'>
                            <img className='w-6 h-6 px-[2.25px] py-[1.50px] ' src={group} alt='/'/>
                            <div className='text-white font-normal '>User Name</div>
                            <div className="w-4 h-4 relative"><img src={down} alt='/' /></div>

                        </div>
                    </div>

                    <div onClick={handlNav} className='block lg:hidden'>
                        {nav ?<AiOutlineClose size={25} className='text-white' /> : <AiOutlineMenu size={25} className='text-white' />}
                    </div>
                    <div
                        className={nav ? ' absolute left-0 top-[84.5px] w-[100%] z-20  justify-start   bg-[#590000] lg:hidden  border-b ease-in-out duration-500' : 'hidden'}>
                        <ul className='capitalize items-center mx-12  '>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium hover:text-red-800'>
                                <a href='/'>Home</a></li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium  hover:text-red-800 '>
                              <a href='/'> Wedding Venues</a>
                            </li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium  hover:text-red-800 '><a href='/' >Service</a>
                            </li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium  hover:text-red-800 '><a href='/'>Shop</a></li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium   hover:text-red-800'><a href='/'>invitation</a></li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium   hover:text-red-800'><a href='/'>Wedding Website</a></li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium   hover:text-red-800'><a href='/'>About Us</a></li>
                            <li className='text-zinc-500 text-base font-normal leading-none py-3 hover:font-medium   hover:text-red-800'><a href='/'>Contact Us</a>
                            </li>
                        </ul>
                        <div className="w-11/12 h-px mt-4 bg-white border border-white mx-auto"/>

                        <div className='flex mx-12 my-6 justify-start items-center'>
                            <div className="w-8 pt-2 pr-2 h-6 mr-2 relative"><img src={heart} alt='/' /></div>
                            <div className="w-6 h-[0px] mr-2 origin-top-left rotate-90 border border-stone-300"></div>
                            <div className="w-8 pt-2 pr-2 h-6 mr-2 relative">
                                <img src={Vector} alt='/'/>
                                <div className="w-4 h-4 left-[14px] top-[8px]  absolute bg-red-600 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-white text-[10px] font-normal font-['Lexend'] leading-[15px]">0
                                    </div>
                                </div>
                            </div>
                            <div className="w-6 h-[0px] mx-2 origin-top-left rotate-90 border border-stone-300"></div>

                            <div className="w-[55px] h-7 px-1 pt-4  justify-start items-center gap-1 inline-flex">
                                <div className="text-white  text-base font-normal font-['Tajawal'] leading-tight ">EGP</div>
                                <div className="w-4 h-4 relative"><img src={down} alt='/'/></div>
                            </div>

                            <div className="w-6 h-[0px] mx-2 origin-top-left rotate-90 border border-stone-300"></div>
                            <div className="w-[52px] h-9 px-1 pt-4 justify-start items-center gap-1 inline-flex">
                                <div className="w-6 h-6 relative"><img src={icon} alt='/'/></div>
                                <div className="w-4 h-4 relative"><img src={down} alt='/'/></div>
                            </div>

                            <div className='w-[152px] h-6 pt-4 inline-flex gap-1 p items-center'>
                                <img className='w-6 h-6 px-[2.25px] py-[1.50px] ' src={group} alt='/'/>
                                <div className='text-white font-normal '>User Name</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="w-full h-14 px-[200px] hidden shadow py-2 bg-white justify-between items-start lg:inline-flex">
                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Home</a></div>

                    </div>
                </div>
                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Wedding Venues</a>
                        </div>
                    </div>
                </div>
                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Service</a>
                        </div>
                    </div>
                </div>
                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Shop</a>
                        </div>
                    </div>
                </div>

                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Wedding invitation</a>
                        </div>
                    </div>
                </div>

                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Wedding Website</a>
                        </div>
                    </div>
                </div>


                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>About Us</a>
                        </div>
                    </div>
                </div>


                <div className="py-3 justify-center items-center gap-2 flex">
                    <div className="justify-center items-center gap-1 flex">
                        <div className="text-zinc-500 hover:text-red-900 text-base font-normal font-['Roboto'] leading-none"><a href='/'>Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

           <div className='w-11/12 mx-auto flex flex-col gap-4 '>
            <div className="w-11/12 mx-auto  h-8 mt-8 justify-end items-center gap-2 inline-flex">
                <div className='justify-start items-center gap-4 flex'>
                    <div className='text-stone-500 text-base font-normal leading-none tracking-wide '>view</div>
                    <div className="w-6 h-6 relative"><img src={list} alt='/' /></div>
                    <div className="w-6 h-6 relative"><img src={list2} alt='/'/></div>

                    <div className="px-3 py-2 rounded-lg border border-stone-500 justify-start items-center gap-2 flex">
                        <div className="text-stone-500 text-sm font-normal font-['Roboto']">9</div>
                        <div className="w-4 h-4 relative"><img src={down} alt='/'/></div>
                    </div>
                </div>
            </div>


            <div className=" w-11/12 mx-auto justify-start  items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-center  text-red-800 text-2xl font-medium font-['Roboto'] leading-relaxed">Wishlist
                    </div>
                    <div className="w-[21px] h-[26px] text-center text-stone-500 text-base font-normal font-['Roboto'] leading-relaxed">(9)
                    </div>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Nav;