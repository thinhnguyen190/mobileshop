import styled from "styled-components";

export const BuyProductBP = styled.div`
    .price-product{
        display: flex;
        justify-content: space-between;
        &__price{
            font-size: 28px;
            color: red;
            font-weight:700;

            span{
                width: 100%;
                margin: 5px;

                color: #ccc;
                font-size: 18px;
                text-decoration: line-through;
            }

            @media (max-width: 415px){
                display: flex;
                flex-wrap: wrap;
                font-size: 20px;

                span{
                    margin: 0px;
                    font-size: 16px;

                }
            }

            @media (min-width: 416px) and (max-width: 1024px){
                display: flex;
                flex-wrap: wrap;
                font-size: 20px;

                span{
                    margin: 0px;
                    font-size: 16px;

                }
            }
        }
        &__installments{
            text-align: end;
            width: 20%;
            font-size: 14px;

            @media (max-width: 415px){
                width: 40%;
                padding-bottom: 7px;
            }

            @media (min-width: 416px) and (max-width: 1024px){
                width: 45%;
            }
        }

        
    }

`