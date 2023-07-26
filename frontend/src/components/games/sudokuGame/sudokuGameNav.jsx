import React from 'react'
import './sudokuGameNav.css'; 
import useSudoku from '../../../hooks/useSudoku';
export default function SudokuGameNav({additional}) {
    const {sudokuLevels,selectLevel} = useSudoku();
    const hundleClick = (level) => {
      selectLevel(level)
    }
  return (
    sudokuLevels ? 
    <div className='SudokuGameNav'>
      <button 
          className={`all`}
          onClick={()=>selectLevel()}
          >All</button>
      {sudokuLevels.map((option,i)=>(
          <button 
              className={`${option.level}` }
              onClick={()=>hundleClick(option.level)}
              key={i}>{option.level}</button>
      ))}
      {additional && additional}
    </div>
  : <p>loading</p>

  )
}
