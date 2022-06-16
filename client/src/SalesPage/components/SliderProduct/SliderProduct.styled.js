import styled from "styled-components";

export const SliderP = styled.div`
    background-color: white;
    border-radius:6px;
    position: relative;
    width: 100%;
    height: 100%;

    @media( max-width: 415px){
        border-radius: 0px;
    }
`

export const AdverIMGList = styled.div`
    display: flex;
    flex-wrap: none-wrap;
    overflow: hidden;
    height: 100%;
    border-radius: 6px;

    @media( max-width: 415px){
        border-radius: 0px;
    }
    img{
        min-width: 100%;
        &.active{
            margin-left: -100%;
        }
        transition: all 1s;
    }
`

export const Dots = styled.div`
   height: 3px;
   ul{
       margin: 0px;
       height: 100%;
       display: flex;
       padding: 0px;
       justify-content: center;
   }
`

export const Dot = styled.li`
    position: relative;
    display: inline-block;
    height: 100%;
    width: 40px;
    margin: 0px 5px;
    button{
        position: absolute;
        left: 0%;
        padding: 0px;
        height: 100%;
        width: 100%;
        background: #ccc;
        border: none;
        cursor: pointer;
        border-radius: 4px;

    }
    &.active{
        button{
            background: red;
        }
    }
`