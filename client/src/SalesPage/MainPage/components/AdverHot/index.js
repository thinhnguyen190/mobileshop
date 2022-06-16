
import AdvDiffInfor from "./AdverDiffInfor"
import { AdverStyle } from "./AdverHot.styled"
import SliderOPH from "./SliderOfProductsHot"


const AdverHot = () => {
    return (
        <AdverStyle>
            <div className="adver-left">
                <SliderOPH />
            </div>
            <div className="adver-right">
                <AdvDiffInfor />
            </div>
        </AdverStyle>
    )
}
export default AdverHot