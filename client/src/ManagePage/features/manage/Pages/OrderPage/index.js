import { useEffect, useState } from "react"
import orderApi from "../../../../../api/orderApi"
import { ManageTable } from "../ManageMobile/ManageMobile.styled"
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ConvertMoneyToString } from "../../../../../untils/ConvertMoney";
import { DetailOrder, OrderPageStyle } from "./OrderPage.styled";
import UpdateOrder from "../../components/UpdateOrder";
import NotifyHandle from "../../../../../component/NotifyHandle";
import { useSelector } from "react-redux";
import Notify from "../../../../../component/Notify";

const OrderPage = (props) => {

    const [listOrder, setListOrder] = useState([])
    const headerTable = [
        "Số điện thoại",
        "Tổng hóa đơn",
        "Tình trạng đơn hàng",
        "Thời gian đặt hàng"


    ]
    const [message, setMessage] = useState("")

    const user = useSelector(state => state.manage.user)


    const [showDelNotify, setShowDelNotify] = useState({
        id: "",
        numberPhone: "",

    })

    const notifyNotEnoughRole = () => {
        setMessage("Bạn không có đủ quyền hạn để thực hiện điều này")
    }

    const [notifyChangeStatus, setNotifyChangeStatus] = useState(0)

    const [orderSelected, setOrderSelected] = useState("")

    const handleChangeOrderStatus = () => {
        setNotifyChangeStatus(state => state + 1)
    }

    const handleClickDelBtn = async () => {
        const result = await orderApi.delOrder(showDelNotify.id)
        if (result === 1) {
            setShowDelNotify({
                id: "",
                numberPhone: ""
            })
            setNotifyChangeStatus(state => state + 1)
        }


    }

    useEffect(() => {
        const fetchOrder = async () => {
            const order = await orderApi.getOrders()
            setListOrder(order)
        }
        fetchOrder()
    }, [notifyChangeStatus])
    return (
        <OrderPageStyle>
            <div className="order-table">
                <ManageTable>
                    <tbody>
                        <tr>
                            {headerTable.map((header) =>
                                <th key={header}>{header}</th>

                            )}
                            <th><SettingsIcon /></th>

                        </tr>
                        {listOrder.map((order) => {
                            const time = new Date(order.createdAt)
                            return <tr key={order._id}>
                                <td>{order.orderUserNumberPhone}</td>
                                <td>{ConvertMoneyToString(order.totalBill)}</td>
                                <td>{order.status}</td>
                                <td>{time.toLocaleString()}</td>
                                <td><EditIcon onClick={() => {
                                    if (user.role) {
                                        setOrderSelected(order._id)

                                    } else {
                                        notifyNotEnoughRole()
                                    }
                                }} /><DeleteIcon onClick={() => {
                                    console.log(user.role)
                                    if (user.role) {
                                        setShowDelNotify({
                                            id: order._id,
                                            numberPhone: order.orderUserNumberPhone
                                        })
                                    } else {
                                        notifyNotEnoughRole()
                                    }

                                }
                                } /></td>

                            </tr>
                        })}
                    </tbody>
                </ManageTable>
            </div>
            <DetailOrder show={orderSelected === "" ? 0 : 1}>
                <img src='https://previews.123rf.com/images/houbacze/houbacze1709/houbacze170900191/85995277-red-vector-flat-design-background-order-it-is-well-adapted-for-web-design-.jpg' alt="error" />
                <div className="detailOrder">

                    {
                        orderSelected !== "" ? <UpdateOrder orderSelected={orderSelected} changeStatus={handleChangeOrderStatus} /> : ""

                    }
                </div>



            </DetailOrder>
            {
                showDelNotify.id !== "" ? <NotifyHandle
                    title="Xóa đơn hàng"
                    message={`Xác nhận xóa đơn hàng của khách có số điện thoại là ${showDelNotify.numberPhone}`}
                    btnLeft={{
                        content: "Thoát",
                        func: () => {
                            setShowDelNotify({
                                id: "",
                                numberPhone: ""
                            })
                        }
                    }
                    }
                    btnRight={{
                        content: "Xóa",
                        func: handleClickDelBtn

                    }
                    }
                /> : ""
            }
            {message !== "" ? <Notify message={message} onBtn={() => setMessage("")} /> : ""}
        </OrderPageStyle>
    )
}

export default OrderPage