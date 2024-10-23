import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  const headingItems = ["WE CREATE", "EYE-OPENING", "PRESENTATIONS"];
  const imageUrl =
    "https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg";
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.7"
      className="text-xl  pt-1 bg-[#f1f1f1] w-full h-screen"
    >
      <div>
        <div className="mt-[144px] ml-14">
          {headingItems.map((item, index) => (
            <div className="flex  font-[font1] items-end" key={item}>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="h-[6vw] w-[9vw] overflow-hidden rounded-lg mr-3"
                >
                  <img
                    className="object-cover object-left h-full"
                    src={imageUrl}
                    alt={item}
                  />
                </motion.div>
              )}
              <h1 className="text-[9vw] tracking-[-1px] leading-[6.8vw]
              ">
                {item}
              </h1>
            </div>
          ))}
        </div>
        <div className=" px-16 w-full flex items-center justify-between mt-28 border-t-[1.6px] border-zinc-400 py-3 ">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className=" tracking-tight text-[17px]">
              {item}
            </p>
          ))}
          <div className=" text-base py-0.5 px-3 rounded-full border border-black">
            START THE PROJECT
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
