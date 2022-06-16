import { Formik } from "formik"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CheckBoxField from "../../../../../custom fields/CheckBox Field"
import { filterMobileChange } from "../../../../SalesPage.slice"
import { FormFillter, FormFillterItem, MobileFormFillterStyle } from "./MobileFormFillter.styled"
import ClearAllIcon from '@material-ui/icons/ClearAll';

//flag={Object.keys(Object.fromEntries([...searchParams])).length}

const typeOptions = [
    {
        label: "Tất cả",
        value: ""
    },
    {
        label: "Samsung",
        value: "Samsung"
    },
    {
        label: "Xiaomi",
        value: "Xiaomi"
    },
    {
        label: "Apple",
        value: "Apple"
    },
    {
        label: "Vivo",
        value: "Vivo"
    },
    {
        label: "OPPO",
        value: "OPPO"
    },
    {
        label: "Realme",
        value: "Realme"
    },
    {
        label: "Vsmart",
        value: "Vsmart"
    },
    {
        label: "Nokia",
        value: "Nokia"
    }
]
const priceOptions = [
    {
        label: "Tất cả",
        value: ""
    },
    {
        label: "Dưới 2 triệu",
        value: "Dưới-2-triệu"
    },
    {
        label: "Từ 2-4 triệu",
        value: "Từ-2-4-triệu"
    },
    {
        label: "Từ 4-7 triệu",
        value: "Từ-4-7-triệu"
    },
    {
        label: "Từ 7-13 triệu",
        value: "Từ-7-13-triệu"
    },
    {
        label: "Trên 13 triệu",
        value: "Trên-13-triệu"
    }
]

const pinOptions = [
    {
        label: "Tất cả",
        value: ""
    },
    {
        label: "Dưới 3000 mah",
        value: "Dưới-3000-mah"
    },
    {
        label: "Từ 3000-4000 mah",
        value: "Từ-3000-4000-mah"
    },
    {
        label: "Siêu trâu: trên 4000 mah",
        value: "Trên-4000-mah"
    }

]

const installmentOptions = [
    {
        label: "Tất cả",
        value: ""
    },
    {
        label: "Trả ghóp 0%",
        value: "Trả-ghóp-0%"
    },
    {
        label: "Trả ghóp 0đ",
        value: "Trả-ghóp-0đ"
    }
]
const MobileFormFillter = (props) => {
    const filter = useSelector(state => state.sales.filterMobile)
    const dispatch = useDispatch()
    const handleChecked = (name, value) => {
        const action = filterMobileChange({ name, value })
        dispatch(action)
    }

    const [ show, setShow ] = useState("hidden");

    const handleClickBtnFillter = () => {

        console.log(" aaaaa")
        if(show === "hidden"){
            setShow("show")
        }else{
            setShow("hidden")
        }
    }



    return (
        <Formik>
            {
                formikProps => {
                    return (
                        <MobileFormFillterStyle>

                            <div className="btnFillter">
                                <ClearAllIcon className="btnFillter-icon" onClick={handleClickBtnFillter}/>

                                <div className="btnFillter-ruler"></div>
                            </div>

                            <FormFillter show={show}>

                                <FormFillterItem>
                                    <CheckBoxField options={typeOptions} label="Hãng sản xuất" name="brand" onChecked={handleChecked} listChecked={filter.brand} />

                                </FormFillterItem>

                                <FormFillterItem>
                                    <CheckBoxField options={priceOptions} label="Mức giá" name="price" onChecked={handleChecked} listChecked={filter.price} />

                                </FormFillterItem>


                                <FormFillterItem>
                                    <CheckBoxField options={pinOptions} label="Pin" name="pin" onChecked={handleChecked} listChecked={filter.pin} />

                                </FormFillterItem>


                                <FormFillterItem>
                                    <CheckBoxField options={installmentOptions} label="Ưu đãi trả ghóp" name="installment" onChecked={handleChecked} listChecked={filter.installment} />


                                </FormFillterItem>

                            </FormFillter>
                        </MobileFormFillterStyle>


                    )
                }
            }
        </Formik>
    )
}

export default React.memo(MobileFormFillter)