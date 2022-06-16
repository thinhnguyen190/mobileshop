import styled from "styled-components";

export const InputFieldStyless = styled.div`
    width: 30%;
    h4{
        margin: 0;
    }
    margin: 30px;
    
`

export const FormAddMobile = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 15px;
    .title{
        display: flex;
        justify-content: center;
    }
    .product-avatar{
        width: 25%;
        border: 1px solid #fff;
        padding: 15px;
        border-radius: 5px;
        background-color: white;
        h4{
            margin: 0px;
            text-align: center;
        }
        input{
            margin: 5px 0px;
        }
        .imgPreview{
            width: 100%;
            height: 300px;
            img{
                width: 100%;
                height:300px;
            }
        }
    }

    .product-basicInfor{
        width: 30%;
        border: 1px solid #fff;
        padding: 15px;
        border-radius: 5px;
        background-color: white;

        &__item{
            margin-bottom: 18px;
            font-size: 15px;
            width: 100%;
        }
    }
    .product-specifications{
        width: 45%;
        height: 400px;
        border: 1px solid #fff;
        padding: 15px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
        h3{
            width: 100%;
        }
        &__item{
            margin-bottom: 10px;
            font-size: 15px;
            width: 45%;
        }
    }
    .product-imgs{
        width: 30%;
        border: 1px solid #fff;
        padding: 15px;
        border-radius: 5px;
        background-color: white;

        &__imgs,&__imgsUnbox{
            margin: 20px 0px;
        }
    }

    .product-report{
        width: 54%;
        border: 1px solid #fff;
        padding: 15px;
        border-radius: 5px;
        background-color: white;
        margin-top: 30px;
        .ck-content{
            min-height: 420px;
        }


    }
    .product-btnAdd{
        width: 100%;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        button{
            background-color: blue;
            color: white;
        }

    }
`

export const AddEditMobileTitle = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        background-color: blue;
        color: white;
        &:hover{
            background-color: green;
        }
    }
`