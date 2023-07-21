import React, { useState } from 'react'

import useSudoku from '../../../../hooks/useSudoku'

import SudokuGameNav from '../../../../components/games/sudokuGame/sudokuGameNav'
import SudokuCollection from '../../../../components/games/sudokuGame/sudokuCollection'
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';
import { useModal } from '../../../../hooks/useModal';
import AddSudokuTemplate from './addSudokuTemplate';

import './sudokuMenagment.css'

export default function SudokuMenagment() {
  const {setSudokuTemplate} = useSudoku();
  const [modal,setModal] = useState(null);
  const navigate = useNavigate();  
  return (
    <div className='SudokuMenagment'>
        {modal && modal}
        <h2>Sudoku Game Menagment</h2>
        <SudokuGameNav additional={ <button 
          className={`add-template`}
          onClick={()=>{
            const m = useModal(<AddSudokuTemplate closeModal={()=>setModal(null)}/>,()=>setModal(null));
            setModal(m);
          }}
          >Add</button>}/>
        <SudokuCollection handleClick={(sudoku)=>{
          setSudokuTemplate(sudoku);
          navigate("/sudokuGame/menagment");
        }} />

    </div>
  )
}
