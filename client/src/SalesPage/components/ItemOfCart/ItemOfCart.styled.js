import styled from "styled-components";

export const ItemOfCartStyle = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    @media(max-width:415px){
        justify-content: space-between;
    }
    .ioc-inforProduct{
        width: 50%;
        display:flex;
        img{
            width: 25%;
        }
        p{
            margin-top: 5px;
            margin-left: 5px;
        }

        @media (max-width: 415px){
            width: 40%;
            p{
                font-size: 14px;
            }
        }
    }
    .ioc-price{
        width: 25%;
        font-weight: 600;
        p{
            color: red;
            margin: 5px 0px;
            
        }
        span{
            color: #ccc;
            text-decoration: line-through;
        }

        @media (max-width: 415px){
            width: 30%;
            font-size: 14px;
        }
    }
    .ioc-btnHandle{
        width: 24%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        &__inputCount{
            height: 28px;
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            button{
                width: 25%;
                border: 1px solid #ccc;
                border-radius: 0px;
                height: 100%;
            }
            .number{
                width: 36%;
                border: 1px solid #ccc;
                height: 100%;
                text-align: center;
                line-height: 28px;
            }
        }
        &__btnRemove{
            button{
                font-size: 14px;

            }
        }

        @media( max-width: 415px){
            width: 20%;
        }
    }
    .ioc-price{
        text-align: right
    }
`