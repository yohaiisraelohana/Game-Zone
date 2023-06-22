import React, {useEffect, useState } from 'react'

//components
import MemoryCollection from './memoryCollection'
import useMemoryGame from '../../../hooks/useMemoryGame';
import NavBackButton from '../../reusfullComponents/navigateBackButton/navBackButton'

//style
import './memoryGame.css';




export default function MemoryGame() {
  const {data:memoryGames,error,loading,getMemory} = useMemoryGame(); 

  useEffect(()=>{
    getMemory();
  },[])

  return (
    <div className='memory-game-container'>
      <NavBackButton to={"/"}/>
      <h1>Memory Game</h1>
      {memoryGames 
        ? <MemoryCollection memorycategories={memoryGames} /> 
        : 
        <div className="">
          {loading && <div className="">loading</div> }
          {error && <div className="">{error.msg}</div> }
        </div>
      }
    </div>
  )
}


