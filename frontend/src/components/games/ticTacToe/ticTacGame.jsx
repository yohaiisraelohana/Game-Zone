import React from 'react'
import './ticTacGame.css'
import { Link } from 'react-router-dom'
import NavBackButton from '../../reusfullComponents/navigateBackButton/navBackButton'

export default function TicTacGame() {

  return (
    <div className='TicTacGame'>
      <NavBackButton to={"/"} />
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
