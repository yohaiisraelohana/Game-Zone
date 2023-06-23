import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login,signUp,stayLogin } from '../redux/features/userSlice';

export default function useUser() {
    const {user,loading,error} = useSelector(store=>store.userReducer);
    const dispatch  = useDispatch();
    const loginUser = (data) => {
        dispatch(login(data));
    }
    const signUpUser = (data) =>{
      dispatch(signUp(data));
    }
    const stayLoginUser = () =>{
      dispatch(stayLogin());
    }

  return {loading,user,error,signUpUser,loginUser,stayLoginUser};
}