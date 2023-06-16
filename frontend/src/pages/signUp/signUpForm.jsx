import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LogInForm from "../logIn/logInForm";
import "./signUpForm.css";
import useUser from "../../hooks/useUser";

export default function SignUpForm({ updateModal }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {user,error,loading,signUpUser} = useUser();
  const nameRegex = /^[a-zA-Z ]+$/;
  const emailAlphabet = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const [toggle, setToggle] = useState(false);

  const hundleSignUp = (data) => {
    console.log(data);
    signUpUser(data);
    reset();
  };

  return (
    <div className="signUp-container">
      <div className="signUp-nav">
        SignUp
        <button
          onClick={() => updateModal(<LogInForm updateModal={updateModal} />)}
          className="log-in"
        >
          /LogIn
        </button>
      </div>
      <form onSubmit={handleSubmit(hundleSignUp)} className="signUp-form">
        <label>Name</label>
        <input
          {...register("name", {
            required: { value: true, message: "name is Required..." },
            minLength: { value: 10, message: "min 6 chars.." },
            maxLength: { value: 30, message: "max 40 chars.." },
            pattern: {
              value: nameRegex,
              message: "only alphabet allowed",
            },
          })}
          placeholder="Type Your Name.."
          type="text"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>Email</label>
        <input
          {...register("email", {
            required: { value: true, message: "Email is Required..." },
            minLength: { value: 10, message: "min 8 chars.." },
            maxLength: { value: 30, message: "max 40 chars.." },
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
        <button className="signUp-button">SignUp</button>
      </form>
    </div>
  );
}
