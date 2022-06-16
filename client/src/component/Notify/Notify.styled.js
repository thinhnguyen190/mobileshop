import styled from "styled-components"

export const NotifyStyle = styled.div`

    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;

    background-color: rgb(239 239 239 / 91%);
    z-index: 100%;

    display: flex;
    justify-content: center;
    
    .notify{
        width: 22%;
        height: 18%;
        padding: 15px;
        border-radius: 0px 0px 4px 4px;


        background-color: #e46017;
        font-size: 16px;


        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        &-btn{
            display: flex;
            justify-content: center;
            button{
                background-color: blue;
                color: white;
                font-weight: 700;
                width: 35%;
            }
        }
    }
    
    
`