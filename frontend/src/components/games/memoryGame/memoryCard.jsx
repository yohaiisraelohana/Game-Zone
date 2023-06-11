import React from 'react'
import './memoryCard.css';

export default function MemoryCard({card,choiseCard,flipped,disabled}) {
  return (
    <div className={`${(flipped || card.mached) && "flipped"} memory-card`}>
      
      <div 
      onClick={()=> !disabled && choiseCard(card)}
      style={{backgroundImage:`url("https://res.cloudinary.com/dhojbnefp/image/upload/v1686320267/GameProject/memoryGame/9B55637C-4815-4169-947B-C0B1478146E9_mylsol.jpg")`}}
      className="back">
      </div>

      <div 
      className='front'
      style={{backgroundImage:`url(${card.src})`}}  >
      </div> 
  </div>
  )
}
