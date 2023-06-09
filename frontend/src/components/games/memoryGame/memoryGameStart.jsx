import React, { useState } from 'react'
import MemoryLevelNav from './memoryLevelNav'
export default function MemoryGameStart() {
    const [level,setLevel] = useState(null);

  return (
    <div>
        {level ? 
        <p>game started</p>
        :<MemoryLevelNav/> }
    </div>
  )
}
