import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function SudokuGameNav({options}) {
    const navigate = useNavigate();
  return (
    <div>
        {options && options.map((option,i)=>(
            <button 
                onClick={()=>navigate(`/sudokuGame/${option.level}`)}
                key={i}>{option.level}</button>
        ))}
    </div>
  )
}
