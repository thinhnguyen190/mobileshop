import styled, { css } from "styled-components";
import { SkeletonLoadingKeyFrames } from "../../../constans/Global.styled";
export const SAF = styled.div`
    background: white;
    border-radius: 6px;
    margin-top: 20px;

    @media (max-width: 415px){
        border-radius: 0px;
    }
`

export const SafTitle = styled.div`
    padding: 15px;
    h2{
        margin: 0px;
        position: relative;

        //skeleton

        overflow:hidden;
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
                    border-radius: 4px;
                    animation: ${SkeletonLoadingKeyFrames} 2s infinite alternate;
                    
                }
        
        `}

        

        //skeleton

    }

    @media ( max-width: 415px){
        padding: 10px;

        h2{
            font-size: 18px;
        }
    }
    
`

export const SafSliderBrand = styled.div`
    height: 80px;
    padding: 17px 15px;
    border-radius: 0px 0px 6px 6px;
    border-top: 1px solid #ccc;
    position: relative;
    .listBrand{
        display: flex;
        flex-wrap: none-wrap;
        height: 100%;
        overflow: hidden;
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
        
        
    }
    .btnPre{
        position: absolute;
        left: 0px;
        top: 25%;
    }
    .btnNext{
        position: absolute;
        right: 0%;
        top: 25%;
    }

    @media ( max-width: 415px){
        height: 60px;
        padding: 12px 10px;
    }
`

export const SafTagFillter = styled.div`
     padding: ${({loading}) => loading ? "15px" : "0px"};
     
     .listTag{
        display: flex;
        flex-wrap: wrap;
        padding: 15px;
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
     }
     
`

export const Brand = styled.div`
    max-width: 20%;
    min-width: 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img{
        height: 40px;
        width: 108px;
        &:hover{
            width: 90%;
            height: 100%;
        }
        transition: all 0.3s;
    }
    
    &.active{
            margin-left: -17%;
        
    }
    transition: all 0.3s;


    @media ( max-width: 415px){

        max-width: 25%;
        min-width: 22%;
        img{
            height: 80%;
            width: 90%;
        }
    }
    
`
export const Tag = styled.span`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 1px 7px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #8392a5;
    margin: 0px 5px 5px 5px;
    color: #8392a5;
    cursor: pointer;
    svg{
        color: #8392a5;
        font-size: 15px;
    }

`



// @keyframes skeletonLoading {
//     from {
//       left: -50%;
//     } to {
//       left: 50%;
//     }
//   }