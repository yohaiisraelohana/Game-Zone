import React, { useState } from 'react'
import './ticTacUsers.css'

export default function TicTacUsers() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);
    const [toggle, setToggle] = useState(true);

    const [winConditions] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ]);

      
  return (
    <div className="TicTacUsers">
      <div className={`board ${toggle ? "" : "disabled"}`}>
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => doMove(index)}>
            {cell}
          </div>
        ))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
      <button onClick={() => reset()} className="button">
        reset
      </button>
    </div>
  )
}
