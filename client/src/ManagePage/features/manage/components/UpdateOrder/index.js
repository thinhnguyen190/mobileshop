
import React, { useEffect, useState } from 'react'
import { UpdateOrderStyle } from './UpdateOrder.styled'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuIcon from '@material-ui/icons/Menu';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import SearchIcon from '@material-ui/icons/Search';
import orderApi from '../../../../../api/orderApi';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { ConvertMoneyToString } from '../../../../../untils/ConvertMoney';
import { STATUS_OF_ORDER } from '../../../../../constans/GlobalConstans';
import { Checkbox, FormControlLabel } from '@material-ui/core';
const UpdateOrder = (props) => {

    const { orderSelected, changeStatus} = props

    const [ order, setOrder ] = useState({})

    const [ showDetailOrder, setShowDetailOrder ] = useState(0)

    const [ statusSelected, setStatusSelected ] = useState("")


    useEffect(() => {
        if(orderSelected){
            const fetchOrder = async () => {
                const result = await orderApi.getOrder(orderSelected)
                setOrder(result)
                setStatusSelected(result.status)
            }
            fetchOrder()
        }
        
    },[ orderSelected])

    const handleBoxChecked = async (value) => {
        if(value !== statusSelected){
            console.log("aaa")
            setStatusSelected(value)

            await orderApi.updateStatus(orderSelected, value)
            changeStatus()
        }
        
    }

    return (
        <UpdateOrderStyle>
            <div className='updateOrder-title'>Chi tiết đơn hàng</div>
            <div className='updateOrder-infor'>
                <div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label'><PersonIcon />Tên khách hàng:</p>
                    {order?.orderUserName}
                </div>
                <div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label'><PhoneIcon />Số điện thoại:</p>
                    {order?.orderUserNumberPhone}

                </div><div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label'><EmailIcon />Email:</p>
                    {order?.orderUserEmail}



                </div><div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label'><AccessAlarmIcon />Thời gian đặt hàng:</p>
                    {order.createdAt  ? new Date(order.createdAt).toLocaleString() : ""}
                </div>
                <div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label fullwidth'><MenuIcon />Chi tiết đơn hàng{ showDetailOrder ? <ExpandLessIcon onClick={() => setShowDetailOrder(0)}/> : <ExpandMoreIcon onClick={() => setShowDetailOrder(1)}/>  }</p>
                    { showDetailOrder ? <div className='updateOrder-infor__item-content'>
                    {order.listOrder?.map((pro) => {
                        return <div className='orderItem' key={pro.id}>
                            <p>Tên sản phẩm: {pro.name}</p>
                            <p>Số lượng: {pro.amount} </p>
                            <p>Giá: {ConvertMoneyToString(pro.price)}</p>
                            
                        </div>
                    })}
                        <div className='totalBillOfOrder'>Tổng Bill: {order.totalBill ? ConvertMoneyToString(order.totalBill) : ""}</div>

                    </div> : ""
                    }
                </div>
                <div className='updateOrder-infor__item'>
                    <p className='updateOrder-infor__item-label'><SearchIcon />Tình trạng đơn hàng:</p>
                    {STATUS_OF_ORDER.map((status) => {
                        return <FormControlLabel 
                            control={<Checkbox checked={statusSelected === status.value} onChange={() => handleBoxChecked(status.value)}/>}
                            label={status.label}
                            key={status.label}
                        />
                    })}
                    
                </div>

            </div>




        </UpdateOrderStyle >
    )
}

export default UpdateOrder