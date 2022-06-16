import styled from "styled-components";

export const NotifyHandleStyle = styled.div`
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
            width: 35%;
            height: 30%;
            background-color: #ccc;
            padding: 15px;
            border-radius: 0px 0px 4px 4px;
            font-size: 18px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &-title{
                width: 100%;
                text-align: center;
            }
            &-message{
                width: 100%;
                height: 50%;

                span{
                    width: 100%;
                    text-align: center;
                }
                
            }
            &-btn{
                width: 100%;
                display: flex;
                justify-content: space-around;
                button{
                    width: 40%;
                    color: white;
                    font-weight: 600;
                    &:hover{
                        background-color: blue;
                    }
                }
                &__left{
                    background-color: green;
                    
                }
                &__right{
                    background-color: red;

                }
            }
        }
`