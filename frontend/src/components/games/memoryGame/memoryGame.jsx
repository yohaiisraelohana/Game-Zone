import React, {useEffect, useState } from 'react'

//components
import MemoryCollection from './memoryCollection'
import useMemoryGame from '../../../hooks/useMemoryGame';



export default function MemoryGame() {
  const {data:memoryGames,error,loading,getMemory} = useMemoryGame(); 

  useEffect(()=>{
    getMemory();
  },[])

  return (
    <div>
      <h1>Memory Game</h1>
      {memoryGames 
        ? <MemoryCollection memorycategories={memoryGames} /> 
        : 
        <div className="">
          {loading && <div className="">loading</div> }
          {error && <div className="">error</div> }
        </div>
      }
    </div>
  )
}


/*
import React, { useEffect, useState } from 'react'

//components
import MemoryCollection from './memoryCollection'

import { apiGet } from '../../../services/apiRequests'
import { GET_MEMORY_GAMES } from '../../../constants/urls'


export default function MemoryGame() {
  const [memoryGameCategories,setMemoryGameCategories] = useState(null);

  const getMemoryGames = async () => {
    try {
      const {data} = await apiGet(GET_MEMORY_GAMES);
      setMemoryGameCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getMemoryGames();
  },[]);


  return (
    <div>
      <h1>Memory Game</h1>
      {memoryGameCategories && <MemoryCollection memorycategories={memoryGameCategories} />}
    </div>
  )
}
*/