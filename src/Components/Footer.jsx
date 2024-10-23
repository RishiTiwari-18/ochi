import React from "react";

const Footer = () => {
  const footerData = [
    { type: "S", data: ["Instagram", "Behance", "Facebook", "LinkedIn"] },
    {
      type: "L",
      data: [
        "202-1965 W 4th Ave, Vancouver, Canada",
        "30 Chukarina St, Lviv, Ukraine",
      ],
    },
    { type: "E", data: "hello@ochi.design" },
    {
      type: "M",
      data: [
        "Home",
        "Services",
        "Our work",
        "About us",
        "Insights",
        "Contact us",
      ],
    },
  ];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".31"
      className="footer-page h-screen w-full flex bg-[#f1f1f1] px-14 py-20"
    >
      <div className=" w-1/2 h-full">
        {["EYE-", "OPENING"].map((text, index) => (
          <h1 className=" font-[font1] leading-[6.8vw] text-[9vw]" key={index}>{text}</h1>
        ))}
      </div>
      <div className=" w-1/2 h-full">
        <h1 className=" font-[font1] leading-[6.8vw] text-[9vw]">PRESENTATIONS</h1>
          <div className="flex items-center justify-between">
          <div className=" flex flex-col  justify-between">
          {footerData.slice(0, 3).map((value, key) => (
            <div key={key}>
              <h3 className=" mt-6 text-lg  mb-4">{value.type}</h3>
              <a className="flex w-40 text-[16.4px] flex-col" href="#">
                {Array.isArray(value.data)
                  ? value.data.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))
                  : value.data}
              </a>
            </div>
          ))}
        </div>
        <div className=" w-1/4">
          <h3 className="mt-6 mb-4">M</h3>
          <a className="flex flex-col" href="#">
            {footerData
              .find((value) => value.type === "M")
              .data.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
          </a>
        </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
