import { ManageMobileStyle, ManageTable, MMSProductFilter, MMSProductTable, NotifyDeleteProduct } from "./ManageMobile.styled"
import { Button, Input } from "@material-ui/core"
import { useEffect, useState } from "react"
import mobileApi from "../../../../../api/mobileApi"
import { ConvertMoneyToString } from "../../../../../untils/ConvertMoney"
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Notify from "../../../../../component/Notify"
const ManageMobile = (props) => {

    const user = useSelector(state => state.manage.user)
    const [listMobiles, setListMobile] = useState([])
    const [showNotify, setShowNotify] = useState({
        id: "",
        name: "",

    })
    const [message, setMessage] = useState("")
    const navigate = useNavigate()
    useEffect(() => {

        const fetchMobileList = async () => {
            const result = await mobileApi.getMobileByManager({ keySearch: "" })
            setListMobile(result)
        }

        fetchMobileList()
    }, [])

    const handleChangeInputSearch = async (e) => {
        const result = await mobileApi.getMobileByManager({ keySearch: e.target.value })
        setListMobile(result)
    }

    const handleClickDeleteButton = () => {
        mobileApi.deleteMobile(showNotify.id)
        setListMobile(state => {
            const newList = state.filter((mobi) => mobi._id !== showNotify.id)
            return newList
        })
        setShowNotify({
            id: "",
            name: ""
        })




    }
    const notifyNotEnoughRole = () => {
        setMessage("Bạn không có đủ quyền hạn để thực hiện điều này")
    }
    return (
        <ManageMobileStyle>
            <MMSProductTable>
                <h2>DANH SÁCH SẢN PHẨM</h2>
                <div className="outputFilter">
                    <div className="outputFilter-infor">
                        <span>Hơn 45 mẫu mã điện thoại khác nhau với 8 thương hiệu</span>
                    </div>

                </div>
                <div className="interactiveTable">
                    <div className="interactiveTable-inputSearch">
                        <Input onChange={(e) => handleChangeInputSearch(e)} />
                    </div>
                    <div className="interactiveTable-btnAdd">
                        <Button onClick={() => {
                            if(user.role){
                                navigate("/manage/mana/product/addMobile")

                            }else{
                                notifyNotEnoughRole()
                            }
                        
                        }
                            }>ADD</Button>
                    </div>
                </div>
                <div className="mobileTable">
                    <ManageTable>
                        <tbody>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Giá gốc</th>
                                <th>Giá đang sale</th>
                                <th>Thời gian sale</th>
                                <th><SettingsIcon /></th>
                            </tr>
                            {listMobiles.map((mobi) => {
                                const saleTime = new Date(mobi.saleTime)
                                return <tr key={mobi._id}>
                                    <td width="32%">{mobi.name}</td>
                                    <td>{ConvertMoneyToString(mobi.price)}</td>
                                    <td>{ConvertMoneyToString(mobi.salePrice)}</td>
                                    <td>{saleTime.toLocaleString()}</td>
                                    <td><EditIcon onClick={() => {
                                        if(user.role){
                                            navigate(`/manage/mana/product/editMobile/${mobi._id}`)
                                                                                                                        
                                        }else{
                                            notifyNotEnoughRole()
                                        }
                                    }} /><DeleteIcon onClick={() => {
                                        if(user.role){
                                            setShowNotify({
                                                id: mobi._id,
                                                name: mobi.name
                                            })
                                        }else{
                                            notifyNotEnoughRole()
                                        }
                                        

                                    }
                                    } /></td>

                                </tr>
                            })}
                        </tbody>
                    </ManageTable>
                    {
                        showNotify.id !== "" ? <NotifyDeleteProduct>
                            <div className="notifyDel">
                                <div className="notifyDel-title">Xác nhận xóa sản phẩm</div>

                                <div className="notifyDel-message">
                                    Bạn có muốn xóa {showNotify.name}
                                </div>
                                <div className="notifyDel-btn">
                                    <Button className="exit" onClick={() => setShowNotify({
                                        id: "",
                                        name: ""
                                    })}>Thoát</Button>
                                    <Button className="delete" onClick={handleClickDeleteButton}>Xóa</Button>

                                </div>
                            </div>
                        </NotifyDeleteProduct> : ""
                    }
                    {message !== "" ? <Notify message={message} onBtn={() => setMessage("")} /> : ""}

                </div>
            </MMSProductTable>

            <MMSProductFilter>

            </MMSProductFilter>
        </ManageMobileStyle>
    )
}

export default ManageMobile