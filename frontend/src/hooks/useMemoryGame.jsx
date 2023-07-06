import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoryGame, deleteMemoryGame, getMemoryGames, setCurrentGame, updateMemoryGame } from '../redux/features/memoryGameSlice';

export default function UseMemoryGame() {
    const {data,loading,error,currentGame,memoryLevels} = useSelector(store=>store.memoryGameReducer);
    const dispatch  = useDispatch();
    const getMemory = () => {
        dispatch(getMemoryGames());
    }
    const setMemoryGame = (memory) =>{
      dispatch(setCurrentGame(memory));
    }
    const addMemory = (body) => {
      dispatch(addMemoryGame(body));
    }
    const updateMemory = (body) => {
      dispatch(updateMemoryGame(body))//body have to contain the _id
    }
    const deleteMemory = (id) => {
      dispatch(deleteMemoryGame(id));
    }
  return {
    loading,data,error,currentGame,memoryLevels,
    getMemory,setMemoryGame,addMemory,updateMemory,deleteMemory
  };
}
