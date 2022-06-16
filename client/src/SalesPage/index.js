import { Route, Routes } from "react-router-dom"
import Mobile from "./features/Mobile"
import MainPage from "./MainPage/MainPage.jsx"
import Footer from "./components/Footer"
import HappyNewYear2022 from "./components/HappyNewYear2022"
import Header from "./components/Header"
import CartPage from "./Pages/CartPage"
import { useState } from "react"
const SalesPage = (props) => {
    const [ flagOrder, setFlagOrder ] = useState(0)

    const handleSetFlagOder = (value) => {
        setFlagOrder(value)
    }
    return (
        <>

            <HappyNewYear2022 />
            <Header flagOrder={flagOrder} setFlagOrder={handleSetFlagOder}/>
            <Routes>
                <Route path="/*" element={<MainPage />} />
                <Route path="mobile/*" element={<Mobile />} />
                <Route path="cart" element={<CartPage />} />
            </Routes>
            <Footer />

        </>
    )
}

export default SalesPage