import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo_text.svg"
import logo_large from "../assets/logo_mascot_p.svg"
import MediaQuery from 'react-responsive'

const Header = ({useText = false}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }


  if (useText) {
    return (
      <header className={`flex mb-3`}>
        <div  className="w-6/12 max-w-xs hover:cursor-pointer m-2" tabIndex={1} onClick={handleClick}>
          <img src={logo} alt="logo" />
        </div>
      </header>
    )
  }
  return (
    <header className={`flex mb-3`}>
      <div  className="w-6/12 max-w-xs hover:cursor-pointer m-2" tabIndex={1} onClick={handleClick}>
        <MediaQuery maxWidth={767}>
          <img src={logo} alt="logo" />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <img src={logo_large} alt="logo" width={"100px"} />
        </MediaQuery>
      </div>
    </header>
  )
}

export default Header