import React from 'react'
import { useNavigate } from 'react-router-dom'
import useMemoryGame from '../../../hooks/useMemoryGame'
import './memoryCollection.css'
export default function MemoryCollection({memorycategories}) {
  const {setMemoryGame} = useMemoryGame();
  const navigate = useNavigate();
  const selectCollection = (m) => {
    setMemoryGame(m);
    navigate(`/memoryGame/${m.name}`);
  }
  return (
    <div>
      {memorycategories.map((m,i)=>(
        <div className='collection-card'
        key={i}
        onClick={()=>selectCollection(m)}
        style={{backgroundImage:`url(${m.img_url})`}}>
          <h2>{m.name}</h2>
        </div>
      ))}
    </div>
  )
}
