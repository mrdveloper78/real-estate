import React from 'react';
import  House  from "../../Images/house2.JPG";
import { BsBarChartFill } from "react-icons/bs";
import { CgServer } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";


const NewWaySection = () => {
  return (
    <div className='my-[130px] w-[1230px] h-[500px] mx-auto'>
      <div
        className='flex w-full h-full 
      bg-AlicetBlue border border-LightBlue rounded-md'
      >

        {/* --------- CONTENT ---------- */}
        <div className='flex-1 flex flex-col gap-8 py-12 pl-14 pr-[10px]'>
          <h1 className='text-[40px] font-semibold w-[500px]'>
            The new way to find your new home
          </h1>

          <p className='text-Gray w-[300px]'>
            Find your dearm place to live in with more than 10k+
            properties listed
          </p>

          <div className='w-full mt-[30px] flex justify-between'>
            <div className='flex flex-col items-center '>
              <div
                className='w-[60px] h-[60px] rounded-full 
                    bg-LightBlue  border-[3px]  border-white
                    outline outline-[1px] outline-LightBlue
                    flex items-center justify-center relative mb-[18px]'
              >
                <div
                  className='w-[25px] h-[27px] bg-white
                        rounded-t-[50%] rounded-b-[3px] 
                        flex items-center justify-center text-Blue
                        z-0'
                >
                  %
                </div>

                <div
                  className='
                w-[19px] h-[19px] bg-Blue text-white rounded-[50%]
                absolute bottom-0 right-0 p-[2px] flex items-center
                justify-center z-10'
                >
                  <BsBarChartFill className='text-white' />
                </div>
              </div>

              <h2 className='text-center text-[20px] font-semibold'>7.4%</h2>

              <p className='text-center text-[12px] text-Gray'>
                Property return rate
              </p>
            </div>
            
            <div className='flex flex-col items-center '>
              <div
                className='w-[60px] h-[60px] rounded-full 
                    bg-LightBlue  border-[3px]  border-white
                    outline outline-[1px] outline-LightBlue
                    flex items-center justify-center relative mb-[18px]'
              >
                <CgServer color='blue' size={30}/>

                <div
                  className='
                w-[19px] h-[19px] bg-Blue text-white rounded-[50%]
                absolute bottom-0 right-0  flex items-center
                justify-center z-10 '
                >
                  <RiSearchLine  />
                </div>
              </div>

              <h2 className='text-center text-[20px] font-semibold'>
                3,856
              </h2>

              <p className='text-center text-[12px] text-Gray'>
                Property in Sell & Rent
              </p>
            </div>

            <div className='flex flex-col items-center '>
              <div
                className='w-[60px] h-[60px] rounded-full 
                    bg-LightBlue  border-[3px]  border-white
                    outline outline-[1px] outline-LightBlue
                    flex items-center justify-center relative mb-[18px]'
              >
                <div
                  className='w-[25px] h-[27px] bg-white
                        rounded-md 
                        flex items-center justify-center text-Blue
                        z-0 text-[20px] font-semibold'
                >
                  $
                </div>

                <div
                  className='
                w-[19px] h-[19px] bg-Blue text-white rounded-[50%]
                absolute bottom-0 right-0 p-[2px] flex items-center
                justify-center z-10'
                >
                  <TiTickOutline className='text-white' />
                </div>
              </div>

              <h2 className='text-center text-[20px] font-semibold'>
                2,540
              </h2>

              <p className='text-center text-[12px] text-Gray'>
                Daily Completed Transactions
              </p>
            </div>

          </div>
        </div>

        {/* ----------- IMAGE ---------- */}
        <div className='flex-1 w-full h-full flex items-center py-[20px]'>
          <img 
          src={House} 
          alt="house image"
          className='w-full h-full' 
          />
        </div>

      </div>
    </div>
  )
}



export default NewWaySection;
