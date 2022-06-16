import { createSlice } from "@reduxjs/toolkit"


const sales = createSlice({
    name: 'sales',
    initialState: {
        flag: 0,
        filterMobile: {
            brand: [],
            price: [],
            pin: [],
            installment: [],
        }
    },
    reducers: {
        notifyCartChange: (state, action) => {
            state.flag = state.flag + action.payload
        },
        filterMobileChange: (state, action) => {
            const { name, value } = action.payload
            console.log(name, value)
            if (value === "") {
                state.filterMobile[name] = []
            } else {
                let flag = -1
                for (let i = 0; i < state.filterMobile[name].length; i++) {
                    if (state.filterMobile[name][i] === value) {
                        flag = i
                    }
                }
                if (flag === -1) {
                    state.filterMobile[name] = [
                        ...state.filterMobile[name],
                        value
                    ]
                } else {
                    state.filterMobile[name].splice(flag, 1)
                }

            }
        },
        getSearchParamsFromUrl: (state, action) => {
            state.filterMobile = {
                ...state.filterMobile,
                ...action.payload
            }
        },
        resetFilterMobile: (state, action) => {
            state.filterMobile = {
                brand: [],
                price: [],
                pin: [],
                installment: [],
            }
        }
    }
})

const { reducer, actions } = sales

export const { notifyCartChange, filterMobileChange, getSearchParamsFromUrl, resetFilterMobile } = actions

export default reducer
