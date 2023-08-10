import React from 'react';
import Cart from './Cart';
import { locationsData } from "./locationData";


const BasedOnLocation = () => {
    return (
        <div className='my-[130px] w-[1230px] min-h-[600px] mx-auto'>
            <div className='h-full w-full'>
                {/* -------- TITLE --------- */}
                <div
                    className='
                w-full flex justify-between items-center mb-[34px]'
                >
                    <div>
                        <h1 className='text-[34px] font-semibold mb-[6px]'>
                            Based on your location
                        </h1>
                        <p className='text-Gray text-[14px]'>
                            some of our picked properties near your location
                        </p>
                    </div>
                    <button
                        className='
                    px-[23px] py-[12px] bg-Blue text-white
                    rounded-[8px] text-[14px]'
                    >
                        Browse more property
                    </button>
                </div>

                {/* ------- CONTENT -------- */}
                <div className='flex flex-wrap gap-10 justify-between w-full'>
                    {
                        locationsData.map(
                            (item) => {
                                const { id,
                                    imgSrc,
                                    popular,
                                    price,
                                    name,
                                    address,
                                    beds,
                                    bathrooms,
                                    width,
                                    height
                                 } = item;
                                return <>
                                    <Cart
                                        key={id}
                                        id={id}
                                        imgSrc={imgSrc}
                                        popular={popular}
                                        price={price}
                                        name={name}
                                        address={address}
                                        beds={beds}
                                        bathrooms={bathrooms}
                                        width={width}
                                        height={height}
                                    />
                                </>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}



export default BasedOnLocation;
