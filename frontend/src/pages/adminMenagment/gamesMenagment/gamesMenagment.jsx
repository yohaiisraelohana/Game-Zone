import React, { useState } from 'react'
import './gamesMenagment.css';
import SudokuMenagment from './sudokuMenagment/sudokuMenagment';
import NavBackButton from '../../../components/reusfullComponents/navigateBackButton/navBackButton'
import CloudinaryGamesImgs from './cloudinaryGamesImgaMenagment/cloudinaryGamesImgs';
import MemoryGameMenagment from './MemoryGameMenagment/memoryGameMenagment';
export default function GamesMenagment() {
  const [selectedGame,setSelectedGame] = useState(null);
  const menagmentGamesOptions = ["Sudoku","Games Images","MemoryGame"];
  const [gameSearch , setGameSearch] = useState("");
  return (
    <div className='GamesMenagment'>
      
      {selectedGame ? 
      <div className="">
        <NavBackButton className="navBack" onClick={()=>setSelectedGame(null)} />
        {selectedGame == "Sudoku" && <SudokuMenagment/>}
        {selectedGame == "Games Images" && <CloudinaryGamesImgs/>}
        {selectedGame == "MemoryGame" && <MemoryGameMenagment/>}
      </div>
      : 
      <div className="GamesMenagment-options">
        <input 
          onChange={(e) => setGameSearch(e.target.value)}
          type="text" 
          className='search-game'
           />
        {(gameSearch.length > 0 
          ? menagmentGamesOptions.filter(option => option.toLowerCase().includes(gameSearch.toLowerCase()))
          : menagmentGamesOptions).map((m,i)=>(
            <button 
              className='option-button'
              key={i}
              onClick={()=>setSelectedGame(m) } 
              >{m}</button>
        ))}
      </div>
      }
      
    </div>
  )
}
