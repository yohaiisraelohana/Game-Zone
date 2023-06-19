import React from 'react'
import './sudokuGameNav.css'; 
import useSudoku from '../../../hooks/useSudoku';
export default function SudokuGameNav() {
    const {sudokuLevels,getSudokuTemolates} = useSudoku();
    const hundleClick = (level) => {
      getSudokuTemolates(`?level=${level}`)
    }
  return (
    <div className='sudoku-nav'>
        <button 
            className={`all`}
            onClick={()=>getSudokuTemolates()}
            >All</button>
        {sudokuLevels ? sudokuLevels.map((option,i)=>(
            <button 
                className={`${option.level}`}
                onClick={()=>hundleClick(option.level)}
                key={i}>{option.level}</button>
        ))
        : <p>loading</p>
        }
    </div>
  )
}
