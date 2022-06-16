import styled, { css } from "styled-components";

export const SOM= styled.div`
    background-color:${({mode}) => mode === "modeText" ? "#f8f9fa" : "white"};
    padding: 15px;
    border-radius: 6px;
    ul{
        padding: 0px;
        margin: 0px;
    }
    li{
        list-style: none;
        font-size: 16px;
        display: flex;
        align-items: center;
        margin: 5px 0px;
        
        
    }
    .iconSOM{
        width: 17px;
        color: #ccc;
        height: 22px;
        padding-bottom: 3px;
        margin-right: 5px;
    }
    p{
        margin: 0px;
        font-size: 14px;
        color: blue;
    }
    .modeTable{
        h4{
            margin: 0px 0px 10px 0px;
        }
        p{
            margin: 10px 0px;
        }
        table{
            font-size: 14px;
            border-collapse: collapse;
            border: 1px solid #ccc;
            .bgGreen{
                background-color: #f8f9fa;
            }
            td{
                border: 1px solid #f8f9fa;
                padding: 5px;
                
    
            }
        }
    }
    

    @media( max-width: 415px){
        ${({mode}) => mode === "modeText" && css`
            display: none;

        `}
    }
`