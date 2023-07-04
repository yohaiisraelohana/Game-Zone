import React from 'react'
import './adminMenagmentNav.css'
export default function AdminMenagmentNav({options,setOption,selected}) {
  return (
    <div className='AdminMenagmentNav'>
      <select value={selected} onChange={(e)=>setOption(e.target.value)} >
          {options.map((option,i)=>(
            <option 
              key={i}
              value={option}
              >{option}</option>
          ))}
      </select>

    </div>
  )
}

/**
         {options && options.map((option,i) => (
            <button
                className={selected == option ? "selected" : "" }
                key={i}
                onClick={() => setOption(option)}
                >{option}</button>
        ))}
 */