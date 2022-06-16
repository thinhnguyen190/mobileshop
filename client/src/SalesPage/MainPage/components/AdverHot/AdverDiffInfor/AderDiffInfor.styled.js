import styled from "styled-components"

export const DiffInfor = styled.div`
   height:100%;
   width:100%;
   .boxDiff{
        height:100%;
        background: white;
        &-top{
            height: 60%;
            padding-bottom: 5px;
            
            img{
                width:100%;
                height:50%;
                }
            }
        &-bottom{
            height:38%;
            &__content{
                display:flex;
                height:6%;
                justify-content: space-between;
                h5{
                    margin: 0px 5px;
                }
            }
            &__main{
                height:94%;
                display: flex;
                justify-content: space-between;
                flex-wrap:wrap;
                
                &-item{
                    width:100%;
                    height: 50%;
                    display:flex;
                    align-items: center;
                    img{
                        height:60px;
                        width:90px;
                        border-radius: 4px;
                        padding:1px;
                        border:1px solid #ccc;
                    }
                    p{
                        margin-left: 15px;
                        font-size: 16px;
                    }
                }
            }
        }   
        
   }
        
       
    
`
