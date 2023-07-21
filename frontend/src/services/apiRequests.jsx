import axios from "axios";


export const apiGet = async (url,headers,withCredentials) => {
    try {
        let config = {
            method:"GET",
            url:url,
        }
        if (headers) {
            config.headers = headers
        }
        if(withCredentials) {
            config.withCredentials = withCredentials;
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
        let config = {
            method:"POST",
            url:url,
            withCredentials:true,
        }
        if(bodyData){
            config.data = bodyData;
        }
        const response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}
export const apiPut = async(url,bodyData) => {
    try {
        let config = {
            method:"PUT",
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

export const apiDelete = async(url) => {
    try {
        let config = {
            method:"DELETE",
            url:url,
            withCredentials:true,
        }
        const response = await axios(config);
        return response;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}