import axios from "axios";
import { UPLOAD_IMAGE } from "../constants/urls";
import { apiGet } from "./apiRequests";

export const uploadImageToCloudinary = async (img) => {
    try {
        const {data:uploadParams} = await apiGet(UPLOAD_IMAGE,{
            'Content-Type': 'application/json',
            'x-api-key': `${JSON.parse(localStorage.getItem("user")).Token}`
        });

        const queryString = Object.keys(uploadParams)
            .map((key) => `${key}=${encodeURIComponent(uploadParams[key])}`)
            .join('&');

        const uploadUrl = `https://api.cloudinary.com/v1_1/dhojbnefp/upload?${queryString}`;
        const formData = new FormData()
        formData.append("file",img);


        const {data} = await axios.post(uploadUrl, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        console.log(data.secure_url);
        return data.secure_url
    } catch (error) {
        console.log(error);
    }
}

