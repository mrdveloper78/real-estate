import React from 'react';
import { RiHomeSmile2Fill } from "react-icons/ri";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='h-[650px]'>
      {/* CONTENT */}
      <div className='my-[70px] w-[1230px]  mx-auto flex items-start gap-[150px]'>
        {/* logo */}
        <div className='flex items-center gap-[6px]'>
          <RiHomeSmile2Fill className='text-blue-900 text-[30px]' />
          <span className='text-[30px] font-semibold'>MeyIsha</span>
        </div>

        <div className='flex flex-col gap-[100px]'>
          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>SELL A HOME</li>
            <li className='text-DarkGray'>Reqest an offer</li>
            <li className='text-DarkGray'>Pricing</li>
            <li className='text-DarkGray'>Reviews</li>
            <li className='text-DarkGray'>Stories</li>
          </ul>

          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>BUY A HOME</li>
            <li className='text-DarkGray'>Buy</li>
            <li className='text-DarkGray'>Finance</li>
          </ul>
        </div>

        <div className='flex flex-col gap-[100px]'>
          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>BUY,RENT AND SELL</li>
            <li className='text-DarkGray'>Buy and sell properties</li>
            <li className='text-DarkGray'>Rent home</li>
            <li className='text-DarkGray'>Builder trade-up</li>
          </ul>

          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>TERMS & PRIVACY </li>
            <li className='text-DarkGray'>Trust & Safety</li>
            <li className='text-DarkGray'>Terms of Service</li>
            <li className='text-DarkGray'>Privacy Policy</li>
          </ul>
        </div>

        <div className='flex flex-col gap-[100px]'>
          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>ABOUT</li>
            <li className='text-DarkGray'>Company</li>
            <li className='text-DarkGray'>How it works</li>
            <li className='text-DarkGray'>Contact</li>
            <li className='text-DarkGray'>investors</li>
          </ul>

          <ul className='flex flex-col gap-5'>
            <li className='mb-[10px] font-bold'>RESOURCES</li>
            <li className='text-DarkGray'>Blog</li>
            <li className='text-DarkGray'>Guides</li>
            <li className='text-DarkGray'>FAQ</li>
            <li className='text-DarkGray'>Help Center</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* COPY RIGHT */}
      <div className='w-[1230px] h-[30px]  mx-auto flex items-center justify-between'>
        <div>
          <p className='text-Gray'>
            ©2023 MeyIsha.All rights recerved
          </p>
        </div>

        <div className='flex gap-4 text-Gray text-[20px]'>
          <BiLogoFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer;
