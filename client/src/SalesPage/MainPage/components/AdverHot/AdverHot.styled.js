import styled from "styled-components";

export const AdverStyle = styled.div`

    width: 100%;

    display: flex;
    border: 4px solid #fff;
    border-radius: 5px;

    .adver-left{
        width: 66.66%;
        height: 500px;
        background: red;
    }

    
    .adver-right{
        width: 33.33%;
        height: 500px;
        background: blue;


    }

    @media ( max-width: 415px ){
        border: 0px;

        .adver-left{
            width: 100%;
        }


        .adver-right{
            display: none;
        }
    }


    @media ( min-width: 416px) and (max-width:1024px){

        .adver-left{
            width: 100%;
        }


        .adver-right{
            display: none;
        }
    }
    
`