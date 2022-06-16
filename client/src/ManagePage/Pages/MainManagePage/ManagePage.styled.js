import styled from "styled-components";
export const ManagePageStyle = styled.div`
    min-height: 100vh;
    display: flex;
    background: white;
`

export const ManagePageNav = styled.div`
    width: 16%;
    background-color: #4e4eea;
    .logo{
        display: flex;
        width: 100%;
        height: 60px;
        background-color: #0909a8;
        border-bottom: 1px solid #fff;
        span{
            height: 100%;
            over-flow: hidden;
            font-size: 22px;
            color: white;
            font-weight: 800;
            padding: 15px;
            position: relative;
            
            .iconShop{
                position: absolute;
                right: -45%;
                font-size: 50px;
                bottom: 10%;
            }

        }

    }
    .manage-nav{
        display: flex;
        height: calc(100% - 60px);
        &__mainButton{
            width: 50%;
            .MuiIconButton-root{
                width: 100%;
                border-bottom: 1px solid #fff;
                border-radius: 0px;
            }
            a{
                text-decoration: none;
            }
           &-btn{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            color: white;
            span{
                min-width: 100%;
                font-size: 16px;
            }
           }
        }
        &__detailFunc{
            width: 60%;
            background-color: white;
            height: 100%;

        }
    }
`

export const ManagePageContent = styled.div`
    width: 84%;
    height: 100%;
    .MPCtitle_bar{
        height: 60px;
        display: flex;
        &-title{
            width: 70%;
            background-color: white;
            height: 100%;
        }
        &-userLogin{

            width: 30%;
        }
    }
    .MPCcontent{
        padding: 15px;
        background-color: #fcfcfc;
    }
`
