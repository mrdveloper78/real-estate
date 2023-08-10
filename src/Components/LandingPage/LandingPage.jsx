import React, { useState } from 'react';
import BannerImg from "../../Images/mapBanner.jpg";
import { MdDateRange } from "react-icons/md";
import house1 from "../../Images/house1.jpg";


const LandingPage = () => {

  const [bor,setBor] = useState(1);

  return (
    <div className='w-[100vw] h-[100vh] bg-BannerImg bg-cover mx-auto  '>
      <div className=' pt-[140px] w-[1230px] mx-auto flex'>
        {/* LEFT SIDE */}
        <div className=' flex-1'>
          {/* ------- TITLE --------- */}
          <div className='w-[400px]'>
            <h1 className='text-[45px] font-semibold leading-tight'>
              Buy,rent or sell your property easily
            </h1>

            <p className='my-[20px] text-[16px] font-semibold '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Harum officia hic eligendi architecto quae! Repellendus.
            </p>
          </div>

          {/* -------- RATE --------- */}
          <div className='my-[30px] flex w-[300px] justify-between'>
            <div className='flex gap-5'>
              <div className='w-[3px] h-full bg-[#007FFF]' />
              <div>
                <h1 className='text-[30px] text-Blue font-semibold '>
                  50K+
                </h1>
                <p className='text-[16px] font-semibold text-Gray'>
                  renters
                </p>
              </div>
            </div>

            <div className='flex gap-5'>
              <div className='w-[3px] h-full bg-[#007FFF]' />
              <div>
                <h1 className='text-[30px] text-Blue font-semibold '>
                  10K+
                </h1>
                <p className='text-[16px] font-semibold text-Gray'>
                  properties
                </p>
              </div>
            </div>
          </div>

          {/* -------- BROWSE ------- */}
          <div>
            <div>
              <button
              type='button'
              onClick={()=>setBor(1)} 
              className={`
              ${bor === 1 ? 'border-b-4 text-Blue border-Blue':'border-none'}
              bg-white w-[100px] p-[12px] border-b-2 rounded-tl-md 
              `}
              >
                Rent
              </button>

              <button
              type='button'
              onClick={()=>setBor(2)} 
              className={`
              ${bor === 2 ? 'border-b-4 text-Blue border-Blue':'border-none'}
              bg-white w-[100px] p-[12px]
              `}
              >
                Buy
              </button>

              <button
              type='button'
              onClick={()=>setBor(3)} 
              className={`
              ${bor === 3 ? 'border-b-4 text-Blue border-Blue':'border-none'}
              bg-white w-[100px] p-[12px] rounded-tr-md
              `}
              >
                Sell
              </button>
            </div>

            <div
              className='w-[710px] bg-white p-[20px] 
            rounded-b-md absolute shadow-lg shadow-Gray'
            >
              <div className='flex h-full justify-between '>
                <div>
                  <p className='text-Gray'>Location</p>
                  <p className='font-semibold text-[18px]'>Barcelona,Spain</p>
                </div>

                <div className='w-[1px] h-[40px] bg-[#007FFF] mx-[30px]' />
                <div>
                  <p className='text-Gray'>When</p>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold text-[18px]'>Select move-in Date</span>
                    <MdDateRange />
                  </p>
                </div>

                <div className='w-[1px] h-[40px] bg-[#007FFF] mx-[30px]' />
                <div className='flex items-center justify-center'>
                  <button className='bg-Blue text-white p-4 rounded-md text-[12px]'>
                    Browse properties
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className=' flex-1 '>
          <img 
          src={house1} alt="house" 
          className='rounded-[10px] shadow-lg shadow-yellow-200 w-[80%] hover:w-[85%]' 
          />
        </div>
      </div>
    </div>
  )
}


export default LandingPage;

