import React from 'react'
import { useForm } from 'react-hook-form'
import LogInForm from '../logIn/logInForm';
import { Link } from 'react-router-dom';
import './signUpForm.css'

export default function SignUpForm({updateModal}) {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const hundleSignUp = (data) => {
        console.log(data);
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
        <Link className='forgot-password'>
          Forgot your password ?
        </Link>
        <button className='signUp-button'>
          LogIn
        </button>
    </form>
  </div>
  )
}
