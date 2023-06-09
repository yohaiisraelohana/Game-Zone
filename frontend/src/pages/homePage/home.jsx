import React from 'react'
import './home.css'
import { Outlet } from 'react-router';
export default function Home() {
  return (
    <div className='home'>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
