import React from 'react'
import Footer from './Footer'
import bg_image from "../assets/skyline_bg.svg"
import Header from './Header'

const BodyBg = ({children}) => {
  return (
    <div>
        <section className='bg-cover bg-center min-h-full lg:bg-[center_bottom_1rem]' style={{backgroundImage: `url("${bg_image}")`}}>
            <div className='bg-[#c5c5c5ad]'>
              <div className='px-4 py-3'>
                <Header />
              </div>
                {children}
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default BodyBg