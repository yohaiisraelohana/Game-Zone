import React, { useState } from 'react'
import './resetPasswordForm.css';

export default function ResetPasswordForm({resetPassword}) {
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  return (
    <div className='ResetPasswordForm'>
        <h2>Enter New Password</h2>
        <input 
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required={true}
          placeholder='password'
          type="text"  />
        <input 
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required={true}
            placeholder='confirm password'
            type="text" />
        <button
          disabled={password != confirmPassword || password.length < 8}
          onClick={()=>resetPassword(password)}
          >Submit</button>
    </div>
  )
}
