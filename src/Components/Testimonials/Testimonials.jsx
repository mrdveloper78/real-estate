import React from 'react';
import ava from "../../Images/ava1.png";
import { testimonialsData } from "./testimonialsData";
import CircularProgress from '@mui/material/CircularProgress';
import ProgressBar from "../../Utils/ProgressBar/ProgressBar";



const Testimonials = ({ name, desc, userType }) => {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='flex flex-col items-center mt-[70px] gap-[30px]'>
            <h3 className='text-center w-[640px] font-semibold h-[100px]'>
                “{desc}”
            </h3>

            <div className='flex'>
                <h2 className='font-bold text-[16px]'>{name}</h2>
                ,
                <p className='text-Gray text-[16px] ml-[4px]'>{userType}</p>
            </div>


        </div>
    )
}


export default Testimonials;
