import React from 'react'
import { Grid } from "@material-ui/core"
import { DiffInfor } from './AderDiffInfor.styled'


const AdvDiffInfor = () => {
    return (
        <DiffInfor>
            <Grid container className="boxDiff">
                <Grid item lg={12} className="boxDiff-top">
                    <img alt="Error" src="https://image.scoopwhoop.com/q30/s4.scoopwhoop.com/shon/random/deep1.jpg" />
                    <img alt="Error" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqz97oOiv4YEiBHDfPDQdKs2A06LIeALJFA&usqp=CAU" />
                </Grid>
                <Grid item lg={12} className="boxDiff-bottom">
                    <div className="boxDiff-bottom__content">
                        <h5>Thông tin nổi bật</h5>
                        <h5>Xem tất cả</h5>

                    </div>
                    <div className="boxDiff-bottom__main">
                        <div className="boxDiff-bottom__main-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-A4wsT_5iHS2d34kPEZDJ5D_BchutzRLcg&usqp=CAU" alt="Error" />
                            <p>OPPO A16k giá chỉ 3.000.000 Đ</p>
                        </div>
                        <div className="boxDiff-bottom__main-item">
                            <img src="http://ae01.alicdn.com/kf/H120aeb781ea04ac7a50170e1e2a5ac7fj/Girl-Ass-Sexy-Pencil-Drawing-Art-Beautiful-Lady-Big-Butt-Print-Car-Sofa-Decoration-Throw-Pillowcase.jpg_640x640.jpg" alt="Error" />
                            <p>Galaxy Watch giảm đến 5 triệu</p>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </DiffInfor>
    )
}

export default AdvDiffInfor
