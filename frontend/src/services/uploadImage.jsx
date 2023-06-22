import axios from "axios";
import { UPLOAD_IMAGE } from "../constants/urls";
import { apiGet } from "./apiRequests";

export const uploadImageToCloudinary = async (img) => {
    try {
        //get a sign from cloudinary in the backend
        const {data:uploadParams} = await apiGet(UPLOAD_IMAGE,{},true);
        //create a query srtring from the sign
        const queryString = Object.keys(uploadParams)
            .map((key) => `${key}=${encodeURIComponent(uploadParams[key])}`)
            .join('&');

        const uploadUrl = `https://api.cloudinary.com/v1_1/dhojbnefp/upload?${queryString}`;
        const formData = new FormData()
        formData.append("file",img);


        const {data} = await axios.post(uploadUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        return data
    } catch (error) {
        console.log(error);
    }
}

/* 
TODO: 1. when calling this function - {secure_url} = uploadImageToCloudinary(the image from user);
* then check if secure_url exist and save in the user
 */ 
