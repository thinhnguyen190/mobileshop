import styled from "styled-components";

export const AvatarOfManagerStyle = styled.div`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: right;

    width: 100%;
    height: 100%;
    padding-right: 15px;

    background-color: #d68e8e;
    color: white;

    img{
        width: 15%;
        height: 90%;
        margin-left: 5px;
    }

    .dropContact{
        position: absolute;
        z-index:10;

        display: flex;
        justify-content: center;

        width: 35%;
        bottom: -30px;
        padding: 5px;
        border-radius: 4px;

        background-color: blue;

        button{

            width: 95%;
            height: 30px;

            font-weight: 700;
            color: white;

            background-color: #677aff;
        }
    }
`