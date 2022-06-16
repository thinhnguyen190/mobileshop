import { LOGO_SHOP } from "../../../../constans/image"
import { Cart, PartSearch, SearchInput } from "./Search.styled"
import SearchIcon from '@material-ui/icons/Search';
import { Container, Grid, IconButton } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
const Search = (props) => {
    const { onBtnMenu } = props
    const flag = useSelector(state => state.sales.flag)
    const navigate = useNavigate()
    const [ cart, setCart ] = useState(0)
    useEffect(() => {
        if(localStorage.getItem('cart')){
            setCart(JSON.parse(localStorage.getItem('cart')).length)
        }else{
            setCart(0)
        }
    },[flag])
    return (
        <PartSearch>
            <Container>
                <Grid container className="searchStyle">

                    <Grid item lg={2} className="search-item">
                        <MenuIcon onClick={onBtnMenu} className='menuIcon' fontSize="large"/>
                        <Link to="/"><img src={LOGO_SHOP} alt="Error" /></Link>
                    </Grid>

                    <Grid item lg={6} className="search-item notMobile">
                        <SearchInput>
                            <input /><IconButton><SearchIcon /></IconButton>
                        </SearchInput>
                    </Grid>
                    <Grid item lg={2} className="search-item">
                        <Cart product={cart}>
                            <IconButton className="btnCart" onClick={() => navigate('/cart')}>
                                <ShoppingCartIcon fontSize="large" color="action" />
                                <span className="btnCart-count">
                                   {cart} 
                                </span>
                            </IconButton>
                        </Cart>
                        
                    </Grid>

                    <Grid item lg={6} className="search-item mobile">
                        <SearchInput>
                            <input /><IconButton><SearchIcon /></IconButton>
                        </SearchInput>
                    </Grid>

                </Grid>

            </Container>
        </PartSearch>



    )

}
export default Search