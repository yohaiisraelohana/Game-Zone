import React from 'react'
import './ticTacGame.css'
import { Link } from 'react-router-dom'

export default function TicTacGame() {

  return (
    <div className='games'>
    <div className="type">
      <Link to={"/ticTacGame/pc"} className="ticTac-pc">
        <p>Play with pc</p>
      </Link>
      <Link to={"/ticTacGame/users"} className="ticTac-users">
        <p>Play with Friends</p>
      </Link>
    </div>
  </div>
  )
}
