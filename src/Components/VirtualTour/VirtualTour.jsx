import React from 'react';
import { PiMonitorPlay } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";


const VirtualTour = () => {
    return (
        <div className='my-[130px] w-[1230px] h-[600px] mx-auto'>
            <div className='flex w-full h-full '>
                {/* LEFT SIDE */}
                <div className='flex-1 pr-[60px]'>
                    <div className='w-[100%] bg-oldHouse h-full bg-cover rounded-md '>
                        {/* up */}
                        <div
                            className='bg-white px-[25px] py-[20px] rounded-md 
                    mt-[28px] w-[373px] absolute left-[30px] border border-LightBlue
                    shadow-md shadow-LightBlue flex items-center justify-between'
                        >
                            <div
                                className='w-[60px] h-[60px] rounded-full 
                        bg-AlicetBlue border border-LightBlue
                        flex items-center justify-center '
                            >
                                <PiMonitorPlay size={30} color='blue' />
                            </div>

                            <div>
                                <h1 className='font-semibold text-[18px] text-[#1F305E]'>
                                    Virtual home tour
                                </h1>

                                <p className='text-Gray text-[15px]'>
                                    We provide you with virtual tour
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='flex-1 flex justify-center'>
                    <div className='flex flex-col justify-center h-full gap-[20px]'>
                        <div 
                        className='bg-AlicetBlue p-[8px] border-[2px] 
                        border-LightBlue w-[290px] h-[55px] flex items-center
                        justify-between rounded-md'
                        >
                            <span className='bg-white py-[8px] px-[16px] text-Blue border-[2px] 
                                border-LightBlue rounded-md font-semibold'>
                                for tenants
                            </span>

                            <span className='mx-auto text-Gray font-semibold'>
                                forlandlords
                            </span>
                        </div>

                        <h1 className='text-[33px] font-semibold w-[340px]'>
                            We make it easy for 
                            tenants landlords
                        </h1>

                        <p className='w-[340px] text-Gray'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Quia blanditiis vitae itaque excepturi omnis distinctio 
                            numquam a amet? 
                        </p>

                        <button 
                        className='flex items-center gap-[2px] py-[10px] px-[20px]
                        bg-Blue w-fit text-white rounded-md'
                        >
                            See more 
                            <MdKeyboardArrowRight size={25}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default VirtualTour;
