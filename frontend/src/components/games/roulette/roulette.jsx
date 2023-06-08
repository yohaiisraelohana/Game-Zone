import React from 'react'
import './roulette.css'
const Roulette = () => {

  return (

    <div className="roulette-container">
      <div className="while-container">
        <div className='result '>Number</div>
        <div className="ball-container" >
          <div className="ball"> 
            <div className="inner-ball"></div>
          </div>
        </div>
        <img height="700px" src="https://raw.githubusercontent.com/drcodecamp/html-css-exercises/master/html-css-exercise_2/wheel.png" alt="wheel" />
      </div>
    </div>
    

  )
}

export default Roulette