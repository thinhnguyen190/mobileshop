import { createGlobalStyle, keyframes } from "styled-components";
import styled from "styled-components";
const GlobalStyled = createGlobalStyle`
    
    * {
        box-sizing: border-box;

    }
    body {
        background-color: #fff;
        color: hsl(192, 100%, 9%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.15em;
        margin:0;
        padding: 0px;
        h1,h2,h3,h4,h5,h6,h6{
            margin: 0px;
        }
        p{
            margin: 0px;
        }
        a{
            text-decoration: none;
        }

    }
`
export const ColorBarPriceOfProduct = styled.div`
    background-color:#cb1c22;
    width: ${({wd}) => wd ? `${1-wd}%`: "100%"};
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    border-top-right-radius: ${({wd}) => wd ? "0px": "15px"};
    border-bottom-right-radius: ${({wd}) => wd ? "0px": "15px"};
    border: 0px;


    

`

export const SkeletonLoadingKeyFrames = keyframes`
    from {
        left: -50%;
    } to {
        left: 50%;
    }
`

export default GlobalStyled