import React, { useState } from 'react'
import './gamesMenagment.css';
import SudokuMenagment from './sudokuMenagment/sudokuMenagment';
import NavBackButton from '../../../components/reusfullComponents/navigateBackButton/navBackButton'
export default function GamesMenagment() {
  const [selectedGame,setSelectedGame] = useState(null);
  const menagmentGamesOptions = [
    "Sudoku"
  ]
  return (
    <div className='GamesMenagment'>
      
      {selectedGame ? 
      <div className="">
        <NavBackButton onClick={()=>setSelectedGame(null)} />
        {selectedGame == "Sudoku" && <SudokuMenagment/>}
      </div>
      : 
      <div className="">
        {menagmentGamesOptions.map((m,i)=>(
          <button 
            key={i}
            onClick={()=>setSelectedGame(m) } 
            >{m}</button>
        ))}
      </div>
      }
      
    </div>
  )
}
