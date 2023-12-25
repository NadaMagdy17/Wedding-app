import React from 'react'
import Frame from '../assets/Frame.png'
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer =()=>{
    return(

        <div className="w-full h-[600px] lg:h-[470px] bg-red-950 text-white  ">
            <div className=' mx-[40px] grid grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="w-[155px] h-[105px] flex-col justify-start items-center my-[66px] inline-flex ">
                    <div className="w-[82px] h-[78px] relative ">
                        <div className="w-[82px] h-[78px] left-0 top-0 absolute">
                            <img className='' src={Frame} alt='/'/>
                        </div>

                        <div className="justify-start items-center gap-5 absolute top-20 left-[-35px] ">
                            <div className='text-white text-xl font-normal flex uppercase pb-2 leading-tight'>Wedding planning
                        </div>

                        <div className="w-[191px] text-[#cfadad] text-xl font-normal h-[33px] mb-2 font-['Roboto'] leading-loose">+2 1005858384
                         </div>
                         <div className="text-[#cfadad] text-xl font-normal font-['Roboto'] pb-3 leading-loose">Support@weddingplanning.com</div>
                        </div>
                    </div>
                </div>

                <div className='relative top-28'  >
                    <div  className="text-white text-2xl font-light mb-5 font-['Roboto'] leading-7">Quick Links</div>

                    <div className='flex justify-start items-center '>
                            <div className="w-[130px] h-[133px] flex-col justify-start items-start gap-4 inline-flex">
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">Home</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">About Us</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight" >Wedding planning</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">Venus</div>
                            </div>

                        <div>
                            <div className="w-[77px] h-[133px] flex-col justify-start items-start gap-4 inline-flex">
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight" >Attire</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">Service</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">Blog</div>
                                <div className="text-[#cfadad] text-base font-light font-['Roboto'] leading-tight">Contact Us</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative lg:top-28 top-20'>
                    <div >
                        <div className="text-white text-2xl font-light font-['Roboto'] mb-8 leading-7">Subscribe</div>
                    </div>
                    <div>
                        <div>
                         <input className='w-[400px]  h-[51px] bg-white rounded-md border border-violet-950 border-opacity-20"' type={"text"}
                           placeholder='Get product updates' />
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-11/12 h-px relative top-24 opacity-20 bg-white border border-white mx-auto"/>


            <div>
                <div className='relative top-28 flex md:justify-between  justify-around'>
                    <div className='flex gap-2.5 lg:mx-28 '>
                    <SlSocialTwitter className='text-white border rounded-full p-2' size={38}/>
                    <CiFacebook className='text-white border rounded-full p-2' size={38} />
                    <FaLinkedinIn className='text-white border rounded-full p-2' size={38} />
                    </div>
                    <div>
                        <div className="text-white text-base lg:font-normal font-['Roboto']  lg:mx-28 ">© 2023 Wedding planning . All
                            rights reserved
                        </div>
                    </div>
                </div>

            </div>

            </div>

    )
}
export default Footer;