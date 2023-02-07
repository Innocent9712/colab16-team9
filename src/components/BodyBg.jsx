import React from 'react'
import Footer from './Footer'
import bg_image from "../assets/skyline_bg.svg"
import Header from './Header'
import MediaQuery from 'react-responsive'
import logo from "../assets/logo_text.svg"
import back from "../assets/arrow_back.svg"
import { useNavigate } from 'react-router-dom'


const BodyBg = ({useText, currPage, children}) => {
  const arr = Array.from({length: 5}, (_, i) => i + 1)
  const navigate = useNavigate()
  return (
    <div className='relative'>
        <section className='bg-cover bg-center min-h-full lg:bg-[center_bottom_1rem]' style={{backgroundImage: `url("${bg_image}")`, boxShadow: 'inset 0 0 0 2000px rgba(255,246, 175, 0.6)'}}>
            <div className='bg-[#c5c5c5ad]'>
              <div className='px-4 py-3'>
                <Header  />
              </div>
              <div className='relative min-h-[70vh]'>
                {children}
                </div>
            </div>
        </section>
        <div className='absolute w-full bottom-[12rem] md:bottom-[9.5rem] z-20'>
          <ul className='flex justify-evenly w-[60%] max-w-[400px] mx-auto'>
            {
              arr.map((item, index) => (
                <li className={`w-[15px] h-[15px] bg-black rounded-full ${currPage == item ? "bg-[#FFBA20]" :"bg-[#FFBA2085]"}`} key={index}></li>
              ))
            }
          </ul>
        </div>
        <button className='absolute bg-transparent bottom-[11rem] md:bottom-[9.5rem] z-20' onClick={() => navigate(-1)}>
          <img src={back} alt="arrow back"  />
        </button>
        <Footer />
    </div>
  )
}

export default BodyBg