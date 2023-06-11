import React from 'react'
import './home.css'
import GameCollection from '../../components/games/gamesCollection/gameCollection';
export default function Home() {
  return (
    <div className='home'>

      <main>
        <GameCollection/>
      </main>
    </div>
  )
}
