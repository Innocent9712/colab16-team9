import React from 'react'
import logo from "../assets/logo_text.svg"
// import link from 


const Header = () => {
  return (
    <header className={`flex`}>
      <div  className="w-6/12 max-w-xs">
        <img src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header