import React from 'react'
import './defineSudokuLevel.css'

export default function DefineSudokuLevel({setLevel,level}) {
  return (
    <div className='DefineSudokuLevel'>
        {["easy","medium","hard"].map((l,i)=>(
            <button 
              className={`${l}${l==level ? "-selected" : ""}`}
              key={i}
              onClick={()=>setLevel(l)}
              >{l}
            </button>
        ))}
    </div>
  )
}
