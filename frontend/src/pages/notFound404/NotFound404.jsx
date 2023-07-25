import React from 'react'
import './notFound404.css';
import ghoestIcon from '../../assets/icons/ghoestIcon.svg'

export default function NotFound404() {
  return (
    <div className='NotFound404'>
        <h1>4<span><img src={ghoestIcon} alt="" /></span>4</h1>
        <h2>Error: 404 page not found</h2>
        <p>Sorry, the page you're looking for cannot be accessed</p>
    </div>
  )
}
