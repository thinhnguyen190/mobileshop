import { Button, Container, Input } from '@material-ui/core'
import { FastField, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import axios from 'axios'
import { AddEditMobileTitle, FormAddMobile } from './AddEditMobile.styled'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import mobileApi from '../../../../../api/mobileApi'
import InputField from '../../../../../custom fields/Input Field'
import PreviewImg from "../../../../components/PreviewImg"
import SelectField from '../../../../../custom fields/Select Field'


const brandOptions = [
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
        label: "Realmi",
        value: "Realmi"
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

const AddEditMobile = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        avatar: "",
        imgsProduct: "",
        imgsUnbox: "",
        nameProduct: '',
        brand: '',
        priceProduct: 0,
        salePrice: '',
        saleTime: '',
        screen: '',
        rearCamera: '',
        selfieCamera: '',
        RAM: '',
        memory: '',
        CPU: '',
        GPU: '',
        PIN: '',
        SIM: '',
        OS: '',
        desPost: '',



    })
    const validationSchema = Yup.object().shape({
        nameProduct: Yup.string().required('Buộc phải nhập tên sản phẩm'),
        priceProduct: Yup.number().min(1, 'Giá trị của sản phẩm phải lớn hơn 0').required('Buộc phải nhập giá của sản phẩm')

    })
    const handleSubmit = (values) => {

        // console.log(values.brand)
        if (params.id) {
            const data = new FormData()
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }

            Object.keys(values).forEach((key) => {
                if (typeof (values[key]) === "object") {
                    if (values[key].length) {
                        Object.keys(values[key]).forEach(miniKey => {
                            data.append(`${key}`, values[key][miniKey])
                        })
                        return
                    }
                    data.append(`${key}`, values[key])
                    return
                }
                data.append(`${key}`, values[key])

            })



            axios.put(`http://localhost:5000/mobile/updateMobile/${params.id}`, data, config)
                .then(res => console.log(res)
                    // axios.post("http://localhost:5000/mobile/addMobile", newData)
                )
        } else {
            console.log(values)
            const data = new FormData()
            const config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            }

            Object.keys(values).forEach((key) => {
                if (typeof (values[key]) === "object") {
                    if (values[key].length) {
                        Object.keys(values[key]).forEach(miniKey => {
                            data.append(`${key}`, values[key][miniKey])
                        })
                        return
                    }
                    data.append(`${key}`, values[key])
                    return
                }
                data.append(`${key}`, values[key])

            })
            console.log(data.values)



            axios.post("http://localhost:5000/mobile/addMobile", data, config)
                .then(res => console.log(res)
                    // axios.post("http://localhost:5000/mobile/addMobile", newData)
                )
        }

    }

    useEffect(() => {
        const CheckMode = async () => {
            if (params.id) {
                const mobile = await mobileApi.getMobile(params.id)
                setInitialValues({
                    avatar: mobile.imgs.avatar,
                    imgsProduct: mobile.imgs.imgsProduct,
                    imgsUnbox: mobile.imgs.imgsUnbox,
                    nameProduct: mobile.name,
                    brand: mobile.brand,
                    priceProduct: mobile.price,
                    salePrice: mobile.salePrice,
                    saleTime: mobile.saleTime,
                    screen: mobile.specifications.screen,
                    rearCamera: mobile.specifications.rearCamera,
                    selfieCamera: mobile.specifications.selfieCamera,
                    RAM: mobile.specifications.RAM,
                    memory: mobile.specifications.memory,
                    CPU: mobile.specifications.CPU,
                    GPU: mobile.specifications.GPU,
                    PIN: mobile.specifications.PIN,
                    SIM: mobile.specifications.SIM,
                    OS: mobile.specifications.OS,
                    desPost: mobile.desPost
                })
            }
        }
        if (params.id) {
            CheckMode()
        }
    }, [params.id])


    return (
        <Container>
            <AddEditMobileTitle>
                <h2>Thêm mới sản phẩm</h2>
                <Button onClick={() => navigate("/manage/mana/product")}>Trở lại trang quản lý</Button>
            </AddEditMobileTitle>
            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
                enableReinitialize={true}

            >
                {formikProps => {
                    return (
                        <Form>
                            <FormAddMobile>

                                <div className='product-avatar'>
                                    <h4>Ảnh đại diện</h4>
                                    <Input type="file" name="avatar" onChange={(event) => {
                                        formikProps.setFieldValue("avatar", event.target.files[0])
                                    }} />
                                    <div className='imgPreview'>
                                        <PreviewImg file={formikProps.values.avatar} avatar={initialValues.avatar} />
                                    </div>
                                </div>

                                <div className='product-basicInfor'>
                                    <h4>Thông tin cơ bản</h4>
                                    <div className='product-basicInfor__item'>
                                        <FastField
                                            label="Tên sản phẩm"
                                            name="nameProduct"
                                            component={InputField}
                                        />
                                    </div>

                                    <div className='product-basicInfor__item'>
                                        <FastField
                                            label="Thương hiệu"
                                            name="brand"
                                            options={brandOptions}
                                            component={SelectField}
                                            placeholder="Chọn thương hiệu"
                                        />
                                    </div>

                                    <div className='product-basicInfor__item'>
                                        <FastField
                                            label="Giá sản phẩm"
                                            name="priceProduct"
                                            component={InputField}
                                        />
                                    </div>

                                    <div className='product-basicInfor__item'>
                                        <FastField
                                            label="Giá khuyễn mãi"
                                            name="salePrice"
                                            component={InputField}
                                        />
                                    </div>

                                    <div className='product-basicInfor__item'>
                                        <FastField
                                            label="Thời gian khuyến mãi"
                                            name="saleTime"
                                            component={InputField}
                                            type="datetime-local"
                                        />
                                    </div>

                                </div>

                                <div className='product-imgs'>
                                    <h4>Thêm ảnh về sản phẩm</h4>
                                    <div className='product-imgs__imgs'>
                                        <span><InsertPhotoIcon fontSize='large' />Ảnh bao quát sản phẩm</span>
                                        <input type="file" name="imgsProduct" multiple onChange={(event) => {
                                            formikProps.setFieldValue("imgsProduct", event.target.files)
                                        }} />
                                    </div>
                                    <div className='product-imgs__imgUnbox'>
                                        <span><AllInboxIcon fontSize='large' />Ảnh khi mở hộp</span>
                                        <input type="file" name="imgsUnbox" multiple onChange={(event) => {
                                            formikProps.setFieldValue("imgsUnbox", event.target.files)
                                        }} />
                                    </div>
                                </div>
                                <div className='product-specifications'>
                                    <h3>Thông số kỹ thuật</h3>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="Màn hình"
                                            name="screen"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="Camera trước"
                                            name="rearCamera"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="Camera sau"
                                            name="selfieCamera"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="RAM"
                                            name="RAM"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="Bộ nhớ"
                                            name="memory"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="CPU"
                                            name="CPU"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="GPU"
                                            name="GPU"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="PIN"
                                            name="PIN"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="SIM"
                                            name="SIM"
                                            component={InputField}
                                        />
                                    </div>
                                    <div className='product-specifications__item'>
                                        <FastField
                                            label="Hệ điều hành"
                                            name="OS"
                                            component={InputField}
                                        />
                                    </div>
                                </div>

                                <div className='product-report'>
                                    <h3>Đánh giá chi tiết về sản phẩm</h3>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={initialValues.desPost}
                                        onReady={editor => {
                                            console.log(editor)
                                        }}
                                        onChange={(e, editor) => {
                                            formikProps.setFieldValue("desPost", editor.getData())
                                        }}
                                    />
                                </div>

                                <div className="product-btnAdd">
                                    <Button type='submit' className="btnAdd">{params.id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</Button>

                                </div>


                            </FormAddMobile>
                        </Form>
                    )
                }}
            </Formik>
        </Container>
    )
}
export default AddEditMobile