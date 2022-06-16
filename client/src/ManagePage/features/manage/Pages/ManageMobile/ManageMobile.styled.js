import styled from "styled-components";

export const ManageMobileStyle = styled.div`
    width: 100%;
`

export const MMSProductTable = styled.div`
    .outputFilter{
        width: 70%;
        display: flex;
        justify-content: space-between;
        &-infor{
            width: 60%;
        }
        
    }
    .interactiveTable{
        display: flex;
        width: 70%;
        justify-content: space-between;
        &-btnAdd{
            width: 20%;
            button{
                width: 100%;
                height: 40px;
                background-color: blue;
                color: white;
            }
        }
    }
    .mobileTable{
        width: 70%;
        table{
            width: 100%;
            th{
                min-width: 20%;
            }
            th,td{
                text-align: center;
            }
        }
    }
`

export const MMSProductFilter = styled.div`
    
`

export const NotifyDeleteProduct = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    bottom: 0%;
    right: 0%;
    background-color: rgb(239 239 239 / 91%);
    z-index: 100%;
    display: flex;
    justify-content: center;
    .notifyDel{
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
            .exit{
                background-color: green;
                
            }
            .delete{
                background-color: red;

            }
        }
    }
`

export const ManageTable = styled.table`
    width: 100%;
    th{
        min-width: 20%;
    }
    th,td{
        text-align: center;
    }
`