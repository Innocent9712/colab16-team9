import { useState, createContext } from 'react'
// import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './layout/LandingPage'
import CarPage from './layout/CarPage'
import ProblemPage from './layout/ProblemPage'
import QoutesPage from './layout/QoutesPage'

const paramObject = {
  state: {},
  setState: {}
}
const appContext = createContext(paramObject)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        <appContext.Provider value="Hey">
          {/* <Header /> */}
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/:zipcode/car' element={<CarPage />} />
            <Route path='/:zipcode/car/:carId' element={<ProblemPage />} />
            <Route path='/:zipcode/car/:carId/repair/:repairId' element={<QoutesPage />} />
          </Routes>
        </appContext.Provider>
    </div>
  )
}

export default App
