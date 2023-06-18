import React, { useEffect, useState } from 'react'
import './sudokuGame.css'
import useSudoku from '../../../hooks/useSudoku';
import SudokuGameNav from './sudokuGameNav';

export default function SudokuGame() {
    const {data,error,loading,sudokuLevels,getSudokuTemolates,setSudokuTemplate} = useSudoku();
    console.log(data,error,loading);
    useEffect(()=>{
        getSudokuTemolates();
    },[])

  return ( 
    <div className='sudoku-game'>
        <h2>sudokuGame</h2>
        <SudokuGameNav options={sudokuLevels} />
    </div>
  )
}
