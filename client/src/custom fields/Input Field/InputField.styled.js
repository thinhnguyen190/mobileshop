import styled from "styled-components";

export const InputFieldStyle = styled.div`
    margin: 10px 0px;
    .input-ip{
        width: 100%;
        weight: 100%;
        border: 1px solid hsl(0, 0%, 80%);
        box-sizing: border-box;
        border-radius: 4px;
        padding-left: 18px;
        font-size: 20px;
        &:hover{
            border-color:hsl(0, 0%, 80%);
        }
        &:focus{
            outline: 2px solid #2468ff;
           
        }
    }
    .errorMessage{
        width: 100%;
        font-size: 14px;
        padding: 2px;
        text-align: center;
        color: red;
    }
`