import {createBrowserRouter , RouterProvider ,Route ,createRoutesFromElements} from 'react-router-dom'

import React from 'react'
import Home from '../pages/homePage/home';
import MemoryGame from '../components/games/memoryGame/memoryGame';
import MemoryGameStart from '../components/games/memoryGame/memoryGameStart';
import GameCollection from '../components/games/gamesCollection/gameCollection';

export const AppRoutes = () => {


    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Home/>}>
          <Route index element={<GameCollection/>}/>
          <Route path='/memoryGame' element={<MemoryGame/>} />
          <Route path='/memoryGame/:name' element={<MemoryGameStart/>} />
        </Route>
      )
    )

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
