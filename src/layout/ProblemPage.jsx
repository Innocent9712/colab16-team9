import React from 'react'
import { useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'

const ProblemPage = () => {
    const { zipcode, carId } = useParams()
    console.log(zipcode, carId)
  return (
    <BodyBg>ProblemPage</BodyBg>
  )
}

export default ProblemPage