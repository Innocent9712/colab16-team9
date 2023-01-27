import React from 'react'
import { motion } from 'framer-motion'

const GeneralBtn = ({showBtn, handleClick}) => {
  return (
    <motion.button whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className={`mt-6 px-8 font-Inter text-lg bg-[#D9D9D9] text-black rounded-full ${!showBtn && "invisible" } shadow-[0px_4px_8px_1px_rgba(0,0,0,0.25)] focus:bg-[#FFBA20] lg:hover:bg-[#FFBA20]`} onClick={handleClick}>Enter</motion.button>
  )
}

export default GeneralBtn