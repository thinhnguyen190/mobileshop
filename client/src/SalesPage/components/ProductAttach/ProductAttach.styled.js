import styled from "styled-components";

export const ProductAttachPA = styled.div`
    padding-top: 10px;
    margin-top: 10px;
    .listProductAttach{
        margin-top: 8px;
    }
    span{
        font-size: 16px;
    }
    .PAitem{
        display: flex;
        justify-content: space-between; 
        align-items: center;
        margin-bottom: 15px;
    }
    .PAitem-left{
        display: flex;
        &-img{
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 3px;
        }
        &__infor{
            margin-left: 5px;
            h5{
                margin: 7px 0px;
                font-weight: 200;
            }
            p{
                margin: 0px;
                color: red;
                font-size: 14px;
                span{
                    text-decoration: line-through;
                    color: #ccc;
                }
            }
        }
    }
    .PAitem-right{
        width: 25%;
        .btnAddProduct{
            span{
                font-size: 12px;
                color: #000;

            }
            background-color: #ccc;
            text-transform: none;
        }
    }
`