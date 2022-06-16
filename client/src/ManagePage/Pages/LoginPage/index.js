import Reddit from "@material-ui/icons/Reddit"
import { FastField, Form, Formik } from "formik"
import { useState } from "react"
import managerApi from "../../../api/manager"
import InputField from "../../../custom fields/Input Field"
import { LoginPageStyle, ResponFromServer } from "./LoginPage.styled"
import * as Yup from "yup"
import SubmitButton from "../../../component/SubmitButton"
import { useDispatch } from "react-redux"
import { login } from "../../ManagePage.slice"
import { useNavigate } from "react-router-dom"
const LoginPage = (props) => {

    const navigate = useNavigate()

    const initialValues = {
        userName: "",
        passWord: ""
    }

    const dispatch = useDispatch();

    const [respon, setRespon] = useState("")
    const [loading, setLoading] = useState(0)

    const handleSubmit = async (values) => {
        setRespon("")
        setLoading(1)
        const result = await managerApi.login(values)
        setLoading(0)
        if(result.status && result.status === 200) {
            dispatch(login({
                ...result.inforManager,
                accessToken: result.accessToken,
                refreshToken: result.refreshToken
            }))

            localStorage.setItem("accessToken", result.accessToken)
            localStorage.setItem("refreshToken", result.refreshToken)
            navigate('/manage')
        }else{
            setRespon(result.msg)

        }

    }

    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(2, "Tối thiểu ba ký tự").max(15, "Tối đa 15 ký tự").required('Bạn chưa nhập tài khoản!'),
        passWord: Yup.string().required('Bạn chưa nhập mật khẩu!')


    })
    return (
        <LoginPageStyle>
            <div className="pageLogo">
                <Reddit className="pageLogo-logo" />
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {
                    formikProps => {
                        return (
                            <Form className="loginForm">
                                <div className="loginForm-item">

                                    <FastField
                                        label="Tài khoản"
                                        name="userName"
                                        component={InputField}
                                    />
                                </div>
                                <div className="loginForm-item">
                                    <FastField
                                        label="Mật khẩu"
                                        name="passWord"
                                        component={InputField}
                                        type="password"
                                    />
                                </div>
                                <div className="loginForm-item">
                                    <div className="btnLogin">
                                        <SubmitButton title={"Đăng nhập"} loading={loading} />

                                    </div>
                                </div>
                                <ResponFromServer>{respon}</ResponFromServer>


                            </Form>
                        )
                    }
                }
            </Formik>
        </LoginPageStyle>
    )
}

export default LoginPage