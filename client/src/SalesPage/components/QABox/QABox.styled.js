import styled from "styled-components";

export const QABoxStyle = styled.div`
    padding: 15px;
    background-color: white;
    border-radius: 6px;
    margin-top: 25px;
    width: 100%;
    .QABox-title{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        &__inputInforUser{
            input{
                margin: 0px 5px;
                border-radius: 4px;
                padding-left: 5px;
                min-height: 25px;
                outline: none;
                border: 1px solid #ffd7d7;


            }

            @media (min-width:415px) and ( max-width: 1024px){
                display: grid;

                input:nth-child(1){
                    margin-bottom: 5px;
                }
            }
        }

        
    }

    @media(max-width: 415px){
        span{
            font-size: 14px;
        }
    }

`



export const QABoxListComment = styled.div`
    .comment{
        margin-bottom: 8px;
        overflow: hidden;
        &-parents{


            @media (max-width:415px){
                display: flex;

                &__right{
                    max-width: 70%;
                }
            }

            @media (min-width:416px) and (max-width: 1024px){
                display: flex;

                &__right{
                    max-width: 82%;
                }
            }
        }
        &-children{
            margin: 15px 0px;
            width: 90%;
            margin-left: 10%;
            padding-left: 5px;
            border: 1px;
            border-left: 4px solid #ccc;
            &.comment{
                border-left: 1px;
                padding-left: 0px;
            }

            @media (max-width: 415px){
                margin-top: 5px;
                margin-bottom: 5px;
            }


            
        }
        &__avatar{
            height: 80px;
            width: 80px;
            border-radius: 4px;

            color: white;
            background: #ccc;

            text-align: center;
            line-height: 80px;
            font-weight: 700;

            @media (max-width: 415px){
                width: 60px;
                height: 60px;
                line-height: 60px;
                margin-right: 10px;
            
            }

            @media (min-width: 415px) and ( max-width: 1024px){
                margin-right: 10px;
            
            }
            
        }
        &__userName{
            font-size: 16px;
            font-weight: 700;
            display: flex;
            flex-wrap: no-wrap;
            padding-top: 2px;
            padding-bottom: 10px;
        }
        &__createTime{
            padding-left: 8px;
            font-size: 14px;
            color: #ccc;
            font-weight: 500;
        }
        &__infor{
            word-break: break-word;
            font-size: 15px;

            @media (max-width: 415px){
                font-size: 13px;
            }
        }
        &__rep{
            padding: 0px;
            border: 0px;
            background: white;
            border-radius: 1px;
            color: blue;
            margin-top: 10px;
            cursor: pointer;
            &:hover{
                color: #000;
            }
            
            
        }
    }
`