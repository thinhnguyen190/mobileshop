import axiosManagerClient from "./axiosManagerClient"

const TokenService = {
    getLocalAccessToken: () => {
        const accessToken = localStorage.getItem("accessToken")

        return accessToken
    },
    getLocalRefreshToken: () => {
        const refreshToken = localStorage.getItem("refreshToken")

        return refreshToken
    },
    refreshToken: (refreshToken) => {
        const url = "api/manage/refreshToken"
        return axiosManagerClient.post(url, {
            refreshToken
        })
    },


}

export default TokenService