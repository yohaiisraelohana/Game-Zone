import React, { useState } from 'react'
import './gamesMenagment.css';
import SudokuMenagment from './sudokuMenagment/sudokuMenagment';
import NavBackButton from '../../../components/reusfullComponents/navigateBackButton/navBackButton'
import CloudinaryGamesImgs from './cloudinaryGamesImgaMenagment/cloudinaryGamesImgs';
import MemoryGameMenagment from './MemoryGameMenagment/memoryGameMenagment';
export default function GamesMenagment() {
  const [selectedGame,setSelectedGame] = useState(null);
  const menagmentGamesOptions = ["Sudoku","Games Images","MemoryGame"]
  return (
    <div className='GamesMenagment'>
      
      {selectedGame ? 
      <div className="">
        <NavBackButton onClick={()=>setSelectedGame(null)} />
        {selectedGame == "Sudoku" && <SudokuMenagment/>}
        {selectedGame == "Games Images" && <CloudinaryGamesImgs/>}
        {selectedGame == "MemoryGame" && <MemoryGameMenagment/>}
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
