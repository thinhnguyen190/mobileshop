import { Container, Grid } from "@material-ui/core"
import { Address, MainContent, PartFooter } from "./Footer.styled"

const INFOR_FOOTER_OF_SHOP = [
    {
        title: "Giới thiệu về công ty",
        link: "",
    },
    {
        title: "Tin tuyển dụng",
        link: "",
    },
    {
        title: "Hệ thống cửa hàng",
        link: "",
    },
    {
        title: "Câu hỏi thường gặp",
        link: "",
    },
    {
        title: "Tin khuyến mãi",
        link: ""
    },
    {
        title: "Hệ thống bảo hành",
        link: ""
    },
    {
        title: "Chính sách bảo mật",
        link: ""
    },
    {
        title: "Hướng dẫn mua online",
        link: ""
    },
    {
        title: "Bán hàng doanh nghiệp",
        link: ""
    },
    {
        title: "Quy chế hoạt động",
        link: ""
    },
    {
        title: "Hướng dẫn mua trả góp",
        link: ""
    },
    {
        title: "Giới thiệu máy đổi trả",
        link: ""
    },
    {
        title: "Kiểm tra hóa đơn điện tử",
        link: ""
    },
    {
        title: "Chính sách trả góp",
        link: ""
    },
    {
        title: "Chính sách đổi trả",
        link: "",
    },
    {
        title: "Tra cứu thông tin bảo hành",
        link: ""
    }
]
const Footer = () => {
    return (
        <PartFooter>
            <Container>
                <MainContent>
                    <Grid container className="link-detail-infor">
                        {INFOR_FOOTER_OF_SHOP.map((i) => {
                            return <Grid item lg={4} className="link-item" key={i.title}><p>{i.title}</p></Grid>
                        })}
                    </Grid>
                    <Grid container className="support-infor">
                        <Grid container className="contact-infor">
                            <Grid item lg={5}>
                                <p>Tư vấn mua hàng</p>
                                <p>1800 6601 <span>(nhánh 1)</span></p>
                            </Grid>
                            <Grid item lg={7}>
                                <p>Góp ý, khiếu nại dịch vụ (8h00-22h00)</p>
                                <p href="*">1800 6616</p>
                            </Grid>
                            <Grid item>
                                <p>Hỗ trợ kỹ thuật</p>
                                <p>1800 6601 <span>(nhánh 2)</span></p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item lg={12}>
                                <p>Hỗ trợ thanh toán + chứng nhận</p>
                                <Grid>
                                    <Grid item>
                                        <img src="https://fptshop.com.vn/Content/v4/images/iconft.png?v=20176" alt="Error"></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MainContent>
                
            </Container>
            <Address>
                <p>© 2007 - 2021 Công Ty Cổ Phần Abc / Địa chỉ: 543a, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 054325355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày 02/07/2018. Điện thoại: 0921342154. Email: nttshop@gmail.com.vn. Chịu trách nhiệm nội dung: NTT.</p>
                </Address>
        </PartFooter>

    )
}
export default Footer