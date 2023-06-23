import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFriends, login,signUp,stayLogin } from '../redux/features/userSlice';
import { apiGet } from '../services/apiRequests';
import { USERS_LIST } from '../constants/urls';

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

    const sendFriendRequest = (id) => {
      dispatch(addFriends(id));
    }

    const searchUser = async (name) => {
      try {
        const {data} = await apiGet(USERS_LIST + name);
        return data;
      } catch (error) {
        console.log({error});
      }
    }

  return {loading,user,error,signUpUser,loginUser,stayLoginUser,searchUser,sendFriendRequest};
}