import axios from "axios";


export const apiGet = async (url,headers) => {
    try {
        const config = {
            method:"GET",
            url:url
        }
        if (headers) {
            config.headers = headers
        }
        const response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

export const apiPost = async(url,bodyData) => {
    try {
        const config = {
            method:"POST",
            url:url,
            data:bodyData,
            withCredentials:true,
        }
        const response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}