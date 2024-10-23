import { motion } from 'framer-motion'
import React from 'react'

const FeaturedCard = ({ heading, image, buttons }) => {

  return (
    <div data-scroll data-scroll-section className=' h-[45vw] w-[100%]  '>
            <div className="flex h-[10%] items-center">
            <h3 className=' tracking-tight flex items-center'>
                <span className=' h-2 w-2 bg-black rounded-full mr-2'></span>
                {heading}
            </h3>
            </div>

            <motion.div  
                whileHover={{ scale: .96, transition: { duration: .6 } }} 
                className=" w-full rounded-xl overflow-hidden h-[80%]">
                <img className=' w-full object-cover h-full' src={image} alt="" />
            </motion.div>

            <div className="flex h-[10%] items-center gap-2">
                {buttons.map((button, index) => (
                    <motion.div
                    whileHover={{backgroundColor:"black", color:"#fff"}}
                    transition={{duration:.8}}
                    className='border-black border  rounded-full px-3 py-1' key={index}>
                        {button}
                    </motion.div>
                ))}
            </div>

    </div>
  )
}

export default FeaturedCard
