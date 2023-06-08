import axios from "axios";


export const apiGet = async (url,headers) => {
    try {
        const {data} = await axios.get(url);
        return data;
    } catch (error) {
        
    }
}