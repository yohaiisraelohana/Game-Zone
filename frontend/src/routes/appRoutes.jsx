import {createBrowserRouter , RouterProvider } from 'react-router-dom'

import React from 'react'
import Home from '../pages/homePage/home';

export const AppRoutes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        }
    ]);

  return (
    <div className='app-provider'  >
        <RouterProvider router={router}/>
    </div>
)
}
