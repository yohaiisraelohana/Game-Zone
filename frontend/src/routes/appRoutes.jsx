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
    <div className="">
        <RouterProvider router={router}/>
    </div>
)
}
