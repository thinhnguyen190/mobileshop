import axios from "axios";
import queryString from 'query-string'

const baseUrl = "http://localhost:5000"


const axiosClient = axios.create({
    baseURL: baseUrl, 
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    //handle token
    return config
})
axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data
    }
    return response
}, (error) => {
    throw error;
});

export default axiosClient                                                                                  
