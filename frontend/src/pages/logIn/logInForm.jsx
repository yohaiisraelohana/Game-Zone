import React, { useEffect, useState } from "react";
import {AiOutlineEyeInvisible,AiOutlineEye,AiFillLock,AiOutlineMail} from 'react-icons/ai';

//style
import "./logInForm.css";
import SignUpForm from "../signUp/signUpForm";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function LogInForm({ updateModal,closeModal }) {
  const { user, error, loading, loginUser } = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const emailAlphabet = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [show_password,setShowPassord] = useState(false); 

  useEffect(() => {
    if(user){
      closeModal();
    }
  },[user]);

  const hundleLogIn = (data) => {
    loginUser(data);
    reset();
  };

  return (
    <div className="LogInForm">
      <div className="login-nav">
        LogIn
        <button
          onClick={() => updateModal(<SignUpForm closeModal={closeModal} updateModal={updateModal} />)}
          className="sign-up"
        >
          /SignUp
        </button>
      </div>
      <form onSubmit={handleSubmit(hundleLogIn)} className="login-form">

        { show_password 
          ?  <AiOutlineEye className="eye-icon" onClick={()=>setShowPassord(false)}/>
          :  <AiOutlineEyeInvisible className="eye-icon" onClick={()=>setShowPassord(true)}/>}
        <AiFillLock className="lock-icon" />
        <AiOutlineMail className="email-icon"/>
        <label>Email</label>
        <input
          {...register("email", {
            required: { value: true, message: "Email is Required..." },
            minLength: { value: 8, message: "min 8 chars.." },
            maxLength: { value: 40, message: "max 40 chars.." },
            pattern: {
              value: emailAlphabet,
              message: "only alphabet allowed",
            },
          })}
          placeholder="yourEmail@..."
          type="text"
        />
        <div className="error-client">
        {errors.email && <p>{errors.email.message}</p>}
        </div>
        <label>Password</label>
        <input
          {...register("password", {
            required: { value: true, message: "Password is Required..." },
            minLength: { value: 5, message: "min 5 chars.." },
            maxLength: { value: 40, message: "max 40 chars.." },
          })}
          type={show_password ? "text" : 'password'}
          placeholder="Type Password.."
        />
        <div className="error-client">
        {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="error-server">
          <p>{error}</p>
        </div>
        <Link className="forgot-password">Forgot your password ?</Link>
        <button className="login-button">LogIn</button>
      </form>
    </div>
  );
}
