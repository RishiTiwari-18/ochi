import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className=' px-6 bg-black flex items-center gap-6 text-white rounded-full py-4 text-[17px]'>
            {item}
        </button>
    </div>
  )
}

export default Button