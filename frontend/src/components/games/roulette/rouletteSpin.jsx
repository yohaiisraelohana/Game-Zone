import React from 'react'
import {BsCoin} from 'react-icons/bs';
import './rouletteSpin.css'
export default function RouletteSpin({price,hundleSelectPrice,chice,disable,checkPrice,spinBall}) {
  return (
    <div className="spin-container">
      <div className="select-price-container">
      <BsCoin style={{display:'block',position:'relative'}}/>
      <select 
        className='select-price'
        name="price" 
        value={price} 
        onChange={hundleSelectPrice} >
        {[20,50,100,200,500].map((p,i)=>(
          <option value={p} key={i}>{p}</option>
        ))}
      </select>
      </div>
      <div className="spin-button-container">
      <button
            className='spin-button'
            disabled={!chice||disable||!checkPrice(price)}
            onClick={()=>spinBall()}
            >Spin</button>
      </div>
    </div>
  )
}
