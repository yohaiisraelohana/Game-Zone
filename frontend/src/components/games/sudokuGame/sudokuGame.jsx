import React, { useEffect, useState } from 'react'
import './sudokuGame.css'
import useSudoku from '../../../hooks/useSudoku';
import SudokuGameNav from './sudokuGameNav';
import SudokuCollection from './sudokuCollection';

export default function SudokuGame() {
    const {getSudokuTemolates} = useSudoku();

    useEffect(()=>{
        getSudokuTemolates();
    },[])

  return ( 
    <div className='sudoku-game'>
        <h2>sudokuGame</h2>
        <SudokuGameNav />
        <SudokuCollection/>
    </div>
  )
}
