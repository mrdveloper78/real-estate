import React from 'react';



const Contact = () => {
    return (
        <div className=' bg-PennBlue'>
            <div className='w-[1230px] h-[400px] mx-auto py-[50px] flex flex-col items-center gap-[20px]'>
                <h3 className=' text-[20px] font-semibold text-Blue'>
                    No Spam Promise
                </h3>

                <h1 className='text-white text-[30px] font-semibold'>
                    Are you a landlord?
                </h1>

                <p className='text-Gray text-[14px]'>
                    Discover way to incrice your home's value and get listed.No Spam.
                </p>

                <div 
                className='
                w-[461px] h-[60px] bg-white rounded-md 
                mt-[10px] p-[20px] flex items-center justify-between'>
                    <input
                        type='email'
                        placeholder='Enter your email address'
                        className='bg-transparent border-none outline-none'
                    />

                    <button className='px-[25px] py-[5px] bg-Blue text-white rounded'>
                        Submit
                    </button>
                </div>

                <p className='text-DarkGray text-[14px]'>
                    Join 
                    <span className='text-Gray text-[18]'> 10,000+ </span> 
                    other landlords in our Meyisha community.
                </p>
            </div>
        </div>
    )
}



export default Contact;
