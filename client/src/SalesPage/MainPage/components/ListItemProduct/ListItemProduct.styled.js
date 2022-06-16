import styled from "styled-components";

export const ListItemP = styled.div`
    margin-top: 20px;
    border-radius: 6px;
    background-color:white;
    .itemP{
        padding: 15px;
        border-right: 1px solid rgba(0,0,0,.05);
        border-bottom: 1px solid rgba(0,0,0,.05);
        text-align:center;
        &-content{
            display:flex;
            justify-content: center;
            flex-wrap: wrap;
            p{
                width:100%;
                font-size: 14px;
                margin-bottom: 0px;
            }
        }  
        &:hover{
            border-color: rgba(0,0,0,.12);
            box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
        }
        
    }

    @media ( max-width: 1024px){
        .itemP{
            width: 25%;
            min-width: 25%;
            padding: 5px;

            &-content{
                p{
                    font-size: 10px;
                }
            }
        }
    }

    @media ( max-width: 415px){
        border-radius: 0px;
        
    }
`

export const ImgItem = styled.div`
    display:flex;
    background:${({ bgItem}) => bgItem ? bgItem : "none"};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 95px;
    img{
        width:60px;
        height:60px;
    }

    @media ( max-width: 1024px){
        width: 60px;
        height: 60px;

        img{
            width: 60%;
            height: 50%;
        }
    }

    
    
`