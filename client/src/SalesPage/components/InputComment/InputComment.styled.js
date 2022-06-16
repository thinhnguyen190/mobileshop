import styled from "styled-components"

export const InputCommentStyle = styled.div`
    width: 100%;
    position: relative;
    margin: 5px 0px;
    .QABoxInputComment-input{
        width: 100%;
        min-height: 80px;
        padding-top: 5px;
        padding-left: 8px;
        padding-bottom: 5px;
        padding-right: 13%;
        border-radius: 6px;
        outline: none;
        border: 1px solid #ffd7d7;

    }
    .QABoxInputComment-button{
        position: absolute;
        right: 2%;
        top: 26%;
        background: orange;
        color: white;
        font-size: 12px;
        font-weight: 600;
        &:hover{
            background: red;
        }

        @media (max-width:415px){
            top: 58%;
            right:0%;

            span{
                font-size: 10px;
            }
        }
    }
    p{
        text-align: center;
        font-size: 13px;
    }
`