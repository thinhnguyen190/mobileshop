import styled from "styled-components";



export const UpdateOrderStyle = styled.div`

    width: 100%;

    
    .updateOrder-title{
        width: 100%;
        text-align: center;
    }

    .updateOrder-infor{
        &__item{

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;

            margin: 5px 0px;
            font-size: 14px;

            p{
                display: flex;
                align-items: center;

                svg{
                    padding-bottom: 4px;
                }
            }

            &-label{
                width: 50%;
                &.fullwidth{
                    width: 100%;
                }
            }

            &-content{
                width: 100%;

                .orderItem{

                    padding: 2px 5px;
                    border: 1px solid #ccc;
                    border-radius: 3px;

                    p{
                        margin: 4px 0px;
                    }

                }

                .totalBillOfOrder{
                    text-align: right;
                    margin: 5px;
                }
            }
        }
    }
`