// src/Components/Featured.jsx

import React from 'react';
import FeaturedCard from './FeaturedCard';
import Button from './Button';

const Featured = () => {
    const featuredItems = [
        { 
            heading: "CARDBOARD SPACESHIP", 
            image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png", 
            buttons: ["BRANDED TEMPLATE", "SALES DECK", "SOCIAL MEDIA TEMPLATES"] 
        },
        { 
            heading: "AH2 & MATT HORN", 
            image: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png", 
            buttons: ["PITCH DECK"] 
        },
        { 
            heading: "FYDE", 
            image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png", 
            buttons: ["AUDIT", "COPYWRITING", "SALES DECK", "SALES DECK"] 
        },
        { 
            heading: "VISE", 
            image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg", 
            buttons: ["AGENCY", "COMPANY PRESENTATION"] 
        },
        { 
            heading: "TRAWA", 
            image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg", 
            buttons: ["BRAND IDENTITY", "DESIGN RESEARCH", "INVESTOR DECK"] 
        },
        { 
            heading: "PREMIUM BLEND", 
            image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png", 
            buttons: ["BRANDED TEMPLATE"] 
        }
    ];
    return (
        <div data-scroll data-scroll-section data-scroll-speed className="py-12 bg-[#f1f1f1] rounded-tl-3xl rounded-tr-3xl ">
            <div className=" border-b-[1.8px] py-8 px-14 border-gray-300">
                <h1 className='text-[54px]'>Featured projects</h1>
            </div>
            <div className="grid px-14 py-8 grid-cols-2 gap-4">
            {featuredItems.map((item, index) => (

<FeaturedCard key={index} heading={item.heading} image={item.image} buttons={item.buttons} />
))}
            </div>
            <div className=" w-full flex items-center justify-center py-14">
                <Button item={"VIEW ALL CASE STUDIES"}/>
            </div>
        </div>
    );
};

export default Featured;

