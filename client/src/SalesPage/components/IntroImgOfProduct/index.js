import { IconButton } from "@material-ui/core"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import HealingIcon from '@material-ui/icons/Healing';
import { IIOP, IIOPShowImgs } from "./IntroImgOfProduct.styled";
import ImgsOfProductDetailPage from "../ImgsOfProductDetailPage";
import { useState } from "react";


const IntroImgOfProduct = (props) => {
    const { imgs,name } = props
    const [ display, setDisplay ] = useState("none")
    const [ btnSelected, setBtnSelected ] = useState([])
    const handlebtnShowImgs = (btn) => {
        if(btn === "btnAll"){
            setBtnSelected(imgs.imgsProduct)
        }else{
            setBtnSelected(imgs.imgsUnbox)
        }
        setDisplay("block")
    }

    const handleHiddenImgs = () => {
        setDisplay("none")
    }
    return (
        <IIOP>
            <div className="iiop-avatar">
                <img src={imgs.avatar} alt="Error" />
            </div>
            <IconButton onClick={() => handlebtnShowImgs("btnAll")}><div className="btnShow"><PhotoLibraryIcon fontSize="large" /><span>Xem thêm {imgs.imgsProduct.length} ảnh</span></div></IconButton>
            <IconButton onClick={() => handlebtnShowImgs("btnUnbox")}><div className="btnShow"><HealingIcon fontSize="large" /><span>Trong hộp có gì</span></div></IconButton>
            { display === "block" ? 
            
            <IIOPShowImgs display={display}>
                <ImgsOfProductDetailPage imgs={btnSelected} name={name} turnOffPage={handleHiddenImgs} display={display}/>
            </IIOPShowImgs> : ""
        }
            
        </IIOP>
    )
}

IntroImgOfProduct.defaultProps = {
    imgs: {
        avatar: "https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217820889289_iphone-13-pro-max-vang-1.jpg",
        imgsProduct: [
            "aaa",
            "bbb"
        ],
    }
}
export default IntroImgOfProduct