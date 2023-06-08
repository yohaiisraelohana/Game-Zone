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