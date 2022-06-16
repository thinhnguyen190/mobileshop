import axiosClient from "./axiosClient"


const orderApi = {
    addOrder: (data) => {
        const url= "api/order/addOrder"
        return axiosClient.post(url, data)
    },
    getOrders: () => {
        const url = "api/order/getOrders"
        return axiosClient.get(url)
    },

    getOrder: (id) => {
        const url = `api/order/getOrder/${id}`
        return axiosClient.get(url)
    },

    updateStatus: (id, newStatus) => {
        const url = `api/order/updateStatus`

        return axiosClient.post(url, {
            id,
            newStatus
        })
    },

    delOrder: (id) => {
        const url = "api/order/delOrder"
        return axiosClient.delete(url, {data: {id}})
    },

    getTopMobileBestSell: () => {
        const url = "api/order/getMobileBestSell"

        return axiosClient.get(url)
    }



}

export default orderApi