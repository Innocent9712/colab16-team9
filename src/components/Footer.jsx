import React from 'react'
import linkedin_logo from "../assets/linkedin_logo.svg"
import twitter_logo from "../assets/twitter_logo.svg"


const Footer = () => {
  return (
    <footer className='bg-[#9CC4E7] flex flex-col items-center py-8 gap-4'>
        <ul className='flex items-center gap-4'>
            <li>
                <a href="https://r.mtdv.me/CUkJ9l03eu" target="_blank" rel="noopener noreferrer">
                    <img className='w-[2rem]'  src={linkedin_logo} alt="linkedin logo link" />
                </a>
            </li>
            <li>
                <a href="https://r.mtdv.me/CUkJ9l03eu" target="_blank" rel="noopener noreferrer">
                    <img className='w-[2rem]'  src={twitter_logo} alt="twitter logo link" />
                </a>
            </li>
        </ul>
        <p className='text-white text-center'>© Copyright 2023 Dr. CarQuotes. All rights reserved.</p>
    </footer>
  )
}

export default Footer