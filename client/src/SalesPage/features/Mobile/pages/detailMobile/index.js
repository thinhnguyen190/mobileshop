import { Button, Container } from "@material-ui/core"
import BuyProduct from "../../../../components/BuyProduct"
import IntroImgOfProduct from "../../../../components/IntroImgOfProduct"
import ProductAttach from "../../../../components/ProductAttach"
import SpecificationsOfMobile from "../../components/SpecificationsOfMobile"
import { DetailMobilePageDMP, DMPDetailInfor, DMPDetailQandA, DMPHeader, IntroProductDMP, NameProductDMP } from "./detailMobile.styled"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SliderProduct from "../../../../components/SliderProduct"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import mobileApi from "../../../../../api/mobileApi"
import io from "socket.io-client"
import QABox from "../../../../components/QABox"
import DesPostOfProduct from "../../../../components/DesPostOfProduct"

let socket


const ImgAdverMobile = [

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765724691857357_F-C1_1200x300.png"
    ,
    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/4/637768876075372056_F-C1_1200x300.png"
    ,
    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765917518466147_F-C1_1200x300.png"
    ,
    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765697875939170_F-C1_1200x300.png"
    ,
    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765645012841608_F-C1_1200x300.png"
    ,

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/1/637766294477937633_F-C1_1200x300.png"
    ,

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765703248716700_F-C1_1200x300.png"
    ,

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765901744140786_F-C1_1200x300.png"
    ,

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765727157040437_F-C1_1200x300.png"
    ,

    "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765652947990118_F-C1_1200x300@2x.png"
    


    

   
]


const DetailMobilePage = (props) => {
    const params = useParams()
    

    const [mobile, setMobile] = useState({})

    useEffect(() => {
        
        socket = io("http://localhost:5000")
        socket.emit("join_mobileProduct", params.id)
        const fetchMobile = async () => {
            try {
                const res = await mobileApi.getMobile(params.id)
                console.log(res)
                setMobile(res)
            } catch (error) {
                console.log('fetch mobile fail !!!', error)
            }
            
        }
        fetchMobile()
        
        // const getData = async () => {
        //     await axios.get(`http://localhost:5000/mobile/${params.id}`)
        //         .then(res => {
        //             setMobile(res.data)
        //             console.log(res.data.imgs)
        //         })

        // }
        // getData()
        return () => {
            socket.emit("left_mobileProduct", params.id)
            socket.off()
        }
    }, [params.id])


    return (
        <DetailMobilePageDMP>
            <DMPHeader>
                <Container className="dmpHeaderContainer">
                    <NameProductDMP>
                        <div className="productName">
                            <h2>{mobile.name}</h2>
                            <span>(No.0034124321)</span>
                        </div>
                        <div></div>
                    </NameProductDMP>

                    <IntroProductDMP>
                        <div className="IntroProductDMP-left">
                            <IntroImgOfProduct imgs={mobile.imgs} name={mobile.name}/>
                            <SpecificationsOfMobile mode="modeText" specifications={mobile.specifications} />
                            <div className="IntroProductDMP-left__diff">
                                <p><VerifiedUserIcon className="icon" />Hàng chính hãng - bảo hành 12 Tháng<span><LocalShippingIcon className="icon" />Giao hàng toàn quốc</span></p>
                            </div>
                        </div>

                        <div className="IntroProductDMP-right">
                            <BuyProduct price={mobile.price} salePrice={mobile.salePrice} />
                            <Button><div className="buyProduct">
                                <h3>Mua Ngay</h3>
                                <span>
                                    Giao hàng miễn phí hoặc nhận tại shop
                                </span>
                            </div>
                            </Button>
                            <ProductAttach />
                        </div>

                    </IntroProductDMP>
                </Container>

            </DMPHeader>

            <DMPDetailInfor>
                <Container className="DMPDetailInfor">
                    <div className="DMPDetailInfor-left">
                        <h3>Đặc điểm nổi bật</h3>
                        <div className="DMPDetailInfor-left__slider">
                            <SliderProduct adverImgList={ImgAdverMobile} />

                        </div>
                        <DesPostOfProduct productName={mobile.name} desPost={mobile.desPost} />
                    </div>

                    <div className="DMPDetailInfor-right">
                        <SpecificationsOfMobile mode="modeTable" specifications={mobile.specifications} />
                    </div>
                </Container>

            </DMPDetailInfor>

            <DMPDetailQandA>
                <Container className="qaContainer">
                    <QABox socket={socket} productId={params.id} productName={mobile.name} />
                </Container>
            </DMPDetailQandA>


        </DetailMobilePageDMP>
    )
}

export default DetailMobilePage