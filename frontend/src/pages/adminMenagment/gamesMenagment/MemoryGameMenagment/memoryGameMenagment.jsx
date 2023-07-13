import React, { useEffect, useState } from 'react'
import './memoryGameMenagment.css'
import UseMemoryGame from '../../../../hooks/useMemoryGame'
import MemoryGameMenagmentCollection from './memoryGameMenagmentCollection';
import {useModal} from '../../../../hooks/useModal'
import AddMemoryGame from './addMemoryGame';

export default function MemoryGameMenagment() {
    const {getMemory} = UseMemoryGame();
    const [modal,setModal] = useState(null);

    useEffect(()=>{
      getMemory();
    },[])
  return (
    <div>
      <div className="MemoryGameMenagment">
        {modal && modal}
        <div className="head">
          <h1>Memory Game</h1>
          <button
            onClick={()=>{
              const m = useModal(<AddMemoryGame closeModal={()=>setModal(null)} />,()=>setModal(null));
              setModal(m);
            }}
            className='add-button'
            >ADD</button>
        </div>
        <MemoryGameMenagmentCollection />
      </div>
    </div>
  )
}
