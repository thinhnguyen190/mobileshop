import styled, { keyframes } from "styled-components"

const LoadingIconKeyFrames = keyframes`
    from{
        transform: rotate(0turn);
    }

    to{
        transform: rotate(1turn);
    }
`


export const SubmitButtonStyle = styled.div`
    width: 100%;
    height: 100%;
    

    .btnSubmit{

        height: 100%;
        width: 100%;
        
        color: white;
        background-color: ${({color}) => color ? color : "blue"};

        font-size: 16px;
        font-weight: 600;

        &:hover{
            background-color: red;
        }

        &.loading{
            position: relative;
            &:after {
                content: "";

                position: absolute;
                top:0;
                bottom:0;
                right:0;
                left: 0;

                width: 20px;
                height: 20px;
                
                margin: auto;
                border: 5px solid transparent;
                border-top-color: white;
                border-radius: 50%;
                
                animation: ${LoadingIconKeyFrames} 1s ease infinite;
            }
        }
    }
`

