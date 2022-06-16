import styled from "styled-components"

export const LoginPageStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
    .pageLogo{
        background-color: white;
        border-radius: 6px 6px 0px 0px;
        width: 25%;
        height: 20%;
        display: flex;
        justify-content: center;
        &-logo{
            font-size: 145px;
        }
    }
    .loginForm{
        display: flex;
        flex-wrap: wrap;
        width: 25%;
        height: 32%;
        padding: 15px;
        background-color: white;
        border-radius: 0px 0px 6px 6px;
        label{
            font-size: 16px;
        }
        &-item{
            width: 100%;

            display: flex;
            justify-content: center;
            .btnLogin{
                width: 40%;
                min-height: 40px;
                
            }
        }
    }
`

export const ResponFromServer = styled.div`
    display: block;
    width: 100%;
    text-align: center;
`