import React, { useState } from 'react';
import { RiHomeSmile2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = () => {



  return (
    <div
      className='
      fixed top-0 right-0 w-[100vw] h-[12vh]
      py-[20px] px-[40px] z-[100] bg-white'
    >
      <div className='flex items-center justify-between'>
        {/* -------- LOGO --------- */}
        <div className='flex items-center gap-[6px]'>
          <RiHomeSmile2Fill className='text-blue-900 text-[30px]' />
          <span className='text-[30px] font-semibold'>MeyIsha</span>
        </div>

        {/* -------- LIST --------- */}
        <div>
          <ul
            className='
          flex items-center justify-between w-[500px]
          text-[20px] font-medium'
          >
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li className='relative'>
              <button className="peer flex items-center gap-[4px]">
                ManageProperty
                <IoIosArrowDown />
              </button>


              <div
                className="
                hidden peer-hover:flex hover:flex
                w-[200px] absolute top-[30px] 
                flex-col bg-white drop-shadow-lg"
              >
                <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
              </div>
            </li>
            <li className='relative'>
              <button className="peer flex items-center gap-[4px] ">
                Resources
                <IoIosArrowDown />
              </button>


              <div
                className="hidden peer-hover:flex hover:flex
                w-[200px] absolute top-[30px] 
                flex-col bg-white drop-shadow-lg"
              >
                <a className="px-5 py-3 hover:bg-gray-200" href="#">About Us</a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">Contact Us</a>
                <a className="px-5 py-3 hover:bg-gray-200" href="#">Privacy Policy</a>
              </div>
            </li>
          </ul>
        </div>

        {/* ---- LOGIN & REGISTER --*/}
        <div className='flex gap-[15px]'>
          <button
            className='
          p-[10px] px-[20px] border border-solid border-blue-600
          rounded-[6px] text-[16px] font-semibold'>
            Login
          </button>

          <button
            className='
          p-[10px] px-[20px] border border-solid text-white
          rounded-[6px] text-[16px] font-semibold bg-blue-600'
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
