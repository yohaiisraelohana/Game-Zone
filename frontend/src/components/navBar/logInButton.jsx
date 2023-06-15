import React from 'react'
import LogInForm from "../../pages/logIn/logInForm";
//style
import './loginButton.css'

export default function LogInButton({updateModal}) {
  return (
    <button
    onClick={()=>updateModal(<LogInForm updateModal={updateModal}/>)}
    className='login-button'
    >logIn</button>
  )
}
