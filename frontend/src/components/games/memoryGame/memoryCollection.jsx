import React from 'react'
import { useNavigate } from 'react-router-dom'
import './memoryCollection.css'
export default function MemoryCollection({memorycategories}) {
  const navigate = useNavigate();

  return (
    <div>
      {memorycategories.map((m,i)=>(
        <div className='collection-card'
        key={i}
        onClick={()=>navigate(`/memoryGame/${m.name}`)}
        style={{backgroundImage:`url(${m.img_url})`}}>
          <h2>{m.name}</h2>
        </div>
      ))}
    </div>
  )
}
