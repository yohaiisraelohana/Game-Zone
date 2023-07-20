// Client-side code (Home.js)
import React, { useEffect, useState } from 'react';
import './home.css';
import GameCollection from '../../components/games/gamesCollection/gameCollection';
import useUser from "../../hooks/useUser";

export default function Home() {
  const {userLogOut} = useUser();
  return (
    <div className='Home'>
      <main>
        <GameCollection/>
      </main>
      <button onClick={userLogOut}>logout press here</button>
    </div>
  );
}
