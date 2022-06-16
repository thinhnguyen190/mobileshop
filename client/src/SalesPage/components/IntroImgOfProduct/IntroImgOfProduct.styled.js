import styled from "styled-components";

export const IIOP = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .iiop-avatar{
        width: 100%;
        display: flex;
        justify-content: center;
        img{
                min-width: 70%;
            }
    }
    .btnShow{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        span{
            min-width: 100%;
            font-size: 16px;

            @media (max-width: 415px){
                font-size: 14px;
            }
        }
    }

    @media (max-width: 415px){
        button{
            width: 48%;
        }
    }
`

export const IIOPShowImgs = styled.div`
    display: ${({display}) => display ? display : "none"};
`