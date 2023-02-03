import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'
import { BASE_URL } from './CarPage'  
import axios from 'axios'
import oil_change from "../assets/oil.png"
import tires from "../assets/tires.png"
import filter from "../assets/air_filter.png"
import wiper_blade from "../assets/wiper_blades.png"
import brakes from "../assets/brakes.png"
import spark_plug from "../assets/spark_plug.png"
import {motion} from 'framer-motion'


const ProblemPage = () => {
    const { zipcode, carId } = useParams()
    const [car, setCar] = useState(undefined)
    const [problems, setProblems] = useState([
      {
        text: "Oil change",
        img: oil_change
      },
      {
        text: "Tire Change",
        img: tires
      },
      {
        text: "Brake Pad",
        img: brakes
      },
      {
        text: "Spark Plug",
        img: spark_plug
      },
      {
        text: "Air Filter",
        img: filter
      },
      {
        text: "Windshield Wiper",
        img: wiper_blade
      }
    ])
    console.log(zipcode, carId)
    const navigate = useNavigate()
    const getCar = async () => {
      const cars = await axios.get(`${BASE_URL}/api/cars/${carId}`)
      setCar(cars.data)
    }

    function levenshteinDistance(str1, str2) {
      const m = str1.length;
      const n = str2.length;
      let dp = new Array(m + 1);
      for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
      }
      for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
      }
      for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
      }
      for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
          if (str1[i - 1] === str2[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1];
          } else {
            dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
          }
        }
      }
      return dp[m][n];
    }
    

    const getProblems = async () => {
      // const problems = await axios.get(`${BASE_URL}/api/quotes/get-best-quotes?zipCode=1&repairServiceId=1&carId=1`)
      const problems = await axios.get(`${BASE_URL}/api/repairservices/get-all-repairservices`)
      console.log(problems)
      setProblems(preState => {
        let tempArr = []
        for (let i = 0; i < preState.length; i++) {
          let val = 200
          let curr_index = 0
          for (let j = 0; j < problems.data.length; j++) {
            const w = levenshteinDistance(preState[i].text, problems.data[j].name)
            // console.log(w)
            if (w < val) {
              val = w
              curr_index = j
            }
            
          }
          tempArr.push({text: preState[i].text, img: preState[i].img, id: problems.data[curr_index].id})
          
        }
        // console.log(tempArr)
        return tempArr
      })
    }

    const handleSelect = (id) => {
      setTimeout(() => {
        navigate(`/${zipcode}/car/${carId}/repair/${id}`)
      }, 1000);
    }

    useEffect(() => {
      getCar()
      getProblems()
    }, [])
    console.log(car)
  return (
    <BodyBg>
        <h1 className='text-xl text-black font-Itim mb-8  w-10/12 text-center mx-auto lg:text-3xl'>Select repair</h1>
        <div className='flex flex-wrap items-center content-start gap-5 pb-12 z-10 max-w-[1400px] mx-auto mt-[2%]'>
            <div className='flex flex-col justify-between gap-2 z-10 lg:flex-row'>
              <div className='mb-7 lg:mb-0'>
                <ul className='flex flex-wrap gap-3 lg:gap-4 mx-3 lg:mx-0'>
                    {
                      problems.map((problem) => (
                        <motion.li whileHover={{scale: 1.2}}  key={problem.id} className="flex basis-full lg:basis-[31%] items-center border-2 border-neutral-600 rounded-full px-3 py-1 hover:cursor-pointer bg-[#D9D9D9] hover:bg-[#FFC43A] min-h-[70px]" onClick={() => handleSelect(problem.id)}>
                          <p className='basis-[70%] text-center text-black font-Inter'>{problem.text}</p>
                          <div className='basis-[30%]'>
                            <img className='w-[50px] lg:w-[60px]' src={problem.img} alt={problem.text} />
                          </div>
                        </motion.li>
                      ))
                    }
                </ul>
              </div>
              <div className='w-[90%] lg:max-w-3xl mx-auto'>
                {
                  car &&
                  <>
                    <p className='text-center mb-3 text-black font-bold font-Inter'>{`${car.make} ${car.model} ${car.year}`}</p>
                    <img src={car.imageUrl} alt="car image" style={{transform: 'scaleX(-1)'}} />
                  </>
                }
              </div>
            </div>
          <div className='min-h-[200px] md:min-h-[300px] lg:min-h-[450px] bg-gradient-to-b from-[#d9e1e9] to-[#a5a2a2] w-full absolute bottom-0 left-0'></div>
        </div>    
    </BodyBg>
  )
}

export default ProblemPage