import React from 'react';
import house from "../../Images/house1.jpg";
import { BiHeart } from "react-icons/bi";
import { LuBedSingle } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import { RxDimensions } from "react-icons/rx";
import { BsStars } from "react-icons/bs";



const Cart = ({imgSrc, popular,price,name,address,beds,bathrooms,width,height}) => {
    return (
        <div className='w-[330px] h-[380px] rounded-md border border-LightBlue'>
            {/* ---------- IMAGE ----------- */}
            <div className='w-full mb-[30px] relative'>
                <img
                    src={imgSrc}
                    className='w-full h-[173px] rounded-t-md object-fill '
                    alt="house image"
                />

                <div 
                className={`${popular ? 'absolute' :'hidden'} bottom-[-14px] left-[-8px] 
                p-0 flex flex-col justify-center h-[20px]`}
                >
                    <div
                        className='flex items-center
                                bg-Blue text-white text-[15px] gap-1
                                py-[6px] px-[20px] 
                                rounded-t-[8px] rounded-br-[8px]'
                    >
                        <BsStars />
                        POPULAR
                    </div>
                    <div className='triangle-up w-[4px]'/>
                </div>
            </div>

            {/* ---------- CONTENT --------- */}
            <div className='p-[20px] pt-0'>
                {/* price & like */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <h2 className='text-[23px] font-semibold text-Blue'>
                            ${price}
                        </h2>
                        <span className='text-[12px] text-Gray'>/month</span>
                    </div>

                    <div
                        className='w-[38px] h-[38px] rounded-full
                        bg-AlicetBlue border border-LightBlue
                        flex items-center justify-center text-Blue
                        text-[20px]'
                    >
                        <BiHeart />
                    </div>
                </div>

                {/* name */}
                <h1 className='text-[20px] font-semibold'>
                    {name}
                </h1>

                {/* address */}
                <p className='text-[14px] text-Gray mt-[10px]'>
                    {address}
                </p>
                <hr className='my-[10px]' />

                {/* more */}
                <div className='flex  justify-between'>
                    <div
                        className='flex text-[12px] items-center text-Gray
                    gap-[6px]'
                    >
                        <LuBedSingle className='text-Blue text-[16px]' />
                        {beds} Beds
                    </div>

                    <div
                        className='flex text-[12px] items-center text-Gray
                    gap-[6px]'
                    >
                        <BiBath className='text-Blue text-[16px]' />
                        {bathrooms} Bathrooms
                    </div>

                    <div className='flex text-[12px] items-center text-Gray
                    gap-[6px]'>
                        <RxDimensions className='text-Blue text-[16px]' />
                        <div>
                            {width}×{height} m<sup>2</sup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Cart;
