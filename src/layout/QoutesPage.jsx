import React from 'react'
import { useParams } from 'react-router-dom'
import BodyBg from '../components/BodyBg'

const QoutesPage = () => {
    const { zipcode, carId, repairId } = useParams()
    console.log(zipcode, carId, repairId)
  return (
    <BodyBg>QoutesPage</BodyBg>
  )
}

export default QoutesPage