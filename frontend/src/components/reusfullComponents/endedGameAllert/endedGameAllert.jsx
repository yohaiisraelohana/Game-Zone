import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./endedGameAllert.css";

export default function EndedGameAllert({message,xp,restart,exit}) {
    const navigate = useNavigate();
  return (
    <div className='EndedGameAllert'>
        <h1>{message || "game ended"}</h1>
        <h2>You won {xp} xp</h2>
        <button
            className='EndedGameAllert-exit'
            onClick={()=> exit ? exit() : navigate(-1) }
            >exit</button>
        <button
            className='EndedGameAllert-restart'
            onClick={()=> restart ? restart() : navigate(-1)}
            >Start Game</button>
    </div>
  )
}
