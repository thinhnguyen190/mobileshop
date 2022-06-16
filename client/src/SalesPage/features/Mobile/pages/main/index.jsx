import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, createSearchParams, useSearchParams } from 'react-router-dom'
import mobileApi from '../../../../../api/mobileApi'
import ConvertObjToParamsQueryUrl, { ConvertParamsQueryUrlToObj } from '../../../../../untils/ConvertObjToParamsQueryUrl'
import ProductListTable from '../../../../components/ProductListTable'
import SliderAndFillter from '../../../../components/SliderAndFillter'
import SliderProduct from '../../../../components/SliderProduct'
import { getSearchParamsFromUrl } from '../../../../SalesPage.slice'
import MobileFormFillter from '../../components/MobileFromFillter'
import { MobilePageStyle } from './main.styled'



const BrandOptions = [
    {
        label: "Samsung",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490904217021_Samsung@2x.jpg"
    },
    {
        label: "Xiaomi",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/6/2/637582325361253577_Xiaomi@2x.jpg"
    },
    {
        label: "Apple",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340490193124614_iPhone-Apple@2x.jpg"
    },
    {
        label: "Vivo",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898745716_Vivo@2x.jpg"
    },
    {
        label: "OPPO",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491304997311_Oppo@2x.jpg"
    },
    {
        label: "Realme",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898745716_Realme@2x.jpg"
    },
    {
        label: "Vsmart",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340491898901930_Vsmart@2x.jpg"
    },
    {
        label: "Nokia",
        img: "https://images.fpt.shop/unsafe/fit-in/108x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/8/26/637340493755614653_Nokia@2x.jpg"
    }
]



function MainMobilePage() {
    console.log("page re-render")
    const [listProduct, setListProduct] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const filter = useSelector(state => state.sales.filterMobile)
    const [check, setCheck] = useState(0)
    const [loading, setLoading] = useState(false)
    const ImgAdverMobile = useMemo(() => [

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

    ], [])


    useEffect(() => {
        setLoading(true)
        const fetchMobileList = async (obj) => {
            try {
                const res = await mobileApi.getAll(filter);
                setListProduct(res)
                setLoading(false)
            } catch (error) {
                console.log('fetch mobile list fail !!!', error)
            }
        }

        if (check === 0) {
            console.log("day")
            const newarr = [...searchParams]
            const searchParamsFromUrl = ConvertParamsQueryUrlToObj(newarr)
            setCheck(1)
            const action = getSearchParamsFromUrl(searchParamsFromUrl)
            dispatch(action)

        } else {
            const paramsquery = ConvertObjToParamsQueryUrl(filter)
            navigate({
                search: `${createSearchParams(paramsquery)}`
            })
            fetchMobileList(filter)
        }





    }, [filter, navigate, check, dispatch, searchParams])
    return (
        <MobilePageStyle>

            <Container className='containerM'>
                <p style={{
                    marginTop: 5,
                    marginBottom: 5,
                    textDecoration: "none",
                }}><Link to="/">Trang chủ</Link> / <span>Điện thoại</span></p>
                <SliderProduct adverImgList={ImgAdverMobile} />
                <Grid container>
                    <Grid item lg={3} xs={12}>
                        <MobileFormFillter
                        />
                    </Grid>
                    <Grid item lg={9} xs={12}>
                        <SliderAndFillter title="Điện thoại" listBrand={BrandOptions}
                            loading={loading ? 1 : 0}
                        />
                        <ProductListTable listProduct={listProduct} loading={loading ? 1 : 0} />
                    </Grid>
                </Grid>

            </Container>
        </MobilePageStyle>
    )
}

export default MainMobilePage
