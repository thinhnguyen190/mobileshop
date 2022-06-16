import styled from "styled-components"

const HNY2022 = styled.div`
    position: fixed;
    display: flex;
    left: 0%;
    right: 0%;
    top: 39%;
    justify-content: space-between;
    img{
        width: 8%;
        margin: 10px;
    }
    display: none;
`
const HappyNewYear2022 = () => {
    return(
        <HNY2022>
            <img src="https://fptshop.com.vn/Content/v5d/sale-special/images/sticky-left.png" alt="Error"/>
            <img src="https://fptshop.com.vn/Content/v5d/sale-special/images/sticky-right.png" alt="Error"/>
        </HNY2022>
    )
}
export default HappyNewYear2022