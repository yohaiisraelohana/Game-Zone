//react router dom
import {createBrowserRouter , RouterProvider ,Route ,createRoutesFromElements} from 'react-router-dom'
//component routes
import React from 'react'
import Home from '../pages/homePage/home';
import MemoryGame from '../components/games/memoryGame/memoryGame';
import MemoryGameStart from '../components/games/memoryGame/memoryGameStart';
import NavBar from '../components/navBar/navBar';import TicTacGame from '../components/games/ticTacToe/ticTacGame';
import TicTacPc from '../components/games/ticTacToe/ticTacPc';
 '../components/navBar/navBar'

export const AppRoutes = () => {


    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='/memoryGame' element={<MemoryGame/>} />
          <Route path='/memoryGame/:name' element={<MemoryGameStart/>} />
          <Route path='/ticTacGame' element={<TicTacGame/>}/>
          <Route path='/ticTacGame/pc' element={<TicTacPc/>}/>
        </Route>
      )
    )

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
