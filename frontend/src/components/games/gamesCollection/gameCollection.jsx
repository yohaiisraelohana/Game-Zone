import React from 'react'
import {Link} from 'react-router-dom'
//style
import './gameCollection.css'

export default function GameCollection() {

  return (
    <div>
      <div className="">
        <Link to={"/memoryGame"}
          className="memory-game">
          <p>Memory Game</p>
        </Link>
      </div>
    </div>
  )
}
