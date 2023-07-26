import React from 'react'
import './resetPasswordValidation.css'
export default function ResetPasswordValidation({setKeyInput}) {
  return (
    <div className='ResetPasswordValidation'>
        <h2>Check your email Inbox and Spam for the code</h2>
        <input 
          placeholder='enter code here'
          type='number' 
          onChange={(e) => setKeyInput(parseInt(e.target.value)) } />
    </div>
  )
}
