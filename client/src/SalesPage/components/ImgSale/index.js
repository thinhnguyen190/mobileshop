import { ImageS, TimeSale } from "./ImgSale.styled"
import { IMAGE_SALE } from "../../../constans/GlobalConstans"
import CountDown from "../../../untils/CountDown"

const ImageSale = () => {
    return (
        <>
            <ImageS>
                
                    <img src={IMAGE_SALE} alt="error"></img>
                    <TimeSale>
                        <span>Sắp đến tết! Còn </span>
                        <CountDown time={650}/>
                    </TimeSale>
              
            </ImageS>
        </>
    )
}
export default ImageSale