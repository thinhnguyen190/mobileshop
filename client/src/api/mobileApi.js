import axiosClient from "./axiosClient"
import axiosManagerClient from "./axiosManagerClient";


const mobileApi = {
    getAll: (params) => {
        const url = '/mobile'
        return axiosClient.get(url, { params });
    },
    getMobile: (id) => {
        const url = `/mobile/${id}`
        return axiosClient.get(url)
    },
    // addMobile: () => {
    //     const url = '/mobile/addMobile';
    //     return axiosManagerClient.post 
    // },
    
    // updateMobile: (data) => {
    //     const url = `/mobile/updateMobile/${data.id}`
    //     return axiosManagerClient.put(url, data)
    // },
    deleteMobile: (id) => {
        const url = `mobile/delMobile?id=${id}`
        return axiosManagerClient.delete(url)
    },
    getMobileByManager:(params) => {
        const url = `mobile/getByManager`
        return axiosManagerClient.get(url, {params})
    },
}

export default mobileApi