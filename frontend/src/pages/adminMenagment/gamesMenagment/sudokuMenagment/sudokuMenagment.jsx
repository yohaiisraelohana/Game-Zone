import React from 'react'

import useSudoku from '../../../../hooks/useSudoku'

import SudokuGameNav from '../../../../components/games/sudokuGame/sudokuGameNav'
import SudokuCollection from '../../../../components/games/sudokuGame/sudokuCollection'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';


export default function SudokuMenagment() {
  const {setSudokuTemplate} = useSudoku();
  
  const navigate = useNavigate();  
  return (
    <div>
        
        <h2>Manage sudoku Game</h2>
        <button
          onClick={()=>console.log("opening modal")}
          >ADD</button>
        <SudokuGameNav/>
        <SudokuCollection handleClick={(sudoku)=>{
          setSudokuTemplate(sudoku);
          navigate("/sudokuGame/menagment");
        }} />

    </div>
  )
}
