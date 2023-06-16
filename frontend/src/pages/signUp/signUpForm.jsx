import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import LogInForm from '../logIn/logInForm';
import './signUpForm.css'

export default function SignUpForm({updateModal}) {
    const {register,handleSubmit,reset,formState:{errors}} = useForm();
    const hundleSignUp = (data) => {
        console.log(data);
        reset();
      }
      
  return (
    <div className='signUp-container'>
    <div className='signUp-nav'>SignUp 
      <button 
        onClick={()=>updateModal(<LogInForm updateModal={updateModal}/>)}
        className='log-in'>/LogIn</button>
    </div> 
    <form 
      onSubmit={handleSubmit(hundleSignUp)}
      className='signUp-form' >
        <label >
          Name
        </label>
        <input 
          {...register("name")}
          placeholder='your name here'
          type="text" />
        <label >
          Email
        </label>
        <input 
          {...register("email")}
          placeholder='yourEmail@...'
          type="text" />
        <label >
          Password
        </label>
        <input 
          {...register("password")}
          placeholder='****'
          type="text" />
        <button className='signUp-button'>
          SignUp
        </button>
    </form>
  </div>
  )
}
