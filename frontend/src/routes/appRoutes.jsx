//react router dom
import {createBrowserRouter , RouterProvider ,Route ,createRoutesFromElements} from 'react-router-dom'
//component routes
import React, { useEffect } from 'react'
import Home from '../pages/homePage/home';
import MemoryGame from '../components/games/memoryGame/memoryGame';
import MemoryGameStart from '../components/games/memoryGame/memoryGameStart';
import NavBar from '../components/navBar/navBar';
import TicTacPc from '../components/games/ticTacToe/ticTacPc';
import SudokuGame from '../components/games/sudokuGame/sudokuGame';
import SudokuGameStart from '../components/games/sudokuGame/sudokuGameStart';
import RouletteGame from '../components/games/roulette/rouletteGame';
import SlidePuzzleGame from '../components/games/slidePuzzleGame/slidePuzzleGame';
import PuzzleGame from '../components/games/puzzleGame/puzzleGame';
import CirclesFight from '../components/games/circlesFight/circlesFight';
import useUser from '../hooks/useUser';
import Account from '../pages/account/account';
import AdminMenagment from '../pages/adminMenagment/adminMenagment';
import SudokuMenagmentOptions from '../pages/adminMenagment/gamesMenagment/sudokuMenagment/sudokuMenagmentOptions';
import NotFound404 from '../pages/notFound404/NotFound404';
 
export const AppRoutes = () => {
  const { user , stayLoginUser} = useUser();
  useEffect(() => {
  if(!user){
    stayLoginUser();
    console.log(user);
  }
  else{
    console.log(user);
  }
  },[user])

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path='/memoryGame' element={<MemoryGame/>} />
          <Route path='/memoryGame/:name' element={<MemoryGameStart/>} />
          <Route path='/ticTacGame' element={<TicTacPc/>}/>
          <Route path='/sudokuGame' element={<SudokuGame/>} />
          <Route path='/sudokuGame/:level' element={<SudokuGameStart/>} />
          <Route path='/rouletteGame' element={<RouletteGame/>} />
          <Route path='/slidePuzzleGame' element={<SlidePuzzleGame/>} />
          <Route path='/puzzleGame' element={<PuzzleGame/>}/>
          <Route path='/circlesFight' element={<CirclesFight/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/admin' element={<AdminMenagment/>}/>
          <Route path='*' element={<NotFound404/>}/>
        </Route>
      )
    )

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
