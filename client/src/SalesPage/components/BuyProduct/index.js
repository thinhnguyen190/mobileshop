import { ConvertMoneyToString } from "../../../untils/ConvertMoney"
import PromotionOfProduct from "../PromotionOfProduct"
import { BuyProductBP } from "./BuyProduct.styled"

const listEndow = [
    "Tặng gói iCloud 50GB miễn phí trong 3 tháng",
    "Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ",
    "Thu cũ đổi mới trợ giá 15%",
    "Bảo hành 2 năm chính hãng",
    "Tặng PMH 200.000đ mua Sạc Magsafe",
    "Tặng PMH 300.000đ mua Ốp lưng chính hãng"
]

const BuyProduct = (props) => {
    return(
        <BuyProductBP>
            <div className="price-product">
                <div className="price-product__price">
                    {ConvertMoneyToString(props.salePrice)}
                    <span>
                        {ConvertMoneyToString(props.price)}
                    </span>
                </div>
                <div className="price-product__installments">
                    Trả ghóp chỉ từ 2.000.000đ/tháng
                </div>
            </div>

            <PromotionOfProduct listEndow={listEndow}/>
        </BuyProductBP>
    )
}

BuyProduct.defaultProps = {
    price:"0",
    salePrice: "0"
}
export default BuyProduct