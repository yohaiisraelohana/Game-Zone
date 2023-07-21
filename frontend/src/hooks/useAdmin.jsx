import React from 'react'
import {  useSelector } from 'react-redux'
import { apiDelete, apiGet, apiPost, apiPut } from '../services/apiRequests';
import { ADMIN_GET_USERS, ADMIN_UPDATE_USER, ADMIN_DELETE_USER } from '../constants/urls';



export default function useUser() {
    const {user} = useSelector(store=>store.userReducer);    

    const adminGetUsers = async (queryObj) => {
      try {
        if (user.role == "user") throw Error("unutherize");
        let url = ADMIN_GET_USERS;
        console.log(queryObj);
        if (queryObj){
          url = url + "?";
          const {name,sort} = queryObj;
          console.log({name,sort});
          if (sort){
            url = url + "sort=" + sort;
          } else {
            url = url + "sort=" + "_id";
          }
          if (name){
            url = url + "&name=" + name;
          }

        }
        console.log(url);
        const response = await apiGet(url,{},true);
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }


    const adminUpdateUsers = async (id,bodyData) => {
      try {
        if (user.role == "user") throw Error("unutherize");
        const response = await apiPut(`${ADMIN_UPDATE_USER}${id}`,bodyData);
      } catch (error) {
        console.log(error);
      }
    }

    const adminDeleteUsers = async (id) => {
      try {
        if (user.role == "user") throw Error("unutherize");
        const response = await apiDelete(`${ADMIN_DELETE_USER}${id}`);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }


  return {
      adminGetUsers,
      adminUpdateUsers,
      adminDeleteUsers,
    };
  }