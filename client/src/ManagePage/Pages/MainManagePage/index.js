import { IconButton } from "@material-ui/core"
import { ManagePageContent, ManagePageNav, ManagePageStyle } from './ManagePage.styled'
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link, Route, Routes } from "react-router-dom";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ChooseOfManageFunc from '../../components/ChooseOfManageFunc'
import RedditIcon from '@material-ui/icons/Reddit';
import ManageFuture from "../../features/manage";
import AvatarOfManager from "../../components/AvatarOfManager";
const MainManagePage = (props) => {
    console.log("mainpage rerender")
    return (
        <ManagePageStyle>
            <ManagePageNav>
                <div className="logo">
                    <span>NTT_Shop <RedditIcon fontSize="large" className="iconShop"/></span>

                </div>
                <div className="manage-nav">
                    <div className="manage-nav__mainButton">
                        <Link to="mana">
                        <IconButton >
                            <div className="manage-nav__mainButton-btn">
                                <HomeIcon />
                                <span>Quản lý</span>
                            </div>
                        </IconButton>
                        </Link>
                        <Link to="manageProduct">
                        <IconButton >
                            <div className="manage-nav__mainButton-btn">
                                <PeopleAltIcon />
                                <span>Khách hàng</span>
                            </div>
                        </IconButton>
                        </Link>
                        <Link to="manageProduct">
                        <IconButton >
                            <div className="manage-nav__mainButton-btn">
                                <LocalAtmIcon />
                                <span>Tiền bạc</span>
                            </div>
                        </IconButton>
                        </Link>
                    </div>
                    <div className="manage-nav__detailFunc">
                        <Routes>
                            <Route path="/mana/*" element={<ChooseOfManageFunc />} />
                        </Routes>
                    </div>
                </div>
            </ManagePageNav>

            <ManagePageContent>
                <div className="MPCtitle_bar">
                    <div className="MPCtitle_bar-title">
                        
                    </div>
                    <div className="MPCtitle_bar-userLogin">
                        <AvatarOfManager />
                    </div>
                </div>
                <div className="MPCcontent">
                    <div className="MPCcontent__listProduct">
                        <Routes>
                            <Route path="/mana/*" element={<ManageFuture /> }/>
                        </Routes>
                    </div>
                    
                </div>
            </ManagePageContent>

        </ManagePageStyle>
    )
}

export default MainManagePage