import { PromotionOfProductPOP } from "./PromotionOfProduct.styled"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const PromotionOfProduct = (props) => {
    const { listEndow } = props
    return(
        <PromotionOfProductPOP>
            <div className="promotionPOP">

            </div>

            <div className="endowPOP">
                <span>Ưu đãi thêm</span>
                <ul>
                    {listEndow.map((endow) => {
                        return <li key={endow}>
                            <CheckCircleIcon fontSize="small" color="secondary" className="iconCheck"/>
                            {endow}
                        </li>
                    })}
                    
                </ul>
            </div>

        </PromotionOfProductPOP>
    )
}

export default PromotionOfProduct