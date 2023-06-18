import React, { useEffect, useState } from "react";

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
  const [toggle, setToggle] = useState(false);
  const emailAlphabet = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
    <div className="login-container">
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
        {errors.email && <p>{errors.email.message}</p>}
        <label>Password</label>
        <input
          {...register("password", {
            required: { value: true, message: "Password is Required..." },
            minLength: { value: 5, message: "min 5 chars.." },
            maxLength: { value: 40, message: "max 40 chars.." },
          })}
          type={!toggle ? "Password" : "text"}
          placeholder="Type Password.."
        />
        {errors.password && <p>{errors.password.message}</p>}
        <div>
          <p>{error}</p>
        </div>
        <Link className="forgot-password">Forgot your password ?</Link>
        <button className="login-button">LogIn</button>
      </form>
    </div>
  );
}
