import styled from "styled-components";

export const SliderOPHStyle = styled.div`
    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
    border-right: 4px solid #fff;


    @media (max-width: 415px){
        border-right: 0px;
    }


`
export const SliderImg = styled.div`
    width: 100%;
    height:85%;
    border-radius: 10px;

    @media (max-width: 415px){
        height: 98%;
    }

`
export const Img = styled.div`

    position: relative;

    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        min-width: 100%;
        height: 100%;

        transition: margin 1.5s;
        &.active{
            margin-left: -100%;
        }

    }

`
export const ButtonCtrSlider = styled.div`
    display: flex;
    justify-content:space-between;
    position: absolute;
    left:0%:;
    width:100%;
    top: 45%;
    z-index: 10;
`

export const SliderNav = styled.div`

    display: flex;

    width:100%;
    height: 15%;
    overflow:hidden;   

    .sliderNav-item{
        width: 25%;
        height: 100%;
        min-width: 25%;




        button{
            width: 100%;
            height: 100%;
            min-width: 25%;
            min-height: 100%;
            border-radius:0px;
            border-bottom:2px solid white;
            
            height:61px;
            background-color: white;
            
            &:hover{
                border-bottom:2px solid black;
                font-weight:700;
    
            }

            &.active{
                border-bottom:2px solid black;
                font-weight:700;
            }

            transition: all 1s;

            
            
    
    
    
        }
        

        &.hide{
            margin-left:-25%;
        }

        transition: all 2s;



        


    }

    @media ( max-width: 415px){
        height: 2%;
        .sliderNav-item{

            height: 100%;
            max-height:100%;
            overflow: hidden;
            border: 1px solid red;
    
            background-color: #4160e7;
            color: #4160e7;

            button{
                opacity: 0;
            }


            &.active{
                background-color: white;
            }

            
        }

        


    }

    
`