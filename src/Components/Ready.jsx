import React from 'react'
import Button from './Button'
import Eye from './Eye'

const Ready = () => {
    const text =[
        "READY", "TO START", "THE PROJECT?"
    ]
  return (
    <div data-scroll data-scroll-section id='ready' className='pt-40 relative bg-[#cdea68]'>
      <div className=" absolute w-full bottom-[-13.6vw] left-0  bg-[#cdea68] h-52"></div>
        <div className=" absolute top-0 w-full">
      <Eye/>
        </div>
        <div className="flex  mb-14  items-center leading-[11vw] flex-col">
            {text.map((item, index) => (
                <h1 key={index} className=' text-[15vw] font-[font1]'>{item}</h1>
            ))}
        </div>
        <div className="flex items-center gap-3 flex-col">
            <Button item={"START THE PROJECT"}/>
            <span className=' text-lg'>OR</span>
            <Button item={"HELLO@OCHI.DESIGN"} />
        </div>
    </div>
  )
}

export default Ready