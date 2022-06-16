import styled, { css } from "styled-components";

export const Item = styled.div`   
    position: relative;
    
  

    border-radius: 6px;
    display: flex;
    flex-direction: ${({ width }) => width === 4 ? "column" : "row"};
    align-items: ${({ width }) => width === 4 ? "center" : "start"};
    padding: 15px 15px 0px 15px;
    padding-bottom:  ${({ width }) => width === 4 ? "0px" : "15px"};
    
    ${({ width }) => width === 12 && css`

            border: 1px solid #fff;
        
        `}
    border-radius: 6px;
    ${({ width }) => width === 4 && css`

            &:hover:before {
                content:"";
                background: #fff;
                position: absolute;
                height: ${({ mode }) => mode === "slider" ? "100%" : "calc(100% + 46px)"};
                top:0;
                left:0;
                right:0;
                border: 1px solid #dee2e6;
                border-radius: 6px;

                
            }
        
        `}
    
    &:hover{
        ${({ width }) => width === 12 && css`

        border: 1px solid #efe3e3;

        
        `}
        & .itemHot-difBtn{
            opacity: 1;
            visibility: visible;
        }
        z-index: 5;
    }
    .itemHot-img{
        
        width: 220px;
        height: 220px;

        ${({ width }) => width === 12 && css`

            width: 25%;
        
        `}
        position: relative;
        &__installment{
            position: absolute;
            left:-2%;
            bottom:14%;
            font-size:13px;
            background: #ea9d02;
            line-height: 24px;
            padding: 0 8px;
            border-radius: 6px;
        }
        &__sale{
            position: absolute;
            left:-2%;
            bottom: 1%;
            font-size:13px;
            background:#cb1c22;
            line-height: 24px;
            padding: 0 8px;
            border-radius: 6px;

        }
        &__img{
            height:214px;
            width:214px;
            transition: all 0.3s;

            img{
                height:100%;
                width: 100%;
                transition: all 0.3s;
    
            }
            &:hover>img{
                height: 220px;
                width: 220px;
            }
        }

        @media ( max-width: 415px){
            ${({ mode }) => mode !== "slide" && css`

                width: 100%;
                height: 150px;
                &__img{
                    height:100%;;
                    width:100%;

        
                    img{
                        height:100%;
                        width: 100%;
            
                    }
                    &:hover>img{
                        height: 108%;
                        width: 110%;
                    }
                }
        
            `}
            
        }

        @media ( min-width: 416px) and ( max-width: 1023px){
            ${({ mode }) => mode === "slider" && css`
            
                width: 100%;
                height: 150px;
                &__img{
                    height:100%;;
                    width:100%;

        
                    img{
                        height:100%;
                        width: 100%;
            
                    }
                    &:hover>img{
                        height: 108%;
                        width: 110%;
                    }
                }
    
            `}
        }
        
    }
    .itemHot-mainInfor{
        width: ${({ width }) => width === 4 ? "100%" : "75%"};
        z-index:5;
        ${({ width }) => width === 12 && css`
            display: flex;
            
        
        `}
        
        &__price{
            display:flex;
            height: 100%;
            flex-wrap: wrap;
            justify-content: space-between;
            ${({ width }) => width === 12 && css`
                    flex-direction: column;
                    
                
                `}
            &>p{
                width: 100%;
                margin: 10px 0px;
                font-size:17px;
                font-weight:700;
                
                a{
                    text-decoration: none;
                    color: inherit;
                    &:hover{
                        color:blue;
                    }
                }
            }
            &-price{
                position: relative;
                color:white;
                text-align: center;
                line-height: 26px;
                font-size:20px;
                font-weight: 600;
                width: 45%;
                background-color: #ef8573;
                border-radius: 15px;
                ${({ width }) => width === 12 && css`
                    height: 30px;
                    
                    
                
                `}
                p{
                    margin:0px;
                    color: white;
                    z-index:3;
                    position: absolute;
                    top:5%;
                    left:2%;
                }
            }
            &-salePrice{
                text-align: right;
                span{
                    text-decoration-line: line-through;
                    font-size: 14px;

                }
                ${({ width }) => width === 12 && css`
                    text-align: left;
                    margin-top: 8px;
                    display: flex;
                    div{
                        margin-left: 5px;
                    }
                    
                
                `}
                color: #ccc;
                font-size: 12px;
                p{
                    padding: 0px;
                    margin:0px;
                }
            }

            @media (max-width: 415px){

                ${({ mode }) => mode !== "slide" && css`
                    &>p{
                        width: 100%;
                    }

                    &-price{
                        width: 100%;
                        height: 25px;

                        font-size: 18px;
                    }

                    &-salePrice{
                        width: 100%;

                        text-align: left;

                        margin-top: 8px;
                    }
                `}
                
            }
            @media ( min-width: 416px ) and ( max-width: 1024px){
                ${({ mode }) => mode === "slider" && css`
                    &>p{
                        width: 100%;
                    }

                    &-price{
                        width: 100%;
                        height: 25px;

                        font-size: 18px;
                    }

                    &-salePrice{
                        width: 100%;

                        text-align: left;

                        margin-top: 8px;
                    }
                `}
            }
        }
        &__payments{
            padding: 20px 0px;
            ${({ width }) => width === 12 && css`
                    width: 50%;
                    padding: 0px 0px 0px 10px;
                    
                
                `}

            
            .payments-items{
                
                position: relative;

                display: flex;
                flex-wrap: wrap;
                width: 100%;
                border-radius: 6px;
                padding: 10px;

                background-color: ${({ width }) => width === 4 ? "#ccc" : "#f9f9f9"};
                
                &__item{
                    
                    padding-bottom: 40px;
                    margin-right: 15px;

                    @media ( max-width: 415px){
                        ${({ mode }) => mode !== "slide" && css`
                            margin-right: 5px;
                            padding-bottom: 5px;
                        `}
                    }

                    @media ( min-width: 416px) and ( max-width: 1024px){
                        ${({ mode }) => mode === "slider" && css`
                            margin-right: 5px;
                            padding-bottom: 5px;
                        `}
                    }

                    cursor: pointer;

                    img{
                        border-radius: 50%;
                    }

                    &-inforsale{
                        position: absolute;
                        bottom: -9%;
                        left: 3%;

                        margin-bottom: 15px;
                        display:none;

                        font-size: 16px;
                        
                        &.active{
                            display: block;
                        }

                        @media ( max-width: 415px){
                            ${({ mode }) => mode !== "slide" && css`
                                bottom: -5%;
                            `}
                        }
                        @media ( min-width: 416px) and ( max-width: 1024px){
                            ${({ mode }) => mode === "slider" && css`
                                bottom: -5%;
                            `}
                        }
                    }
                    ${({ width }) => width === 12 && css`

                        width: 100%;
                        display: flex;
                        align-items: center;
                        padding: 0px;
                        margin: 0px;
                        padding: 5px 0px;

                        &-inforsale{
                            position: static;
                            padding-left: 5px;
                            font-size: 15px;
                            margin: 0px;
                            display: block;
                        }
                    
                    
                    `}


                }
                @media (max-width: 415px){
                    ${({ mode }) => mode !== "slide" && css`
                        height: 180px;
                        display: flex;
                        flex-wrap: none-wrap;
                        align-content: start;
                    
                
                    `}
                }

                @media ( min-width: 416px) and ( max-width: 1024px){
                    ${({ mode }) => mode === "slider" && css`
                        height: 180px;
                        display: flex;
                        flex-wrap: none-wrap;
                        align-content: start;
                    `}
                }

                
            }

            
        }
    }
    .itemHot-difBtn{

        width: 95%;
        display: flex;
        justify-content: ${({ width }) => width === 4 ? "space-around" : "start"};

        position: absolute;
        bottom: ${({ width }) => width === 4 ? "-8%" : "9%"};
        opacity: ${({ width }) => width === 4 ? "0" : "1"};

        .btn-buy{
            width: ${({ width }) => width === 4 ? "55%" : "15%"};
            margin-left: ${({ width }) => width === 12 ? "25%" : "0"};
            z-index: 10;
            button{

                width: 100%;
                padding: 8px;
                border: none;
                border-radius: 6px;

                font-size: 16px;
                font-weight: 700;
                outline:0;
                

                color: white;
                background:#cb1c22;
                
                cursor: pointer;
                &:hover{
                    background: red;
                }

            }
        }
        .btn-compare{
            width: ${({ width }) => width === 4 ? "35%" : "15%"};
            margin-left: ${({ width }) => width === 12 ? "5%" : "0"};
            z-index: 10;

            button{

                width: 100%;
                padding: 8px;
                border:none;
                border-radius: 6px;
                

                font-size: 16px;
                font-weight: 700;

                color: white;
                background:#99a2aa;
                outline:0;

                
                cursor: pointer;

                &:hover{
                    background:#2e3943;
                }

            }
        }
    }
`