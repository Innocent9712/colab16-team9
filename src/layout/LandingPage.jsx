import React, {useRef, useState} from 'react'
import Header from '../components/Header'
import mascot from "../assets/logo_mascot_with_gear.png"
import location_pin from "../assets/location_pin.svg"
import bg_pic_auto from "../assets/bg_pic_auto.png"
import Footer from '../components/Footer'
// import "../styles/Landing.css"

const LandingPage = () => {
  const [showBtn, setShowBtn] = useState(false)
  const inputRef = useRef()

  const handleChange = () => {
    if (inputRef.current.value.length === 5) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }
  return (
    <div>
      <section className="hero bg-[#EFF7FF] px-2 py-4">
        <Header />
        <div className='flex flex-col items-center md:grid md:grid-cols-4 md:grid-rows-4 gap-2 mt-4 max-w-[1200px] mx-auto'>
          <h2 className='md:row-start-1 md:row-span-2 md:col-span-2 font-Itim text-2xl lg:text-4xl text-center text-black'>
            Stop overpaying.<br/>Find the best auto<br/> repair deals.
          </h2>
          <div className='md:col-start-3 md:col-span-2 md:row-span-full flex justify-center items-center'>
            <img src={mascot} alt="logo mascot" />
          </div>
          <div className='md:row-start-3 md:row-span-2 md:col-span-2 flex flex-col items-center'>
            <h3 className="text-lg text-center text-black">To better serve you,<br/>please enter your location zipcode</h3>
            <div className='relative rounded-full drop-shadow-primary border-black border-2 p-2 mt-8 bg-white flex justify-end max-w-xs'>
              <img className="absolute w-[2.7em] left-0 top-[-25px]" src={location_pin} alt="location pin" />
              <input className='w-9/12 outline-none bg-transparent' type="number" ref={inputRef}  onChange = {handleChange} placeholder="5 digit ZIPCODE"/>
            </div>
            <button className={`mt-2 bg-[#0377F9] text-white ${!showBtn && "invisible" }`}>Next</button>
          </div>
        </div>
      </section>
      <section className='bg-[#FFF4EF]'>
        <div className='max-w-[800px] mx-auto flex flex-col items-center justify-around py-9 md:flex-row gap-12 px-4'>
          <h2 className='font-Itim text-2xl md:text-3xl lg:text-4xl text-center text-black'>we take pride in<br/>serving you</h2>
          <div className='relative w-8/12 md:w-6/12 max-w-sm'>
            <img className="w-full" src={bg_pic_auto} alt="picture of a car being serviced" />
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[rgba(255, 244, 228, 1)]'></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage