import { motion } from 'framer-motion'
import React from 'react'


const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".01" className=' relative py-5 w-full rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
      <div className=" absolute w-full h-5 bg-[#004d43] bottom-[-20px]"></div>
        <div className="overflow-hidden w-full leading-none whitespace-nowrap flex items-center relative">
          {["top-20", "bottom-8"].map((position, index) => (
            <div key={index} className={`absolute ${position} left-0 w-full h-[1.2px] bg-[#26685f]`}></div>
          ))}
          <>
          {[1,2,3].map((item) => (
            <motion.h1 initial={{x:"0%"}} animate={{x:"-205%"}}
            transition={{ease:"linear", duration:15, repeat:Infinity}}
            key={item} className=' text-white ml-10 text-[28vw]  tracking-[-4px] font-[font1]'>WE ARE OCHI</motion.h1>
          ))}
          </>
        </div>
    </div>
  )
}

export default Marque
