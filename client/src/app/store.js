import { configureStore } from "@reduxjs/toolkit";
import salesReducer from '../SalesPage/SalesPage.slice'
import manageReducer from '../ManagePage/ManagePage.slice'
const rootReducer = {
    sales: salesReducer,
    manage: manageReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store