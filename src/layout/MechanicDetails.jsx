import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'
import axios from 'axios'
import { BASE_URL } from './CarPage'

const MechanicDetails = () => {
    const [car, setCar] = useState(undefined)
    const [mechanic, setMechanic] = useState(undefined)
    const {zipcode, carId, repairId, quoteId} = useParams()
    console.log(zipcode, carId, repairId, quoteId)

    const getCar = async () => {
        const car = await axios.get(`${BASE_URL}/api/cars/${carId}`)
        setCar(car.data)
    }

    const getMechanic = async () => {
        const data = await axios.get(`${BASE_URL}/api/quotes/${quoteId}`)
        console.log(data.data)
        setMechanic(data.data)
    }

    useEffect(()=> {
        getCar()
        getMechanic()
    },[])

  return (
    <BodyBg>
        <div className='flex flex-wrap items-center content-start gap-5 pb-12 z-10 max-w-[1400px] mx-auto mt-[2%]'>
            <div className='basis-[100%] mb-24'>
                <button className='bg-[#FFC43A] text-black mx-auto block'>
                    <a href={`tel:09066918498`} className="block">Connect Now</a>
                </button>
            </div>
            <div className='flex flex-col justify-between gap-2 z-10 lg:flex-row basis-[100%]'>
                <div className='min-h-[300px] lg:basis-[45%] lg:order-1'>
                    <div className='bg-[#D9D9D9] rounded-lg shadow-2xl p-4 text-center font-Inter font-extrabold mx-4'>
                        {
                            mechanic && 
                            <>
                                <h2 className='text-xl mb-2'>{mechanic.mechanic.name}</h2>
                                <p className='text-lg'>{mechanic.mechanic.address}</p>
                                <p className='text-sm mt-2'>{mechanic.mechanic.phone}</p>
                                <p className='mt-5'>${mechanic.price}</p>
                            </>
                        }
                    </div>
                </div>
              <div className='w-[90%] lg:max-w-3xl mx-auto'>
                {
                  car &&
                  <>
                    <p className='text-center mb-3 text-black font-bold font-Inter'>{`${car.make} ${car.model} ${car.year}`}</p>
                    <img src={car.imageUrl} alt="car image"  />
                  </>
                }
              </div>
            </div>
          <div className='min-h-[200px] md:min-h-[200px] lg:min-h-[300px] bg-gradient-to-b from-[#d9e1e9] to-[#a5a2a2] w-full absolute bottom-0 left-0'></div>
        </div>    
    </BodyBg>
  )
}

export default MechanicDetails