import { Container } from "@material-ui/core"
import { FastField, Form, Formik } from "formik"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import InputField from "../../../custom fields/Input Field"
import { ConvertMoneyToString } from "../../../untils/ConvertMoney"
import ItemOfCart from "../../components/ItemOfCart"
import { notifyCartChange } from "../../SalesPage.slice"
import { CartPageStyle, FormCartStyle } from "./CartPage.styled"
import * as Yup from "yup"
import emailjs from "@emailjs/browser"
import orderApi from "../../../api/orderApi"
import Notify from "../../../component/Notify"
import SubmitButton from "../../../component/SubmitButton"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const CartPage = (props) => {
    const [cart, setCart] = useState([])

    const dispatch = useDispatch()

    const flag = useSelector(state => state.sales.flag)

    const [notifyReset, setNotifyReset] = useState(0)

    const [totalBill, setTotalBill] = useState(0)

    const [total, setTotal] = useState(0)

    const [voucher, setVoucher] = useState(0)

    const [Message, setMessage] = useState("")

    const [ loading, setLoading ] = useState(0)
    


    const handleClickBtnOnMessage = () => {
        setMessage("")
    }

    const handleSubmit = async (values) => {
        if(cart.length === 0) {
            setMessage("Giỏ hàng của bạn hiện đang trống, thêm sản phẩm để hoàn tất đặt hàng")
        }else{
            setLoading(1)
        
            const resultOrder = await orderApi.addOrder({
                inforUser: values,
                order: cart,
                totalBill
            })
            if (resultOrder === "successful!") {
                let product = "Bạn đã đặt tổng cộng: "
    
                for (let i = 0; i < cart.length; i++) {
                    if (i !== cart.length - 1) {
                        product = product + `${cart[i].amount} chiếc điện thoại ${cart[i].name}, `
    
                    } else {
                        product = product + `${cart[i].amount} chiếc điện thoại ${cart[i].name}`
    
                    }
                }
    
                const orderTime = new Date()
                const data = {
                    ...values,
                    product,
                    totalBill: `${ConvertMoneyToString(totalBill)} đ`,
                    orderTime: orderTime.toLocaleString()
                }
                const resultEmail = await emailjs.send("mobishop190", "template_190", data, "1clqTAOin5APO8iQa")
                if (resultEmail.status === 200) {
                    setMessage("Đặt hàng thành công, kiểm tra thông báo trên email đã đăng ký để biết thêm chi tiết")
    
                } else {
                    setMessage("Đặt hàng thành công, thông báo trên email đang xảy ra lỗi nhưng đơn hàng của bạn đã được ghi nhận")
    
                }
                window.localStorage.removeItem("cart")
                dispatch(notifyCartChange(1))
            } else {
                setMessage("Đã xảy ra lỗi, vui lòng thử lại!")
            }
            setLoading(0)
        }
        




    }

    const handleBtnRemoveOfItem = (name) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        const newCart = cart.filter((obj) => {
            return obj.name !== name
        })
        localStorage.setItem("cart", JSON.stringify(newCart))
        const action = notifyCartChange(-1)
        dispatch(action)
    }

    const handleBtnAddOfItem = (name) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        const newCart = []
        cart.forEach((obj) => {
            if (obj.name === name) {
                newCart.push({
                    ...obj,
                    amount: obj.amount + 1,
                })
            } else {
                newCart.push(obj)
            }
        })
        localStorage.setItem("cart", JSON.stringify(newCart))
        setNotifyReset(state => state + 1)

    }

    const handleBtnSubOfItem = (name) => {
        const cart = JSON.parse(localStorage.getItem("cart"))
        const newCart = []
        cart.forEach((obj) => {
            if (obj.name === name) {
                newCart.push({
                    ...obj,
                    amount: obj.amount - 1,
                })
            } else {
                newCart.push(obj)
            }
        })
        localStorage.setItem("cart", JSON.stringify(newCart))
        setNotifyReset(state => state - 1)

    }

    useEffect(() => {
        if(localStorage.getItem('cart')){
            const cart = JSON.parse(localStorage.getItem("cart"))
            setCart(cart)
            let newTotal = 0
            let newVoucher = 0
            cart.forEach((item) => {
                newTotal = newTotal + item.price * item.amount
                newVoucher = newVoucher + item.salePrice * item.amount
            })
            setTotalBill(newVoucher)
            setTotal(newTotal)
            setVoucher(newTotal - newVoucher)
        }else{
            setCart([])
            setTotal(0)
            setTotalBill(0)
            setVoucher(0)
        }
        
    }, [flag, notifyReset])


    return (
        <CartPageStyle>
            <Container className="cartpage">
                <p className="cartpage-redirect"><Link to="/">Trang chủ</Link> / <span>Giỏ hàng</span></p>
                <div className="cartpage-cart">

                    <div className="cartpage-cart__length">
                        <h3>{`Có ${cart.length} sản phẩm trong giỏ hàng`}</h3>
                    </div>
                    <div className="cartpage-cart__listProduct">
                        {cart.map((cart) => {
                            return <div className="cartpage-cart__listProduct-item" key={cart.name}>
                                <ItemOfCart item={cart}
                                    onBtnRemove={handleBtnRemoveOfItem}
                                    onBtnAdd={handleBtnAddOfItem}
                                    onBtnSub={handleBtnSubOfItem}
                                />

                            </div>
                        })}

                    </div>
                    <div className="cartpage-cart__totalBill">
                        <div className="cartpage-cart__totalBill-diff">
                        </div>
                        <div className="cartpage-cart__totalBill-bill">
                            <p><span>Tổng tiền: </span><span>{ConvertMoneyToString(total)}</span></p>
                            <p><span>Giảm: </span><span>{ConvertMoneyToString(voucher)}</span></p>
                            <p className="colorRed"><span>Cần thanh toán: </span><span>{ConvertMoneyToString(totalBill)}</span></p>
                        </div>
                    </div>
                    <div className="cartpage-cart__inforCustom">
                        <FormCart onSubmit={handleSubmit} loading={loading}/>

                    </div>
                </div>
                {Message !== "" ?
                    <Notify message={Message} onBtn={handleClickBtnOnMessage}/>
                    : ""
                }
            </Container>
        </CartPageStyle>
    )
}

const FormCart = (props) => {

    const { onSubmit, loading } = props
    const initialValues = {
        userName: "",
        userNumberPhone: "",
        userEmail: ""
    }
    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(2, "Tối thiểu ba ký tự").max(15, "Tối đa 15 ký tự").required('Vui lòng nhập thông tin còn thiếu!'),
        userNumberPhone: Yup.string().matches(phoneRegExp, 'Số điện thoại không tồn tại').required('Vui lòng nhập thông tin còn thiếu!'),
        userEmail: Yup.string().email("Không đúng định dạng email").required('Vui lòng nhập thông tin còn thiếu!')


    })


    return (
        <FormCartStyle>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    return (
                        <Form className="formUser">
                            <div className="formUser-inputUser">
                                <div className="formUser-inputUser__item">
                                    <FastField
                                        name="userName"
                                        component={InputField}
                                        placeholder="Nhập họ tên"
                                    />
                                </div>
                                <div className="formUser-inputUser__item">

                                    <FastField
                                        name="userNumberPhone"
                                        component={InputField}
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>

                                <div className="formUser-inputUser__item email">

                                    <FastField
                                        name="userEmail"
                                        component={InputField}
                                        placeholder="Nhập email"
                                    />

                                </div>


                            </div>
                            <div className="formUser-btnBuy">

                                <SubmitButton title="Hoàn tất đặt hàng" loading={loading}/>

                            </div>

                        </Form>
                    )
                }}

            </Formik>
        </FormCartStyle>
    )
}
export default CartPage