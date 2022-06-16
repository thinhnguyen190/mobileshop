import styled from "styled-components";

export const OverViewPageStyle = styled.div`


    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .partOfOverViewPage{
        min-width: 33%;

        padding: 10px;
        margin-bottom: 10px;

        background-color: red;


        &.main{
            width: 66%;
            max-width: 66%;
            min-height: 320px;
        }

        &.topBestSeller{
            max-width: 33%;

            padding: 10px;
            background-color: white;
            
        }


        .nullContent{

                width: 100%;
                height: 300px;
                padding: 10px;


                background-size: 100% 100%;
                background-repeat: no-repeat;

                &.money{
                    background-image: url(https://static.tapchitaichinh.vn/w800/images/upload/phunganhtuan/2016_04_24/money3_XSZU.jpg);

                }

                &.archives{
                    background-image: url(http://www.yousoft.vn/data/uploads/news/4-yeu-to-quan-trong-trong-quan-ly-hang-ton-kho-1-3.jpg);

                }

                &.events{
                    background-image: url(https://backstage.vn/wp-content/uploads/2019/06/su-kien-03-3553-750x375.jpg);

                }

        


        }
    }



`

    