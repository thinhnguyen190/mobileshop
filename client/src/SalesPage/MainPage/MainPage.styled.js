import styled from "styled-components";
import { BACKGROUND_SHOP } from "../../constans/GlobalConstans";
export const MainPageStyle = styled.div`
    background-image: url("${BACKGROUND_SHOP}");
    background-repeat: no-repeat;
    background-color: rgb(174, 0, 0);
    min-height: 100vh;
    background-size: 100%;
    padding-top: 24px;
    padding-bottom: 15px;


    @media ( max-width: 415px){
        .mainPage{
            padding: 0px;
        }   
    }

    
`
export const Picture = styled.div`
    margin: 20px 0px;
    img{
        width:100%;
        border-radius:5px;
    }


    @media ( max-width: 415px){
        img{
            border-radius: 0px;
        }  
    }
`