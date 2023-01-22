import React, {useState} from 'react'
import { useParams } from 'react-router'
import BodyBg from '../components/BodyBg'
import Select from "react-select"

const CustomSelect = ({options, defaultValue, onChange}) => {
    return (
        <Select
        options={options}
        defaultValue={defaultValue}
        onChange={(selectedOption)=> console.log(selectedOption)} 
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
    />
    )
}


const CarPage = () => {
    const [cars, setCars] = useState({selected: null, cars: [
        {value: "car1", label: 'car 1'},
        {value: "car2", label: 'car 2'},
        {value: "car3", label: 'car 3'},
    ]})
    const { zipcode } = useParams()
    console.log(zipcode)
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

  return (
    <BodyBg>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl text-black font-Itim'>Select Car</h1>
            <ul className='flex flex-col w-full items-center md:flex-row max-w-lg gap-4'>
                <li className='w-10/12 mx-auto'>
                    <p className='ml-8 text-black font-medium text-lg mb-2'>make</p>
                    <div>
                        <div>
                            <CustomSelect options={cars.cars} defaultValue={cars.cars[0]} onChange={(selectedOption)=> console.log(selectedOption)} />
                        </div>
                    </div>
                </li>
                <li className='w-10/12 mx-auto'>
                    <p className='ml-8 text-black font-medium text-lg mb-2'>model</p>
                    <div>
                        <div>
                            <CustomSelect options={cars.cars} defaultValue={cars.cars[0]} onChange={(selectedOption)=> console.log(selectedOption)} />
                        </div>
                    </div>
                </li>
                <li className='w-10/12 mx-auto'>
                    <p className='ml-8 text-black font-medium text-lg mb-2'>year</p>
                    <div>
                        <div>
                            <CustomSelect options={cars.cars} defaultValue={cars.cars[0]} onChange={(selectedOption)=> console.log(selectedOption)} />
                        </div>
                    </div>
                </li>
            </ul>
            <div className='relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full'>
                {/* <div className='absolute left-[-5px] top-[60px] md:top-[6em] z-10 w-[90%] md:w-[27em] lg:w-[30%]'> */}
                <div className='absolute left-[-5px] bottom-[10px] md:bottom-[2em] lg:bottom-[-1.5em] z-10 w-[90%] md:w-[27em] lg:w-[32%]'>
                    <img className='w-[100%]' src="https://i.ibb.co/N1D1r1h/bmw.png" alt="car img" />
                </div>
                <div className='min-h-[100px] md:min-h-[150px] bg-gradient-to-b from-[#d9e1e9] to-[#a5a2a2] w-full absolute bottom-0'></div>
            </div>
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