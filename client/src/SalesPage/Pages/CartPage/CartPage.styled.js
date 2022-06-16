import styled from "styled-components";

export const CartPageStyle = styled.div`  
    background-color: #f8f8f8;
    min-height: 70vh;
    .cartpage{
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        &-redirect{
            width: 100%;
            margin: 5px 0px 5px 0px;
        }
        &-cart{
            width: 60%;
            background-color: white;
            border-radius: 5px;
            &__length{
                padding: 10px 20px;
                border-bottom: 1px solid #e7e2e2;
            }
            &__listProduct{
                &-item{
                    padding: 10px 20px;
                    border-bottom: 1px solid #e7e2e2;

                }
            }
            
            &__totalBill{
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                &-bill{
                    width: 40%;
                    p{ 
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                        font-size: 16px;
                    }
                    .colorRed{
                        color: red;
                    }

                    @media(max-width: 415px){
                        width: 100%;
                    }
                }

                @media(max-width: 415px){
                    padding: 5px 2px;
                }
            }

            @media (max-width: 415px){
                width: 100%;

                &__length{
                    padding: 5px 2px;
                    font-size: 15px;
                }

                &__listProduct{
                    &-item{
                        padding: 5px 2px;
                    }
                }
            }

            @media (min-width: 416px) and (max-width: 1024px){
                width: 85%;

                &__length{
                    padding: 5px 2px;
                    font-size: 15px;
                }

                &__listProduct{
                    &-item{
                        padding: 5px 2px;
                    }
                }
            }
        }

        @media (max-width: 415px){
            padding: 0px 5px;
        }
    }
`

export const FormCartStyle = styled.div`
    width: 100%;
    .formUser{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-inputUser{
            width: 60%;
            display: flex;
            flex-wrap:wrap;
            justify-content: space-between;
            &__item{
                width: 49%;

                input{
                    height: 30px;
                    font-size: 16px;
                }
                &.email{
                    width:100%;
                }
            }
            @media(max-width: 415px){
                width: 100%;

                &__item{
                    width: 100%;
                }
            }
    
        }
        &-btnBuy{
            width: 38%;
            padding: 10px;
            button{
                width:100%;
                height: 100%;
                background-color: red;
                font-size: 17px;
                color: white;
                font-weight: 700;
            }

            @media(max-width: 415px){
                width: 100%;

               
            }
        }
    }
    
`