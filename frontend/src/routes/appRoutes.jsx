//react router dom
import {createBrowserRouter , RouterProvider ,Route ,createRoutesFromElements} from 'react-router-dom'
//component routes
import React from 'react'
import Home from '../pages/homePage/home';
import MemoryGame from '../components/games/memoryGame/memoryGame';
import MemoryGameStart from '../components/games/memoryGame/memoryGameStart';
import NavBar from '../components/navBar/navBar';
import TicTacGame from '../components/games/ticTacToe/ticTacGame';
import TicTacPc from '../components/games/ticTacToe/ticTacPc';
import SudokuGame from '../components/games/sudokuGame/sudokuGame';
import SudokuGameStart from '../components/games/sudokuGame/sudokuGameStart';
import Roulette from '../components/games/roulette/roulette'
import RouletteGame from '../components/games/roulette/rouletteGame';
import SlidePuzzleGame from '../components/games/slidePuzzleGame/slidePuzzleGame';
import PuzzleGame from '../components/games/puzzleGame/puzzleGame';
import CirclesFight from '../components/games/circlesFight/circlesFight';
import TicTacUsers from '../components/games/ticTacToe/ticTacUsers';
 
export const AppRoutes = () => {


    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='/memoryGame' element={<MemoryGame/>} />
          <Route path='/memoryGame/:name' element={<MemoryGameStart/>} />
          <Route path='/ticTacGame' element={<TicTacGame/>}/>
          <Route path='/ticTacGame/pc' element={<TicTacPc/>}/>
          <Route path='/ticTacGame/users' element={<TicTacUsers/>}/>
          <Route path='/sudokuGame' element={<SudokuGame/>} />
          <Route path='/sudokuGame/:level' element={<SudokuGameStart/>} />
          <Route path='/rouletteGame' element={<RouletteGame/>} />
          <Route path='/slidePuzzleGame' element={<SlidePuzzleGame/>} />
          <Route path='/puzzleGame' element={<PuzzleGame/>}/>
          <Route path='/circlesFight' element={<CirclesFight/>}/>
        </Route>
      )
    )

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
