import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'
import { BASE_URL } from './CarPage'
import MediaQuery from 'react-responsive'
import location from "../assets/map.png"


const QoutesPage = () => {
    const { zipcode, carId, repairId } = useParams()
    const [car, setCar] = useState(undefined)
    const [problem, setProblem] = useState(undefined)
    const [quotes, setQuotes] = useState(undefined)
    console.log(zipcode, carId, repairId)

    const getCar = async () => {
        const car = await axios.get(`${BASE_URL}/api/cars/${carId}`)
        setCar(car.data)
    }

    const getProblem = async () => {
        const problem = await axios.get(`${BASE_URL}/api/repairservices/${repairId}`)
        setProblem(problem.data)
    }

    const getQuotes = async () => {
        // const quotes = await axios.get(`${BASE_URL}/api/quotes/get-best-quotes?zipCode=${zipcode}&repairServiceId=${repairId}&carId=${carId}`)
        const quotes = await axios.get(`${BASE_URL}/api/quotes/get-best-quotes?zipCode=1&repairServiceId=1&carId=1`)
        console.log(quotes)
        setQuotes(quotes.data)
    }

    useEffect(() => {
        getCar()
        getProblem()
        getQuotes()
    }, [])

    console.log("quotes", quotes)
    console.log("problem",problem)
  return (
    <BodyBg>
        <div className=''>
            <div className='w-[90%] max-w-md mx-auto'>
                {
                    car && problem && (
                        <>
                            <h2 className='text-center text-xl font-bold font-Inter mb-3'>{`${problem.name} service for ${car.make} ${car.model} ${car.year}`}</h2>
                            <div className=' bg-[#FFC43A] px-2 py-4 shadow-lg rounded-xl font-Inter font-extrabold'>
                                <h3 className='text-center'>Estimated Price Range</h3>
                                <p className='text-center'>$75 - $150</p>
                            </div>
                            <h2 className='text-center text-3xl font-Itim mt-6 text-black'>Book the Best Quote in Town</h2>
                        </>
                    )
                }
            </div>
            <div className='w-[90%] max-w-2xl mx-auto min-h-[40vh] mt-8'>
                <ul className='flex flex-col gap-4'>
                    <li className='text-Inter text-xl font-extrabold border-4 rounded-2xl border-neutral-600 bg-[#D9D9D9] p-4 text-center'>
                        <h3>Sam Auto Shop</h3>
                        <h3>$70</h3>
                    </li>
                    <li className='text-Inter text-xl font-extrabold border-4 rounded-2xl border-neutral-600 bg-[#D9D9D9] p-4 text-center'>
                        <h3>Sam Auto Shop</h3>
                        <h3>$70</h3>
                    </li>                    
                    <li className='text-Inter text-xl font-extrabold border-4 rounded-2xl border-neutral-600 bg-[#D9D9D9] p-4 text-center'>
                        <h3>Sam Auto Shop</h3>
                        <h3>$70</h3>
                    </li>

                </ul>
            </div>
            <MediaQuery minWidth={1024}>
                <div className='min-h-[200px] md:min-h-[200px] lg:min-h-[250px] bg-gradient-to-b from-[#d9e1e9] to-[#a5a2a2] w-full absolute bottom-0 left-0'></div>
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
            <div className='min-h-[200px] '>
                <img src={location} alt="location" className='w-full' />
            </div>

            </MediaQuery>
        </div>
    </BodyBg>
  )
}

export default QoutesPage