import { Button, Grid } from "@material-ui/core"
import { ProductAttachPA } from "./ProductAttach.styled"

const ProductAttach = (props) => {
    return (
        <ProductAttachPA>
            <span>Gợi ý sản phẩm đi kèm</span>
            <Grid container className="listProductAttach">

                <Grid item lg={12} className="PAitem">
                    <div className="PAitem-left">
                        <div className="PAitem-left-img">
                            <img src="https://images.fpt.shop/unsafe/fit-in/70x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/20/637703258653853689_tai-nghe-airpods-pro-2021-dd.jpg" alt="Error" />
                        </div>
                        
                        <div className="PAitem-left__infor">
                            <h5>Tai nghe AirPods Pro 2021</h5>
                            <p>4.999.000đ <span>5.999.000đ</span></p>
                        </div>

                    </div>
                    <div className="PAitem-right">
                        <Button className="btnAddProduct">Thêm vào giỏ hàng</Button>
                    </div>
                </Grid>

                <Grid item lg={12} className="PAitem">
                    <div className="PAitem-left">
                        <div className="PAitem-left-img">
                            <img src="https://images.fpt.shop/unsafe/fit-in/70x70/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/20/637703258653853689_tai-nghe-airpods-pro-2021-dd.jpg" alt="Error" />
                        </div>
                        
                        <div className="PAitem-left__infor">
                            <h5>Tai nghe AirPods Pro 2021</h5>
                            <p>4.999.000đ <span>5.999.000đ</span></p>
                        </div>

                    </div>
                    <div className="PAitem-right">
                        <Button className="btnAddProduct">Thêm vào giỏ hàng</Button>
                    </div>
                </Grid>

            </Grid>
        </ProductAttachPA>
    )
}


export default ProductAttach