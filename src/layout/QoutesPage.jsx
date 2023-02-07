import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'
import { BASE_URL } from './CarPage'
import MediaQuery from 'react-responsive'
import location from "../assets/map.png"


const QoutesPage = () => {
    const { zipcode, carId, repairId } = useParams()
    const [car, setCar] = useState(undefined)
    const [problem, setProblem] = useState(undefined)
    const [quotes, setQuotes] = useState(undefined)
    const navigate = useNavigate()

    const getCar = async () => {
        const car = await axios.get(`${BASE_URL}/api/cars/${carId}`)
        setCar(car.data)
    }

    const getProblem = async () => {
        const problem = await axios.get(`${BASE_URL}/api/repairservices/${repairId}`)
        setProblem(problem.data)
    }

    const getQuotes = async () => {
        const quotes = await axios.get(`${BASE_URL}/api/quotes/get-best-quotes?zipCode=${zipcode}&repairServiceId=${repairId}&carId=${carId}`)
        setQuotes(quotes.data)
    }

    useEffect(() => {
        getCar()
        getProblem()
        getQuotes()
    }, [])


    const handleSelect = (id) => {
        navigate(`/${zipcode}/car/${carId}/repair/${repairId}/quote/${id}`)
    }

    const generateHighest = (num) => {
        let getPart = (Math.random() * 200).toFixed(2)
        getPart = num + Number(getPart)
        return Math.round((getPart + Number.EPSILON) * 100) / 100
    }

    return (
    <BodyBg currPage={4}>
        <div className=''>
            <div className='w-[90%] max-w-md mx-auto'>
                {
                    car && problem && (
                        <>
                            <h2 className='text-center text-xl font-bold font-Inter mb-3 text-black'>{`${problem.name} service for ${car.make} ${car.model} ${car.year}`}</h2>
                            <div className=' bg-[#FFC43A] px-2 py-4 shadow-lg rounded-xl font-Inter font-extrabold text-black'>
                                <h3 className='text-center'>Estimated Price Range</h3>
                                {
                                    quotes && quotes.length > 0 &&
                                    <p className='text-center'>{`$${quotes[0].price} - ${generateHighest(quotes[2].price)}`}</p>
                                }
                            </div>
                        </>
                    )
                }
                <h2 className='text-center text-3xl font-Itim mt-6  text-black'>Book the Best Quote in Town</h2>
            </div>
            <div className='w-[90%] max-w-[1400px] mx-auto min-h-[40vh] lg:min-h-[50vh] mt-24  lg:flex z-20 lg:justify-between'>
                <MediaQuery minWidth={1024}>
                    <div className='w-[45%] flex z-10 pt-20 justify-start'>
                        {
                            car && <img src={car.imageUrl} alt="car" className='w-full' />
                        }
                    </div>
                </MediaQuery>
                {
                    quotes && (
                        quotes.length > 0 ? (
                            <ul className='flex flex-col gap-4 lg:relative lg:flex-row z-10 lg:items-start'>
                                {
                                    quotes.map((quote, index) => (                        
                                    <li  key={index} onClick={() => handleSelect(quote.id)}>
                                        <button className='w-full text-Inter text-xl font-extrabold border-4 rounded-2xl border-neutral-600 bg-[#D9D9D9] p-4 text-center text-black hover:border-[#FFC43A]'>
                                            <h3>{quote.mechanic.name}</h3>
                                            <h3>${quote.price}</h3>
                                        </button>
                                    </li>
                                    ))
                                }
                                <MediaQuery minWidth={1024}>
                                    <li className="absolute bottom-0 w-full h-[250px]">
                                        <img src={location} alt="location" className='w-full h-[250px]' />
                                    </li>
                                </MediaQuery>
                            </ul>
    
                        ) : (
                            <div className='min-h-[500px] flex justify-center items-center z-10 font-Itim'>
                                <div>
                                    <p className='text-2xl text-center text-black'>Sorry, No mechanics offer this service near you.</p>
                                </div>
                            </div>
                        )

                    )
                }
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