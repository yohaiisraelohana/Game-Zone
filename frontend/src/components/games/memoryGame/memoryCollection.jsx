import React from 'react'
import MemoryCards from './memoryCards';

export default function MemoryCollection({memorycategories}) {
  console.log(memorycategories);
  return (
    <div>
      <h1>memoryCollection</h1>

      {memorycategories.map((m)=>(
        <div style={
          {height:"200px",
          width:"400px",
          backgroundImage:`url(${m.img_url})`,
          backgroundPosition:'center',
          border:"white 1px solid"}}>
          <h2>{m.name}</h2>
        </div>
        
      ))}
      <MemoryCards/>
    </div>
  )
}
