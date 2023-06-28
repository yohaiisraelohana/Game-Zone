import React from 'react'
import './adminMenagmentNav.css'
export default function AdminMenagmentNav({options,setOption,selected}) {
  return (
    <div className='adminMenagmentNav'>
        {options && options.map((option,i) => (
            <button
                className={selected == option ? "selected" : "" }
                key={i}
                onClick={() => setOption(option)}
                >{option}</button>
        ))}
    </div>
  )
}
