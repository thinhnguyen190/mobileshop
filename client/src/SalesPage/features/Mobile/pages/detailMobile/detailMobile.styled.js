import styled from "styled-components";

export const DetailMobilePageDMP = styled.div`
    background-color: #f8f9fa;
`

export const NameProductDMP = styled.div`
    border-bottom: 1px solid #ccc;
    padding:15px 0px;
    h2{
        margin: 0px;
        font-size: 24px;
    }
    .productName{
        display: flex;
        span{
            padding-top: 10px;
            padding-left: 5px;
            font-size: 14px;
            color: #ccc;
        }
    }

    @media ( max-width: 415px){
        h2{
            font-size: 18px;
        }
    }
`

export const IntroProductDMP = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .IntroProductDMP-left{
        width: 54%;
        &__diff{
            font-size: 14px;
            .icon{
                width: 14px;
                color: red;
                margin-right: 5px;
                padding-top: 10px;
            }
            span{
                margin-left: 10px;
            }
        }
    }
    .IntroProductDMP-right{
        width: 44%;
        button{
            width: 100%;
            background-color: red;
            color: white;
            .buyProduct{
                h3{
                    margin: 0;
                }
                span{
                    font-size: 14px;
                    text-transform: none;
                }
            }
        }
    }

    @media ( max-width: 415px){
        flex-wrap: wrap;
        .IntroProductDMP-left{
            min-width: 100%;

            &__diff{
                display: none;
            }
        }
        .IntroProductDMP-right{
            min-width: 100%;
        }
    }
`

export const DMPHeader = styled.div`
    background-color: white;

    @media (max-width: 415px){
        .dmpHeaderContainer{
            padding: 0 5px;
        }
    }
    
`

export const DMPDetailInfor = styled.div`
    
    margin-top: 15px;
    .DMPDetailInfor{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        
    }
    .DMPDetailInfor-left{
        width: 60%;
        border-radius: 6px;
        padding: 15px;
        background-color: white;
        &__slider{
            height: 350px;
        }
        h3{
            margin-bottom: 10px;
        }
    }
    .DMPDetailInfor-right{
        width: 38%;
        border-radius: 6px;
        max-height: 370px;
        background-color: white;    
    }

    @media(max-width: 415px){
        

        .DMPDetailInfor{
            flex-wrap: wrap-reverse;
            padding: 0px ;

        }

        .DMPDetailInfor-left{
            width: 100%;
        }

        .DMPDetailInfor-right{
            width: 100%;
        }

    }
`



export const DMPDetailQandA = styled.div`
    .qaContainer{
        @media (max-width: 415px){
            padding: 0px;
        }
    }
`