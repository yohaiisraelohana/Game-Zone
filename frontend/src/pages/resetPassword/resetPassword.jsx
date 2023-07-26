//react imports
import React,{ useEffect, useRef, useState } from "react";
import useSendEmail from '../../hooks/UseSendEmail';
import ResetPasswordForm from "./resetPasswordForm";
import ResetPasswordValidation from "./resetPasswordValidation";
import NavBackButton from '../../components/reusfullComponents/navigateBackButton/navBackButton';
import {RESET_USER_PASSWORD} from '../../constants/urls';

//style
import './resetPassword.css';
import { apiPost } from "../../services/apiRequests";
import { useNavigate } from "react-router-dom";



export default function ResetPassword() {
    const [keyInput,setKeyInput] = useState(null);
    const [generatedKey,setGeneratedKey] = useState(0);
    const emailRef = useRef();
    const [emailSent,setEmailSent] = useState(false);
    const {sendEmail} = useSendEmail();
    const navigate = useNavigate();
    //functions
    const hundleSendEmail = async () => {
        try {
            const res = await sendEmail(generatedKey,emailRef.current.value,'code for verify email');
            if (res == "OK") setEmailSent(emailRef.current.value);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        setGeneratedKey((Math.random(0,9999)*10000).toFixed(0));
    },[])
    console.log(generatedKey);
    console.log(keyInput);
    
    const resetPassword = async (password) => {
        try {
            console.log({password,email:emailSent});
            const res = await apiPost(RESET_USER_PASSWORD,{password,email:emailSent});
            if (res.status >= 200 && res.status < 300) navigate("/");
        } catch (error) {
            console.log(error);
        }

      } 
  return (
    <div className="ResetPassword">
        <NavBackButton to={"/"} />
        {emailSent ? 
            (generatedKey == keyInput 
                ? <ResetPasswordForm resetPassword={resetPassword}/> 
                : <ResetPasswordValidation setKeyInput={setKeyInput} /> 
            ): 
            <div className="ResetPassword-email-container">
                <h2>Enter Email Address</h2>
                <input 
                    placeholder="your email address"
                    ref={emailRef}
                    type='email' />
                <button
                onClick={()=>hundleSendEmail()}
                >Send</button>
            </div>
        }
    </div>
  )
}

