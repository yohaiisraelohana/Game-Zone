// Client-side code (Home.js)
import React, { useEffect, useState } from 'react';
import './home.css';
import GameCollection from '../../components/games/gamesCollection/gameCollection';

export default function Home() {
  return (
    <div className='Home'>
      <main>
        <GameCollection/>
      </main>
    </div>
  );
}
