import React from 'react'

const GeneralBtn = ({showBtn, handleClick}) => {
  return (
    <button className={`mt-6 px-8 font-Inter text-lg bg-[#D9D9D9] text-black rounded-full ${!showBtn && "invisible" } shadow-[0px_4px_8px_1px_rgba(0,0,0,0.25)] focus:bg-[#FFBA20] lg:hover:bg-[#FFBA20]`} onClick={handleClick}>Enter</button>
  )
}

export default GeneralBtn