import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ColorBarPriceOfProduct } from "../../../constans/Global.styled"
import { ConvertMoneyToString, MathPercentSale, MathSaleMoney } from '../../../untils/ConvertMoney'
import CountDown from '../../../untils/CountDown'
import { notifyCartChange } from '../../SalesPage.slice'
import { Item } from './ItemProductOfShop.styled'

const paymentsDefault = [
    {
        name: "moca",
        img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/12/4/637426739557050119_logo-moca.png",
        sale: "Giảm 500.000đ khi thanh toán qua moca",
    },
    {
        name: "vnpay",
        img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg",
        sale: "Giảm 500.000đ khi thanh toán qua vnpay",
    },
    {
        name: "fe credit",
        img: "https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/5/637690318212003228_637650478804710193_icon-fecredit.jpg",
        sale: "Giảm 500.000đ khi thanh toán qua fe credit",
    },

]

function HotItem(props) {
    const dispatch = useDispatch()
    const { inforProduct, mode, width } = props
    // const [paymentActive, setPaymentActive] = useState(0)

    const handleAddItemToCart = (item) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        let newCart = []
        if (cart === null) {
            newCart = [
                {
                    id: inforProduct._id,
                    name: inforProduct.name,
                    avatar: inforProduct.imgs.avatar,
                    price: inforProduct.price,
                    salePrice: inforProduct.salePrice,
                    amount: 1,
                }
            ]
        } else {

            let check = 0
            cart.forEach(item => {
                if (item.name === inforProduct.name) {
                    check = 1
                    if (item.amount < 4) {
                        newCart.push({
                            ...item,
                            amount: item.amount + 1,
                        })
                    } else {
                        newCart.push(item)
                    }
                } else {
                    newCart.push(item)
                }
            });
            if (check === 0) {

                newCart.push({
                    id: inforProduct._id,
                    name: inforProduct.name,
                    avatar: inforProduct.imgs.avatar,
                    price: inforProduct.price,
                    salePrice: inforProduct.salePrice,
                    amount: 1,
                })
            }
        }

        localStorage.setItem("cart", JSON.stringify(newCart))
        const action = notifyCartChange(1)
        dispatch(action)
    }
    console.log("item-re-render")
    return (
        <Item mode={mode} width={width ? width : 4}>
            <div className="itemHot-img">
                <div className='itemHot-img__img'>
                    <img src={inforProduct.imgs.avatar} alt="Error" />

                </div>
                <span className='itemHot-img__installment'>{`trả góp 0%`}</span>
                <span className='itemHot-img__sale'>{`Giảm ${MathSaleMoney(inforProduct.price, inforProduct.salePrice)}đ`}</span>
            </div>
            <div className='itemHot-mainInfor'>
                <div className='itemHot-mainInfor__price'>
                    <p><Link to={`${inforProduct._id}`}>{inforProduct.name}</Link></p>

                    <div className='itemHot-mainInfor__price-price'>
                        <p>{ConvertMoneyToString(inforProduct.salePrice)} đ</p>
                        <ColorBarPriceOfProduct wd={1 - MathPercentSale(inforProduct.price, inforProduct.salePrice)} />
                    </div>
                    <div className='itemHot-mainInfor__price-salePrice'>
                        <span>{ConvertMoneyToString(inforProduct.price)}</span>
                        <CountDown time={inforProduct.saleTime} />
                    </div>
                </div>
                <div className='itemHot-mainInfor__payments'>
                    {/* <div className='payments-items'>
                        {paymentsDefault.map((payments, i) => {

                            return <div className='payments-items__item'
                                key={payments.name}
                                onMouseOver={() => {
                                    setPaymentActive(i)
                                }}
                            >
                                <div className='payments-items__item-logo'>
                                    <img src={payments.img} alt='Error' />
                                </div>
                                <p className={`payments-items__item-inforsale ${i === paymentActive ? "active" : ""}`}>{payments.sale}</p>

                            </div>
                        })}

                    </div> */}
                    <PaymentItems />
                </div>

            </div>
            {mode === "slider" ? "" :
                <div className='itemHot-difBtn'>
                    <div className='btn-buy'><button onClick={handleAddItemToCart}>Thêm vào giỏ</button></div>
                    <div className='btn-compare'><button>So sánh</button></div>
                </div>
            }

        </Item>
    )
}

const PaymentItems = () => {
    const [paymentActive, setPaymentActive] = useState(0)

    return (
        <div className='payments-items'>
            {paymentsDefault.map((payments, i) => {

                return <div className='payments-items__item'
                    key={payments.name}
                    onMouseOver={() => {
                        setPaymentActive(i)
                    }}
                >
                    <div className='payments-items__item-logo'>
                        <img src={payments.img} alt='Error' />
                    </div>
                    <p className={`payments-items__item-inforsale ${i === paymentActive ? "active" : ""}`}>{payments.sale}</p>

                </div>
            })}

        </div>
    )
}

export default HotItem
