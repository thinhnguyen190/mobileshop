import { Container } from "@material-ui/core";
import ListProducts from "../components/ShowListProducts";
import AdverHot from "./components/AdverHot";
import ListItemProduct from "./components/ListItemProduct";
import { MainPageStyle, Picture } from "./MainPage.styled";
const LIST_ITEM_MAIN_PRODUCT = [
    {
        name: "Điện thoại",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/dien-thoai.png"
    },
    {
        name: "Laptop",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/laptop.png"
    },
    {
        name: "Apple",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/apple.png"
    },
    {
        name: "Samsung",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/chuyentrangsamsung8_7.png"
    },
    {
        name: "Xiaomi",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/xiaomi2.png"
    },
    {
        name: "Hàng gia dụng",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/giadung.png"
    },
    {
        name: "Máy cũ",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may_cu.png"
    },
    {
        name: "Máy tính bảng",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/tablet0409.png"
    },
    {
        name: "Đồng hồ thông minh",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/smart-watch.png"
    },
    {
        name: "Đồng hồ thời trang",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/smart-watch.png"
    },
    {
        name: "Máy tính để bàn",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/Allinone.png"
    },
    {
        name: "Máy in",
        img: "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may-in.png"
    },
]
const LIST_PICTURE_MAINPAGE = {
    picture_1: {
        picture: "https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/3/637741419891253187_F-H5_1200x200.png"
    },
    picture_2: {
        picture: "https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/20/637755574781904424_F-H5_1200x200.png"
    },
    picture_3: {
        picture: "https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/19/637755081215868035_F-H5_1200x200.png"
    },
}
//rfce

const MainPage = () => {

    return (

        <MainPageStyle>
            <Container className="mainPage">
                <AdverHot />
                <ListItemProduct listItem={LIST_ITEM_MAIN_PRODUCT} bgItem="#f4f4f4" />
                <Picture>
                    <img src={LIST_PICTURE_MAINPAGE.picture_1.picture} alt="Error" />
                </Picture>
                <ListProducts mode="slider" title="KHUYẾN MẠI HOT" />
                <Picture>
                    <img src={LIST_PICTURE_MAINPAGE.picture_2.picture} alt="Error" />
                </Picture>
                <ListProducts title="ĐIỆN THOẠI HOT" />
                <Picture>
                    <img src={LIST_PICTURE_MAINPAGE.picture_3.picture} alt="Error" />
                </Picture>
                <ListProducts title="TABLET HOT" />
            </Container>
        </MainPageStyle>

    )
}
export default MainPage;