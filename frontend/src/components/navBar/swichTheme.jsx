import React from 'react'
import './switchTheme.css';

export default function SwichTheme({changeTheme}) {
  return (
    <div className="swichTheme">
        <div className="swich">
        <label>
            <input 
                onChange={()=>changeTheme() }
                type = 'checkbox'/>
            <span className = 'slider'></span>
        </label>
        </div>
  </div>
  )
}
