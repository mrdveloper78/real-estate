import React from 'react';
import LandingPage from '../Components/LandingPage/LandingPage';
import VirtualTour from '../Components/VirtualTour/VirtualTour';
import NewWaySection from '../Components/NewWaySection/NewWaySection';
import BasedOnLocation from '../Components/BasedOnLocation/BasedOnLocation';
import Testimonials from '../Components/Testimonials/Testimonials';
import ProgressBar from '../Utils/ProgressBar/ProgressBar';
import TestimonialComponent from '../Components/Testimonials/TestimonialComponent';
import Contact from '../Components/Contact/Contact';




const Home = () => {
  return (
    <div className=' z-0'>
      <LandingPage/>
      <VirtualTour/>
      <NewWaySection/>
      <BasedOnLocation/>
      <TestimonialComponent/>
      <Contact/>
    </div>
  )
}


export default Home;
