import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo_text.svg"


const Header = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <header className={`flex`}>
      <div  className="w-6/12 max-w-xs hover:cursor-pointer" tabIndex={1} onClick={handleClick}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header