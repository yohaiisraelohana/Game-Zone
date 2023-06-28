import React, { useEffect } from 'react'
import {apiGet} from '../../../services/apiRequests'
import './usersMenagment.css'
import { ADMIN_GET_USERS } from '../../../constants/urls'
import axios from 'axios'

export default function UsersMenagment() {
 const getUsers = async () => {
   try {
     const {data} = await axios({method:"GET",url:ADMIN_GET_USERS,withCredentials:true});
     console.log(data);
   } catch (error) {
     console.log(error);
   }
 }
  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div>usersMenagment</div>
  )
}
