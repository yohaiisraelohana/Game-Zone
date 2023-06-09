import React from 'react'
import useMemoryGame from '../../../hooks/useMemoryGame'

export default function MemoryLevelNav({setLevel}) {
  const {memoryLevels} = useMemoryGame();
  return (
    <div>
      <h1>Select level</h1>
      {memoryLevels ? memoryLevels.map((l,i)=>(
        <button 
          key={i}
          onClick={()=>setLevel(l.level)}
          >{l.name}</button>
      ))
      : <p>loading</p> }
    </div>
  )
}
