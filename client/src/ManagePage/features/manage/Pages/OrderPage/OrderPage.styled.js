import styled  from "styled-components";

export const OrderPageStyle = styled.div`
    display: flex;
    .order-table{
        width: 70%;
    }
`



export const DetailOrder = styled.div`
    width: 30%;
    overflow: hidden;
    position: relative;

    img{

        display: ${({show}) => show ? "none" : "block"};
        width: 100%;
        height: 100%;
        margin-top: ${({show}) => show ? "-100%" : "0px"};

        transition: all 0.5s;
    }

    .detailOrder{

        width: 100%;


        margin-left: ${({show}) => show ? "opx" : "100%"};
        padding: 10px;

        transition: all 0.5s;
    }
`