import React, { useState } from 'react'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { LProducts, LItemProducts, ModeGrid, ModeSlider } from './ShowListProducts.styled';
import { Grid, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ButtonCtrSlider } from '../../MainPage/components/AdverHot/SliderOfProductsHot/SliderOfProductHot.styled';
import HotItem from '../ItemProductOfShop';
const LIST_HOT_SALE_PRODUCT = [
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 13 64GB1",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 230,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB2",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB3",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB4",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB5",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB6",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB7",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },
    {
        imgs: {
            avatar: "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/27/637709417920359178_Pova2-trang-dd.jpg",
        },
        name: "iPhone 12 64GB8",
        price: 21999000,
        salePrice: 19999000,
        specifications: {

        },
        installment: 0,
        timeSale: 240,
        payments: [
            {
                name: "moca",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
                sale: "Giảm 10% tối đa 500.000đ khi thanh toán qua moca"
            },
            {
                name: "vnpay",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua vnpay"
            },
            {
                name: "fe credit",
                img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
                sale: "Giảm 500.000đ khi thanh toán qua thẻ tín dụng FE"
            },

        ],



    },

]
function ListProducts(props) {
    const { mode } = props
    const [productActived, setProductActived] = useState(0)


    const handleClickNextSlider = (length) => {
        setProductActived(productActived + length)
    }

    const handleClickPreSlider = (length) => {
        setProductActived(productActived - length)
    }

    return (
        <LProducts>
            <div className="listProduct__title">
                <span><WhatshotIcon /><h4>{props.title}</h4></span>
            </div>
            <LItemProducts>
                {mode === "slider" ?
                    <ModeSlider>

                        <Grid container className='modeSlider'>

                            {LIST_HOT_SALE_PRODUCT.map((pr, i) => {
                                const count = productActived/4
                                const tproductActived = productActived - count
                                const mproductActied = productActived - count*2
                                return <Grid item key={pr.name} lg={3} xs={6} className={`item ${i < productActived ? "active" : ""} ${ i < mproductActied ? "mactive" : ""} ${ i < tproductActived - 1 ? "tactive" : ""}`}>
                                    <HotItem inforProduct={pr} mode="slider" />
                                </Grid>
                            })}
                            {console.log(LIST_HOT_SALE_PRODUCT.length)}
                            <ButtonCtrSlider>
                                <IconButton onClick={() => handleClickPreSlider(4)} disabled={productActived === 0 ? true : false}><ArrowBackIcon /></IconButton>
                                <IconButton onClick={() => handleClickNextSlider(4)} disabled={productActived >= LIST_HOT_SALE_PRODUCT.length ? false : false} className="lNext"><ArrowForwardIcon /></IconButton>
                                <IconButton onClick={() => handleClickNextSlider(3)} disabled={productActived >= LIST_HOT_SALE_PRODUCT.length ? false : false} className="tNext"><ArrowForwardIcon /></IconButton>
                                <IconButton onClick={() => handleClickNextSlider(2)} disabled={productActived >= LIST_HOT_SALE_PRODUCT.length ? false : false} className="mNext"><ArrowForwardIcon /></IconButton>

                            </ButtonCtrSlider>
                        </Grid>
                    </ModeSlider>
                    :
                    <ModeGrid>

                        <Grid container>

                            {LIST_HOT_SALE_PRODUCT.map((pr) => {
                                return <Grid item key={pr.name} lg={3} xs={6}>
                                    <HotItem inforProduct={pr} />
                                </Grid>
                            })}


                        </Grid>
                    </ModeGrid>


                }
            </LItemProducts>
        </LProducts>
    )
}

export default ListProducts
