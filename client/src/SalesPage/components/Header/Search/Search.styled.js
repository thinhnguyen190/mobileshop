import styled from "styled-components"


export const PartSearch = styled.div`
    width: 100%;
    background-color: #CD1818;
    .MuiGrid-root{
        height:56px;
        .search-item{
            display:flex;
            align-items:center;
        }
    }
    img{
        width:50px;
        height:40px;
    }

    .menuIcon{
        display: none;
    }

    .search-item.mobile{
        display: none;
    }

    @media ( max-width: 415px){
        .menuIcon{
            display: block;
            color: white;
        }

        .searchStyle{

            height: fit-content;
            display: flex;
            justify-content: space-between;


        }

        .search-item.notMobile{
            display: none;
        }

        .search-item.mobile{
            display: block;
            width: 100%;
        }

    }

    @media (min-width: 416px) and (max-width: 1024px){
        .searchStyle{
            display: flex;
            justify-content: space-between;
        }    

        .menuIcon{
            display: block;
            color: white;
        }

        .search-item.notMobile{
            width: 60%;
        }
    }

`
export const Cart = styled.div`
    .btnCart{
        position: relative;
        &-count{
            display: ${({product}) => product > 0 ? "block" : "none" };
            position: absolute;
            font-size: 14px;
            background: orange;
            font-weight: 700;
            color: white;
            top: 12%;
            right: 15%;
            width: 30%;
            height:30%;
            border-radius: 50%;
        }
    }


`


export const SearchInput = styled.div`
    width:500px;
    display: flex;
    height: 38px;
    position: relative;

    input{
        width:100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        border: 0px;
        padding-left: 20px;
        border-radius: 2px;
        &:focus{
            outline: none;
        }
        font-size:16px;

    }
    button{
        position:absolute;
        height:100%;
        right: 0%;
        width:60px;
        padding:0px;
        border:0px;
    }
    .MuiIconButton-root{
        &:hover{
            background-color: rgba(0, 0, 0, 0);
        }
    }

    @media (max-width: 1024px ){
        width: 100%;
    }

`