import React, { useEffect } from 'react'
import Nav from './Components/Nav'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Reviews from './Components/Reviews'
import Cards from './Components/Cards'
import Featured from './Components/Fearured'
import Ready from './Components/Ready'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'
import Eyepage from './Components/Eyepage'

const App = () => {
  useEffect(() => {
    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768; // Adjust the width as needed
    let locomotiveScroll;

    if (!isMobile) {
      locomotiveScroll = new LocomotiveScroll({
        smooth: true,
        smoothMobile: false,
        multiplier: 0.25,
      });
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy(); // Clean up on unmount
      }
    };
  }, []);

  return (
    <div className='w-full bg-[#f1f1f1]' data-scroll-container>
      <Nav/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Eyepage/>
      <Featured/>
      <Reviews/>
      <Cards/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default App
