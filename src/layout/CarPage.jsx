import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import BodyBg from '../components/BodyBg'
import Select from "react-select"
import GeneralBtn from '../components/GeneralBtn'
import axios from 'axios'

const CustomSelect = ({options, defaultValue, handleChange, disabledState = false}) => {
    return (
        <Select
        options={options}
        defaultValue={defaultValue}
        onChange={handleChange} 
        isDisabled={disabledState}
        styles={{
            container: (baseStyles, state) => ({
                ...baseStyles,
                width: '100%',
                maxWidth: '400px'
            }),
            control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? '#FFC43A' : '#141313',
            borderRadius: '2rem',
            borderWidth: '3px',
            padding: '3px',
            backgroundColor: '#D9D9D9',
            }),
            input: (baseStyles, state) => ({
            ...baseStyles,
            outline: 'none',
                ':focus': {
                    outline: 'none'
                },
            color: '#141413'
            }),

            option: (baseStyles, state) => ({
            ...baseStyles,
            padding: '3px',
            color: '#141413'
            }),

            optionHover: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused? '#f8f9fa' : '#141313'
            }),

            optionSelected: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused? '#FFC43A' : '#141313'
            }),

            optionSelectedHover: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: state.isFocused? '#FFC43A' : '#141313'
            }),
        }}
    />
    )
}

const BASE_URL = 'http://drcarquotes01-001-site1.btempurl.com'

const CarPage = () => {
    const [data, setData] = useState(undefined)
    const [make, setMake] = useState({selected: {}, cars: []})
    const [model, setModel] = useState({selected: {}, cars: []})
    const [year, setYear] = useState({selected: {}, cars: []})
    const [displayImg, setDisplayImg] = useState(null)

    const { zipcode } = useParams()
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const getCarsOutofData = (carsArr) => {
        const makes = []
        const maker = []
        console.log(carsArr)
        if (carsArr !== undefined) {
            for (const car of carsArr) {
                if (makes.indexOf(car.make) == -1) {
                    makes.push(car.make)
                }
            }
            for (const make of makes) {
                maker.push({value: make, label: make})
            }
        }

        console.log(makes)
        console.log(maker)
        return maker
    }

    const getCars = async () => {
        const cars = await axios.get(`${BASE_URL}/api/cars/get-all-cars`)
        setData(cars.data)
        setMake(() => {
            const res = getCarsOutofData(cars.data)
            // console.log("res", res)
            return {
                selected: res[0],
                cars: res
            }

        })
    }

    const getModelOptions = (carsArr) => {
        const selectedMake = make.selected.value
        const models = []
        console.log(carsArr)
        if (carsArr !== undefined) {

            for (const car of carsArr) {
                if (selectedMake === car.make) {
                    models.push({value: car.model, label: car.model})
                }
            }
        }
        console.log("models", models)
        setModel({selected: models[0], cars: models})
    }

    const getYearOptions = (carsArr) => {
        const selectedModel = model.selected?.value
        const years = []
        console.log(carsArr)
        if (carsArr !== undefined) {

            for (const car of carsArr) {
                if (selectedModel === car.model) {
                    years.push({value: car.year, label: car.year})
                }
            }
        }
        console.log("year", years)
        setYear({selected: years[0], cars: years})
    }
    useEffect(() => {
        getCars()
    }, [])
    useEffect(() => {
        setDisplayImg(data?.find(car => car.make === make.selected?.value && car.model === model.selected?.value && car.year === year.selected?.value)?.imageUrl)
    }, [year.selected])

    console.log("display", displayImg)
    console.log("data", data)
    useEffect(() => {
        getModelOptions(data)
    }, [make.selected, data])
    useEffect(() => {
        getYearOptions(data)
    }, [model.selected, data])
    



  return (
    <BodyBg>
        <div className='relative min-h-[70vh]'>
            <div className='flex flex-wrap items-center content-start gap-5 pb-12  z-10 max-w-[1400px] mx-auto mt-[2%]'>
                <div className='basis-4/4 lg:basis-[35%] z-10'>
                    <h1 className='text-xl text-black font-Itim'>We kindly ask you to take a moment to provide us with the make, model and year of your car.</h1>
                    <ul className='flex flex-col w-full items-center  max-w-lg gap-4'>
                        <li className='w-10/12 mx-auto'>
                            <p className='ml-8 text-black font-medium text-lg mb-2'>make</p>
                            <div>
                                <div>
                                    {
                                        make.cars.length > 0 &&
                                    <CustomSelect options={make.cars} defaultValue={make.selected} 
                                        handleChange={(selectedOption)=> setMake((prevState) => ({...prevState, selected: selectedOption}))} />
                                    }
                                </div>
                            </div>
                        </li>
                        <li className='w-10/12 mx-auto'>
                            <p className='ml-8 text-black font-medium text-lg mb-2'>model</p>
                            <div>
                                <div>
                                    {
                                        model.cars.length > 0 &&
                                    <CustomSelect options={model.cars} defaultValue={model.selected} handleChange={(selectedOption)=> console.log(selectedOption)} />
                                    }
                                </div>
                            </div>
                        </li>
                        <li className='w-10/12 mx-auto'>
                            <p className='ml-8 text-black font-medium text-lg mb-2'>year</p>
                            <div>
                                <div>
                                    {
                                        year.cars.length > 0 &&
                                    <CustomSelect options={year.cars} defaultValue={year.selected} handleChange={(selectedOption)=> console.log(selectedOption)} />
                                    }
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='lg:order-last basis-[100%] z-10 flex justify-center'>
                    <GeneralBtn showBtn={true} handleClick={()=> {}} />
                </div>
                <div className=' w-full z-10 lg:basis-[63%]'>
                    {/* <div className='absolute left-[-5px] top-[60px] md:top-[6em] z-10 w-[90%] md:w-[27em] lg:w-[30%]'> */}
                    <div className='w-[90%] max-w-[900px] mx-auto'>
                        {
                            displayImg &&
                            <img className='w-[100%] max-h-[500px]' src={displayImg} alt="car img" />
                        }
                    </div>
                </div>
            </div>
            <div className='min-h-[200px] md:min-h-[350px] bg-gradient-to-b from-[#d9e1e9] to-[#a5a2a2] w-full absolute bottom-0'></div>
        </div>
    </BodyBg>
  )
}

export default CarPage
{/* <Select
    options={options}
    defaultValue={options[1]}
    onChange={(selectedOption)=> console.log(selectedOption)} 
    styles={{
        container: (baseStyles, state) => ({
            ...baseStyles,
            width: '80%',
            maxWidth: '400px'
        }),
        control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: state.isFocused ? '#FFC43A' : '#141313',
        borderRadius: '2rem',
        borderWidth: '3px',
        padding: '3px'
        }),
        input: (baseStyles, state) => ({
        ...baseStyles,
        outline: 'none',
            ':focus': {
                outline: 'none'
            }
        }),

        option: (baseStyles, state) => ({
        ...baseStyles,
        padding: '3px',
        color: '#141413'
        }),

        optionHover: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused? '#f8f9fa' : '#141313'
        }),

        optionSelected: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused? '#FFC43A' : '#141313'
        }),

        optionSelectedHover: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused? '#FFC43A' : '#141313'
        }),
    }}
/> */}