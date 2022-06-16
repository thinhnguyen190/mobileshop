import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import { ChooseOfManageFuncStyle, COMFChoose } from "./ChooseOfManageFunc.styled"


const ChooseOfManageFunc = (props) => {
    console.log("aaaaaa")
    return (
        <ChooseOfManageFuncStyle>
            <COMFChoose>
                <Link to="overview">
                    <Button>
                        Tổng quan
                    </Button>
                </Link>
            </COMFChoose>

            <COMFChoose>
                <Link to="order">
                    <Button>
                        Đơn hàng
                    </Button>
                </Link>
            </COMFChoose>
            <COMFChoose>
                <Link to="product">
                    <Button>
                        Hàng hóa
                    </Button>
                </Link>
            </COMFChoose>
            <COMFChoose>
                <Link to="importProduct">
                    <Button>
                        Nhập hàng
                    </Button>
                </Link>
            </COMFChoose>
            <COMFChoose>
                <Link to="archives">
                    <Button>
                        Kho hàng
                    </Button>
                </Link>
            </COMFChoose>







        </ChooseOfManageFuncStyle>
    )
}

export default ChooseOfManageFunc