import axiosClient from "./axiosClient";
import axiosManagerClient from "./axiosManagerClient";

const  managerApi = {
    login: (data) => {
        const url = '/api/manage/managerLogin'
         return axiosClient.post(url, data)
    },
    getInforManager: () => {
        const url = 'api/manage/getInforManager'
        return axiosManagerClient.get(url)

        
    }


}

export default managerApi

