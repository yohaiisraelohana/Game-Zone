import React from 'react'
import { useNavigate } from 'react-router-dom';

import useSudoku from '../../../hooks/useSudoku';

import SudokuGameNav from './sudokuGameNav';
import SudokuCollection from './sudokuCollection';
import NavBackButton from '../../reusfullComponents/navigateBackButton/navBackButton'

import './sudokuGame.css'

export default function SudokuGame() {
    const {setSudokuTemplate} = useSudoku();
    const navigate = useNavigate();

  return ( 
    <div className='SudokuGame'>
      <NavBackButton />
        <h2>sudokuGame</h2>
        <SudokuGameNav />
        <SudokuCollection
          handleClick={(sudoku)=>{
            setSudokuTemplate(sudoku.template);
            navigate(`/sudokuGame/${sudoku.level}`);
        }} />
    </div>
  )
}
