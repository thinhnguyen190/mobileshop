import styled from "styled-components";
export const NavStyle = styled.div`
    background-color: #252525;



    


    @media (max-width: 415px){
        position: absolute;
        left: ${({showNav}) => showNav ? 0 : "-100%"};
        top:0;


        width: 80%;
        min-height: 500px;
        padding-top: 5px;
        border-radius: 0px 0px 6px 0px;

        z-index: 100;

        transition: all 1s;
    }

    @media (min-width: 416px) and (max-width: 1024px){
        position: absolute;
        left: ${({showNav}) => showNav ? 0 : "-100%"};
        top:0;
        


        width: 80%;
        min-height: 900px;
        border-radius: 0px 0px 6px 0px;
        padding-top: 5px;

        z-index: 100;

        transition: all 1s;
    }

`
export const ListItem = styled.div`
    width: 100%;
    height:100%;
    margin:0px;
    display:flex;
    justify-content:space-between;
    padding:0px;
    overflow: hidden;

    Button{
        color:#fff;
        font-size:14px;
        &:hover{
            color: #ccc;
        }
    }
    a{
        text-decoration: none;
    }

    .headerMenu{
        display: none;
    }

    @media (max-width: 415px){
    
        flex-direction: column;
        align-items: start;

        .headerMenu{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            padding-bottom: 5px;
            border-bottom: 1px solid orange;


            img{
                width: 40px;
                height: 40px
            }

            svg{
                font-size: 35px;
                color: white;
                cursor: pointer;
            }

        }
    }

    @media (min-width: 416px) and (max-width: 1024px){
    
        flex-direction: column;
        align-items: start;

        .headerMenu{
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;
            padding-bottom: 5px;
            border-bottom: 1px solid orange;


            img{
                width: 40px;
                height: 40px
            }

            svg{
                font-size: 35px;
                color: white;
                cursor: pointer;
            }

        }
    }



    
`