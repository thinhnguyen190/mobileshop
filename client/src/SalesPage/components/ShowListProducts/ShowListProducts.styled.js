import styled from "styled-components";

export const LProducts = styled.div`
    background-color:white;
    border-radius: 6px;
    padding-bottom: 10px;
    .listProduct__title{
        span{
            display:flex;
            padding: 15px 0px 15px 5px;
            h4{
                margin: 0px 0px 0px 10px;
                font-size: 22px;
                color: red;
            }

        }
        .MuiSvgIcon-root{
            color: red;
        }
        
    }
`
export const LItemProducts = styled.div`
    .tNext, .mNext{
        display: none;
    }

    @media ( max-width: 1024px){
        .lNext{
            display: none;
        }
        .tNext{
            display: block;
        }
    }

    @medid ( max-width: 415px){
        .lNext{
            display: none;
        }
        .mNext{
            display: block;
        }
    }
`

export const ModeSlider = styled.div`
    .modeSlider{
        display: flex;
        overflow: hidden;
        flex-wrap:nowrap;
        padding-bottom: 5px;
        .item{
           min-width: 25%;
           &.active{
                margin-left: -25%;
           }

           transition: all 0.2s;

           @media ( max-width: 1024px){
               min-width: 33,33%;
               &.active{
                   margin-left: 0%;
               }

               &.tactive{
                    margin-left: -33,33%;
                }
           }

           @media ( max-width: 415px){
               min-width: 50%;
               &.active{
                   margin-left: 0%;
               }
               &.mactive{
                margin-left: -50%;
            }
           }


        }
        position: relative;
        
    }
`

export const btnCtrSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    

    @media ( max-width: 1024px)

`
export const ModeGrid = styled.div`

`