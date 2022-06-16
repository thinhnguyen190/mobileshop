import axios from "axios";
import queryString from 'query-string'
import store from "../app/store";
import { setNewToken } from "../ManagePage/ManagePage.slice";
import TokenService from "./TokenService";

const baseUrl = "http://localhost:5000"
const { dispatch } = store

const axiosManagerClient = axios.create({
    baseURL: baseUrl, 
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosManagerClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("accessToken")
    if(token){
        config.headers["x-access-token"] = token
    }

    return config
})
axiosManagerClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data
    }
    return response
}, async (error) => {
    if(error.response && error.response.status === 401){
        error.config._retry = true
        try {
            const refreshToken = localStorage.getItem("refreshToken")
            const newToken = await TokenService.refreshToken(refreshToken)
            dispatch(setNewToken(newToken))
            return axiosManagerClient(error.config)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    //throw error;
});

export default axiosManagerClient                                                                                  
