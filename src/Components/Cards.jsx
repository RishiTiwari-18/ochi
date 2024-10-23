import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    const card = [
        { image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg", button: "©️2019-2022" },
        { image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg", button: "RATING 5.0 ON CLUTCH" },
        { image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png", button: "BUSINESS BOOTCAMP ALLUMNI" },
    ];

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: ".cards-grid", // Pin the grid container
            start: "top top", // Start pinning when the top of the grid hits the top of the viewport
            end: "bottom top", // End pinning when the bottom of the grid hits the top of the viewport
            pin: true, // Enable pinning
            pinSpacing: false, // Prevent additional spacing
        });

        return () => {
            trigger.kill(); // Clean up the ScrollTrigger on component unmount
        };
    }, []);

    return (
        <div data-scroll data-scroll-section  className='cards-grid grid grid-cols-4 bg-[#f1f1f1] gap-6 px-14 py-32 pb-96'>
            {card.map((item, index) => (
                <div key={index} className={`${index === 0 ? "col-span-2" : "col-span-1"}
                ${index === 0 ? "bg-[#004d43]" : "bg-[#212121]"} flex justify-center items-center relative h-[400px] rounded-xl`}>
                    <img className={` ${index === 2 ? "w-24" : "w-36"}`} src={item.image} alt="" />
                    <button className={` ${index === 0 ? "text-[#cdea68]" : "text-white"}
                     border ${index === 0 ? "border-[#cdea68]" : "border-[#f1f1f1]"}
                     absolute bottom-8 left-8 z-50 px-3 py-1 rounded-full`}>{item.button}</button>
                </div>
            ))}
        </div>
    )
}

export default Cards
