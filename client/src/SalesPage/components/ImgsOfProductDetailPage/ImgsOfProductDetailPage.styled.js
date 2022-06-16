import styled from "styled-components";

export const ImgsOfProductDetailStyle = styled.div`
    background-color: #000;
    position: fixed;
    width: 100%;
    height:100%;
    z-index: 100;
    top: 0; 
    left: 0;

    .iopd-nav{
        z-index: 10;
        display: flex;
        position: fixed;
        width: 100%;
        top: 2%;
        justify-content: space-between;
        &__countImg{
            background-color: rgba(255,255,255,.15);
            padding: 10px 8px;
            text-align: center;
            color: #fff;
            font-weight: 600;
            margin-left: 15px;
            font-size: 15px;
            border-radius: 4px;
        }
        &__buttonhandle{
            margin-right: 15px;
        }
    }

    .iopd-content{
        height:100%;
        display: flex;
        position: relative;
        justify-content: center;
        flex-wrap: wrap;

        
        h3{
            width: 100%;
            text-align: center;
            padding-top: 15px;
            color: white;
        }
        &__imgSelected{
            max-height: 75%;
            width: 55%;
            display: flex;
            flex-wrap: none-wrap;
            overflow: hidden;
            height: 100%;
            border-radius: 6px;

            img{
                min-width: 100%;
                height:100%;
                &.active{
                    margin-left: -100%;
                }
                transition: all 0.3s;
            }
        }
        &__listImgs{
            
            display: flex;
            justify-content: ${({ imgsLength }) => imgsLength > 10 ? "start" : "center"};
            over-flow: hidden;

            width: 100%;
            max-height:15%;
            margin: 0px;
            height: 100%;
            padding: 5px 0px;

            background-color: #0e0a0a;

            &-item{
                max-width: 9%;
                min-width: 9%;

                padding: 2px;
                border-radius: 2px;
                margin: 0px 3px;

                background-color: #ccc;
                
                transition: all 0.5s;
                img{
                    width: 100%;
                    height: 100%;
                }
                opacity: 0.4;
                &:hover{
                    opacity: 1;
                }
                &.active{
                    opacity: 1;
                }
                &.hide{
                    margin-left: ${({imgsLength}) => imgsLength > 10 ? "calc(-9% - 3px)" : "3px"};
                }
            }
        }
        &__btn{
            position: absolute;
            width: 100%;
            top: 45%;
            display: flex;
            justify-content: space-between;
            button{
                color: #ccc;
            }
        }
        @media (max-width: 415px){
            padding-top: 12%;

            h3{
                font-size: 14px;
            }

            &__imgSelected{
                max-height:55%;
                width: 85%;
            }

            &__listImgs{
                max-height: 20%;
                &-item{
                    max-width: 33%;
                    min-width: 33%;
                }
            }
        }
    }
`

export const IOPDSbtnHandle = styled.div`
    display: flex;
    .btn{
        color: #ccc;
        cursor: pointer;
        &:hover{
            color: #fff;
        }
        &.upside{
            transform: rotate(90deg);
        }
        &.btnRun{
            display: ${({ statusSlider }) => statusSlider === "stop" ? "block" : "none"};

        }
        &.btnPause{
            display: ${({ statusSlider }) => statusSlider === "run" ? "block" : "none"};
        }

    }
`