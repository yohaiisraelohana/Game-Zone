import React from 'react'
import { useNavigate } from 'react-router-dom';

function TicTacPcNav() {
    const navigate = useNavigate();
    const levels = ["easy","medium","hard"];
  return (
    <div>
        {levels.map(level => (
            <button
                onClick={()=>navigate(`/ticTacGame/pc/${level}`)}
                >
                {level}
            </button>
        ))}
    </div>
  )
}

export default TicTacPcNav