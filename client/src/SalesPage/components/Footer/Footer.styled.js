import styled from "styled-components"

export const PartFooter = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    box-sizing: border-box;
    background-color: #fff;
    padding-top: 15px;
    background-origin: padding-box;
`

export const MainContent = styled.div`
    display:flex;
    p{
        margin:0px;
    }
    .link-detail-infor{
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        height:fit-content;
        p{
            margin-top: 2px;
            &:hover{
                text-decoration:underline;
                color:#000;
            }
        }
        .link-item{
            height:25px;
        }
        font-size:14px;
        color:#3399D2;
    }
    .support-infor{
        width:40%;
        p{
            font-size: 15px;
            margin: 2px 0px;
        }
        a{
            font-size: 20px;
            color: red;
        }
        span{
            color: #000;
            font-size: 14px;
        }
        img{
            max-width: 100%;
        }
    }
    .contact-infor{
        margin-bottom: 5px;
    }
`
export const Address = styled.div`
    width: 100%;
    background: #ccc;
    font-size: 10px;
    padding:12px;
    text-align: center;
    p{
        margin: 0px;
    }
`