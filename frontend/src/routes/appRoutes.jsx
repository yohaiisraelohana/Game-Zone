import {createBrowserRouter , RouterProvider } from 'react-router-dom'

import React from 'react'
import Home from '../pages/homePage/home';
import MemoryGame from '../components/games/memoryGame/memoryGame';

export const AppRoutes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path:"/memoryGame",
          element: <MemoryGame/>
        }
    ]);

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
