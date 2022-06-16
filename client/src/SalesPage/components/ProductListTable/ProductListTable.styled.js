import styled, { css } from "styled-components";
import { SkeletonLoadingKeyFrames } from "../../../constans/Global.styled";

export const PLT = styled.div`
    margin: 20px 0px;
    background-color: white;
    border-radius: 6px;
    @media ( max-width: 415px){
        border-radius: 0px;
    }
    ${({loading}) => loading && css`

            padding: 15px 15px;
        
        `}
`

export const PLTPriority = styled.div`
    display: flex;
    padding: 15px;
    overflow: hidden;
    span{
        font-size: 14px;
        line-height: 28px;
    }
    align-items: center;

    position: relative;
    ${({loading}) => loading && css`

            &:before {
                content:"";
                background-color: #dddddd;
                position: absolute;
                top:0;
                left:0;
                right:0;
                width: 100%;
                height: 100%;
                z-index: 15;
                border-radius: 4px;
                
            }
            &:after {
                content:"";
                background: linear-gradient(to right, #dddddd, #ffffff 50%, #dddddd);
                position: absolute;
                top:0;
                left:0;
                right:0;
                width: 100%;
                height: 100%;
                z-index: 15;
                border-radius: 4px;
                animation: ${SkeletonLoadingKeyFrames} 2s infinite alternate;
            }
        
    `}
    .firstSpan{

    }
    @media ( max-width: 415px){
        .firstSpan{
            display: none;
        }
    }
    
    
`

export const PLTProductList = styled.div`
        // skeleton-start
        ${({loading}) => loading && css`

            position: relative;
            overflow: hidden;
            &:before {
                content:"";
                background-color: #dddddd;
                position: absolute;
                top:0;
                left:0;
                right:0;
                width: 100%;
                height: 100%;
                z-index: 15;
                border-radius: 4px;
                background-clip: ${({width}) => width === 4 ? "content-box" : "padding-box"};
                border-radius: 4px;
                
            }

            &:after {
                content:"";
                background: linear-gradient(to right, #dddddd, #ffffff 50%, #dddddd);
                position: absolute;
                top:0;
                left:0;
                right:0;
                width: 100%;
                height: 100%;
                z-index: 15;
                border-radius: 4px;
                background-clip: ${({width}) => width === 4 ? "content-box" : "padding-box"};
                border-radius: 4px;
                animation: ${SkeletonLoadingKeyFrames} 2s infinite alternate;
                
            }
        
        `}
        
    
        // skeleton-end
    .productItem{
        transition: max-width 0.3s;

        
    }
    margin-top: 10px;
    padding: ${({width}) => width === 12 ? "0px 15px" : "0px"};
`

export const PLTPriorityDiff = styled.div`
    @media ( max-width: 1024px){
        display: none;
    }

    
`
export const PLTPriorityChoose = styled.div`
    margin-left: 25px;
    width: 76%;
    button{
        font-size: 14px;
        color: #ccc;
        text-transform: none;
        background: #fff;
        outline: none;
        border: 1px solid #ccc;
        border-right: 0px;
        padding: 5px;
        cursor: pointer;
        &:hover{
            background: #ccc;
            color: white;
        
        }
        &.active{
            background: red;
        }
        &.borderRadiusL{
            border-radius: 6px 0px 0px 6px;
        }
        &.borderRadiusR{
            border-radius: 0px 6px 6px 0px;
            border-right: 1px solid #ccc;
            background-color: #d13131;
            color: white;
        }
    }

    @media (max-width: 415px){
        display: flex;
    }

    

`
