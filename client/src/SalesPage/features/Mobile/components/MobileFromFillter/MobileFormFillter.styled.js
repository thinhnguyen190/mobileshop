import styled from "styled-components";


export const MobileFormFillterStyle = styled.div`
    width: 100%;

    .btnFillter{
        display: none;

    }

    @media( max-width: 415px){
        .btnFillter{
            display: block;
            position: relative;

            &-icon{
                color: white;
            }


            &-ruler{
                position: absolute;
                bottom: 26%;

                width: 100%;

                height: 2px;
                background-color: white;
            }
        }

    
    }
    
`
export const FormFillter = styled.div`
    width: 100%;

    @media( max-width: 415px){
        display: ${({show}) => show === "show" ? "flex" : "none"};

        height: ${({show}) => show === "show" ? "fit-content" : "0px"};

        transition: all 1s;

        flex-wrap: wrap;
        justify-content: space-between;

        padding: 0px 15px;
    }

    @media ( min-width: 416px) and ( max-width: 1024px){
        display: flex;
        justify-content: space-between;
    }
`

export const FormFillterItem = styled.div`
    color: white;

    @media (max-width: 415px){
        max-width: 48%;
    }


`