import styled, { keyframes } from "styled-components";

export const TopBestSellerStyle = styled.div`
        display: flex;
        justify-content: center;
        align-content: start;
        flex-wrap: wrap;

        width: 100%;
        height: 100%;
        


        .title{
            text-align: center;

            border: 1px solid blue;  
            border-radius: 4px; 
            padding: 5px; 
        }
        
`

const ItemTopBestSellerKeyframe = keyframes`
    0%{
        box-shadow: 2px 2px black;

        transform: rotateX(15deg);
    }
    50%{
        text-shadow: 1px 1px black;
        transform: rotateX(0deg);

    }
    100%{
        box-shadow: 2px 2px red;
        text-shadow: 1px 1px orange;
        transform: rotateX(-15deg);

    }


`

export const ItemTopBestSeller =styled.div`

        width: 92%;
        max-height: 35px;
        margin-top: 10px;
        border: 2px solid red;
        padding: 5px 5px;
        border-radius: 4px;

        font-size: 18px;

        animation-name: ${ItemTopBestSellerKeyframe};
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;


`

