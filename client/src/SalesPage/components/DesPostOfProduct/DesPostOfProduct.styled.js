import styled, { css } from "styled-components"

export const DesPostOfProductStyle = styled.div`
        position: relative;
        margin-top: 20px;
        ${({showAll}) => !showAll && css`
            height: 200px;
        `}
        overflow: hidden;
        img{
            width: 100%;
        }
        p{
            font-size: 16px;
        }
        h3{
            width: 100%;
            text-align: center;
        }
        .DesPost-btnShowAll{
            position: absolute;
            width: 100%;
            bottom: 0%;
            display: flex;
            justify-content: center;
            z-index:9;
            background: #f1efef;

            button{
                background-color: #ccc;
                border-radius: 4px;
                border: 1px solid #ccc;
                padding: 2px 4px;
                cursor: pointer;
                opacity: 1;
                z-index: 11;
                &:hover{
                    background-color: red;
                }
            }
                
        }
`