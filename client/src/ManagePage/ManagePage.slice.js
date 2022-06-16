import { createSlice } from "@reduxjs/toolkit";



const manage = createSlice({
    name: 'manage',
    initialState: {
        user: {
            infor: {},
            isLogged: false,
            role: 0,
            accessToken: "",
            refreshToken: ""
        }
    },
    reducers: {
        login: ( state, action) => {
            const { userName, role, accessToken, refreshToken } = action.payload
            state.user.infor = {
                userName
            }
            state.user.isLogged = true
            state.user.role = role 
            state.user.accessToken = accessToken
            state.user.refreshToken = refreshToken
        },
        logout: (state, action) => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            state.user = {
                infor: {},
                isLogged: false,
                role: 0,
                accessToken: "",
                refreshToken: ""
            }
        },
        setNewToken: ( state, action) => {
            const { newAccessToken, newRefreshToken } = action.payload
            localStorage.setItem("accessToken", newAccessToken)
            localStorage.setItem("refreshToken", newRefreshToken)
            state.user.accessToken = newAccessToken
            state.user.accessToken = newRefreshToken
            state.user.isLogged = true
        }
    }

})


const { reducer, actions} = manage

export const { login, setNewToken, logout } = actions

export default reducer