import React from 'react'

//style
import './logInForm.css'
import SignUpForm from '../signUp/signUpForm'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function LogInForm({updateModal}) {
  const { register,handleSubmit,formState:{errors}} = useForm();
  const hundleLogIn = (data) => {
    console.log(data);
  }
  return (
    <div className='login-container'>
      <div className='login-nav'>LogIn  
        <button 
          onClick={()=>updateModal(<SignUpForm updateModal={updateModal}/>)}
          className='sign-up'>/SignUp</button>
      </div> 
      <form 
        onSubmit={handleSubmit(hundleLogIn)}
        className='login-form' >
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
          <button className='login-button'>
            LogIn
          </button>
      </form>
    </div>
  )
}
