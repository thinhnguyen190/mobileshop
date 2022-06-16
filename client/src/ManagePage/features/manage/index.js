import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import AddEditMobile from "./components/AddEditMobile"
import ManageMobile from "./Pages/ManageMobile"
import OrderPage from "./Pages/OrderPage"
import NotFoundPage from "../../../component/NotFoundPage"
import OverViewPage from "./Pages/OverViewPage"

const ManageFuture = (props) => {

    const user = useSelector(state => state.manage.user)
    return (
        <>
            <Routes>
                <Route path="/overview" element={<OverViewPage />} />
                <Route path="/order" element={<OrderPage />}/>
                <Route path="/product" element={<ManageMobile />} />
                <Route path="/product/addMobile" element={user.role ? <AddEditMobile /> : <NotFoundPage /> } />
                <Route path="/product/editMobile/:id" element={user.role ? <AddEditMobile /> : <NotFoundPage /> } />
            </Routes>
        </>
    )
}

export default ManageFuture