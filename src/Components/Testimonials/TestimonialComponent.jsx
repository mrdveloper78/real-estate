import React from 'react';
import { testimonialsData } from "./testimonialsData";
import ProgressBar from "../../Utils/ProgressBar/ProgressBar";
import Testimonials from './Testimonials';



const TestimonialComponent = () => {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= testimonialsData.length-1 ? 0 : prevProgress + 1));      
        }, 8000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className='liner-bg'>
            <div className=' mt-[130px] w-[1230px] h-[600px] mx-auto'>
                <div className='flex flex-col items-center'>
                    {/* TITLE */}
                    <h1 className='my-[30px] text-[32px] font-semibold'>
                        Testimonials
                    </h1>

                    {/* DESCIPTION */}
                    <p className='w-[440px] text-[18px] text-Gray text-center'>
                        See what our property managers, landlords and
                        tenants have to say.
                    </p>

                    {/* CONTENT */}
                    {
                        testimonialsData && testimonialsData.map(
                            (data) => {
                                const {
                                    userType,
                                    desc,
                                    id,
                                    imgUrl,
                                    name
                                } = data;
                                return (
                                    id === progress &&
                                    <Testimonials
                                        name={name}
                                        desc={desc}
                                        userType={userType}
                                    />
                                )
                            }
                        )
                    }

                    {/* users ava */}
                    <div className='flex mt-[40px] w-[200px] justify-between'>
                        {
                            testimonialsData && testimonialsData.map(
                                (data, index) => {
                                    const { imgUrl, id } = data;
                                    return (
                                        <ProgressBar imgUrl={imgUrl} id={id} />
                                    )
                                }
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


export default TestimonialComponent;

