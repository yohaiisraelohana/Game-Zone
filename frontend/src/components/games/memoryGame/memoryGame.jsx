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
