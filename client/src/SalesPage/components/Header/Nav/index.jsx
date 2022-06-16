import { Button, Container, Grid } from "@material-ui/core"
import { LIST_PRODUCT_MYSHOP } from "../../../../constans/GlobalConstans"
import { ListItem, NavStyle } from "./Nav.styled"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook'
import DesktopMacIcon from '@material-ui/icons/DesktopMac'
import HeadsetIcon from '@material-ui/icons/Headset'
import HouseIcon from '@material-ui/icons/House'
import SimCardIcon from '@material-ui/icons/SimCard'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import { createSearchParams, useNavigate } from "react-router-dom";
import ConvertObjToParamsQueryUrl from "../../../../untils/ConvertObjToParamsQueryUrl";
import { useSelector } from "react-redux";
import { LOGO_SHOP } from "../../../../constans/image";
import CloseIcon from '@material-ui/icons/Close';
const Nav = ({ showNav, onBtnClose }) => {
    const filter = useSelector(state => state.sales.mobileFilter)
    const navigate = useNavigate()
    return (
        <NavStyle showNav={showNav}>
                <Container>
                    <Grid>
                        <ListItem>
                            <div className="headerMenu">
                                <img src={LOGO_SHOP} alt="error"/>        
                                <CloseIcon onClick={onBtnClose}/>
                            </div>
                            <Button startIcon={<PhoneAndroidIcon />} onClick={() => {
                                const paramsquery = ConvertObjToParamsQueryUrl(filter)

                                navigate({
                                    pathname: "/mobile",
                                    search: `${createSearchParams(paramsquery)}`
                                })

                                onBtnClose()
                            }}>{LIST_PRODUCT_MYSHOP[0].name}</Button>
                            <Button startIcon={<LaptopChromebookIcon />}>{LIST_PRODUCT_MYSHOP[1].name}</Button>
                            <Button startIcon={<DesktopMacIcon />}>{LIST_PRODUCT_MYSHOP[2].name}</Button>
                            <Button startIcon={<HeadsetIcon />}>{LIST_PRODUCT_MYSHOP[3].name}</Button>
                            <Button startIcon={<HouseIcon />}>{LIST_PRODUCT_MYSHOP[4].name}</Button>
                            <Button startIcon={<SimCardIcon />}>{LIST_PRODUCT_MYSHOP[5].name}</Button>
                            <Button startIcon={<LoyaltyIcon />}>{LIST_PRODUCT_MYSHOP[6].name}</Button>
                            <Button startIcon={<CreditCardIcon />}>{LIST_PRODUCT_MYSHOP[7].name}</Button>



                        </ListItem>
                    </Grid>
                </Container>

        </NavStyle>
    )
}
export default Nav