import React from 'react'

const Reviews = () => {
  const review = [
    {Company: "Karman Ventures", name: "William Barnes"},
    {Company: "Planety", name: "Nine Walloch"},
    {Company: "Workiz Easy", name: "Tomer Levy"},
    {Company: "Premium Blend", name: "Ellen Kim"},
    {Company: "Hypercare System", name: "BBrendan Goss"},
    {Company: "Officevibe", name: "Raff Labrie"},
    {Company: "Orderlion", name: "Stefan Strohmer"},
    {Company: "Black Book", name: "Jaci Smith"},
    {Company: "Trawa Energy", name: "David Budde"},
  ] 

  return (
    <div className=' w-full bg-[#f1f1f1]'>
        <h1 className=' ml-14 text-[54px] mb-8'>Clients' reviews</h1>
          {review.map((item, index) => (
                    <div key={index} className=" px-14 py-5 text-base flex justify-between items-center border-y-[1px] border-gray-300">
                        <a href="#"><u>{item.Company}</u></a>
                        <div className=" w-1/2 flex justify-between">
                        <p>{item.name}</p>
                        <button><u>READ</u></button>
                        </div>
                    </div>
          ))}
    </div>
  )
}

export default Reviews