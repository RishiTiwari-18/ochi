import React from 'react'
import Button from './Button'

const About = () => {
    const para = [
        "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
        "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating."
    ]

    const links = [
        "Instagram",
        "Behance",
        "Facebook",
        "Linkedin"
    ]
  return (
    <div data-scroll data-scroll-container data-scroll-speed="-.05" className=' w-full z-[100] rounded-3xl bg-[#cdea68]'>
        <div className=" w-full px-14 pt-24 pb-16 border-b-[1px] border-[#99ad53] ">
        <h1 className=' text-[52px] leading-none w-[88%]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, <u>and hire great peo­ple</u>.</h1>
        </div>

        <div className=" w-full px-14 flex justify-between pt-4 pb-20 border-b-[1px] border-[#99ad53] ">
            <div className=" w-1/2 ">
            <p className=' text-lg'>What you can expect:</p>
            </div>

            <div className=" text-[16.4px] flex justify-between w-1/2 ">
                <div className="w-1/2 flex justify-between gap-8 flex-col">
                {para.map((item, index) => (
                    <p key={index} className=' w-[85%] '>{item}</p>
                ))}
                </div>
                <div className="w-1/3 flex justify-center flex-col">
                        <p className=' mb-4]'>S:</p>
                        {links.map((item, index) => (
                            <a key={index} href="#"><u>{item}</u></a>
                        ))}
                </div>
            </div>
        </div>

        <div className=" px-14 pb-20 py-5 w-full flex ">
            <div className=" w-1/2">
               <h1 className=' text-[54px] mb-6'>Our approach:</h1>
                <Button item={"READ MORE"}/>
            </div>
            <div className=" w-1/2 rounded-xl overflow-hidden">
                <img className=' object-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
