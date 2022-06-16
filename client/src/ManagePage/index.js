
import { Route, Routes, useNavigate } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import MainManagePage from "./Pages/MainManagePage"
import { useDispatch, useSelector } from "react-redux"
import NotFoundPage from "../component/NotFoundPage"
import { useEffect } from "react"
import managerApi from "../api/manager"
import { login } from "./ManagePage.slice"
//import ChooseOfManageFunc from "./components/ChooseOfManageFunc"



const ManagePage = (props) => {
    console.log("rerender")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.manage.user)
    const { isLogged } = user

    useEffect(() => {

        const accessToken = localStorage.getItem("accessToken")
        const refreshToken = localStorage.getItem("refreshToken")
        const fetchManager = async () => {
            if(accessToken &&                                        refreshToken){
                const newUser = await managerApi.getInforManager()
                console.log(newUser)
                if(newUser){
                    dispatch(login({
                                userName: newUser.userName,
                                role: newUser.role,
                                accessToken: accessToken,
                                refreshToken: refreshToken
                            }))
                }
            }else{
                navigate('/manage/login')
            }
        }
        fetchManager()
        

    }, [navigate, dispatch])
    return (
        <>
            <Routes>
                <Route path="/*" element={isLogged ? <MainManagePage /> : <LoginPage />} />
                <Route path="/login" element={isLogged ? <NotFoundPage /> : <LoginPage />} />

            </Routes>
        </>
    )
}

export default ManagePage
