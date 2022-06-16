import { useState } from "react"
import { HeaderStyle } from "./Header.styled"
import Nav from "./Nav"
import Search from "./Search"

const Header = (props) => {

    const { flagOrder, setFlagOrder } = props

    const [ showNav, setShowNav ] = useState(0)

    const handleClickBtnMenu = () => {
        setShowNav(1)
    }

    const handleClickBtnClose = () => {
        setShowNav(0)
    }
    return (
        <HeaderStyle>
            <Search flag={flagOrder} setFlagOrder={setFlagOrder} onBtnMenu={handleClickBtnMenu}/>
            <Nav showNav={showNav} onBtnClose={handleClickBtnClose}/>
        </HeaderStyle>
    )
}
export default Header