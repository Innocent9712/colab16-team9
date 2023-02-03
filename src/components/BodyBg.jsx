import React from 'react'
import Footer from './Footer'
import bg_image from "../assets/skyline_bg.svg"
import Header from './Header'
import MediaQuery from 'react-responsive'
import logo from "../assets/logo_text.svg"


const BodyBg = ({useText, children}) => {
  return (
    <div>
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
        <Footer />
    </div>
  )
}

export default BodyBg