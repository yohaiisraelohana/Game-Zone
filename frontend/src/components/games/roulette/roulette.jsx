
import React from 'react'


import './roulette.css'
const Roulette = ({ballPosition}) => {


  return (
      <div className="Roulette">
        <div className='result '>Number</div>
        <div className="ball-container"
          style={{transform:`rotate(${ballPosition}deg)`,transitionProperty:"all",transitionDuration:'3s'}} >
          <div className="ball"> 
            <div className="inner-ball"></div>
          </div>
        </div>
        <img height="300px" src="https://raw.githubusercontent.com/drcodecamp/html-css-exercises/master/html-css-exercise_2/wheel.png" alt="wheel" />
      </div>
  )
}

export default Roulette
