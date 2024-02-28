import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {ReactComponent as Arrow} from '../../assets/arrow.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
    <div className='main'>
      <Logo />
    <Arrow />
    </div>
    </div>
  )
}

export default Navbar
