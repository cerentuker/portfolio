import React from 'react'
import logo from '../logo.svg'; // Tell webpack this JS file uses this image

function MyLogo(){
  return(
    <img className='App-logo' src={logo} alt="Logo" />
  )
}

export default MyLogo;
