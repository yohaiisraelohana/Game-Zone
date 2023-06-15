import React from 'react'
import LogInForm from "../../pages/logIn/logInForm";
//style
import './loginButton.css'

export default function LogInButton({hundleLogin}) {
  return (
    <button
    onClick={()=>hundleLogin(<LogInForm/>)}
    className='login-button'
    >logIn</button>
  )
}
