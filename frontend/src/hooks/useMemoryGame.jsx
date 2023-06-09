import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemoryGames } from '../redux/features/memoryGameSlice';

export default function useMemoryGame() {
    const {data,loading,error} = useSelector(store=>store.memoryGameReducer);
    const dispatch  = useDispatch();
    const getMemory = () => {
        dispatch(getMemoryGames());
    }
    console.log(data,loading,error);

  return {loading,data,error,getMemory};
}
