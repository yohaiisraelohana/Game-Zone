import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemoryGames, setCurrentGame } from '../redux/features/memoryGameSlice';

export default function useMemoryGame() {
    const {data,loading,error,currentGame} = useSelector(store=>store.memoryGameReducer);
    const dispatch  = useDispatch();
    const getMemory = () => {
        dispatch(getMemoryGames());
    }
    const setMemoryGame = (memory) =>{
      dispatch(setCurrentGame(memory));
    }
    console.log(data,loading,error);

  return {loading,data,error,currentGame,getMemory,setMemoryGame};
}
