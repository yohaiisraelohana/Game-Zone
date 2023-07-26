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
    const openModal = (content) => {
      const m = useModal(content,()=>setModal(null));
      setModal(m);
    }
    const closeModal = () => {
      setModal(null);
    }
  return (
    <div>
      <div className="MemoryGameMenagment">
        {modal && modal}
        <div className="head">
          <h1>Memory Game</h1>
          <button
            onClick={()=>openModal(<AddMemoryGame closeModal={closeModal}/>)}
            className='add-button'
            >ADD</button>
        </div>
        <MemoryGameMenagmentCollection closeModal={closeModal} openModal={openModal}  />
      </div>
    </div>
  )
}
