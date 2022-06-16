import { ConvertMoneyToString } from "../../../untils/ConvertMoney"
import { ItemOfCartStyle } from "./ItemOfCart.styled"
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const ItemOfCart = (props) => {
    const { item, onBtnRemove, onBtnAdd, onBtnSub } = props

    return (
        <ItemOfCartStyle>
            <div className="ioc-inforProduct">
                <img src={item.avatar} alt="Error" />
                <p>{item.name}</p>
            </div>

            <div className="ioc-btnHandle">
                <div className="ioc-btnHandle__inputCount">
                    <IconButton onClick={() => onBtnSub(item.name)} disabled={ item.amount <= 1 ? true : false}>
                        <RemoveIcon />

                    </IconButton>
                    <div className="number">{item.amount}</div>
                    <IconButton onClick={() => onBtnAdd(item.name)} disabled={ item.amount >= 4 ? true : false}>
                        <AddIcon />

                    </IconButton>
                </div>

                <div className="ioc-btnHandle__btnRemove">
                    <IconButton onClick={() => onBtnRemove(item.name)}><DeleteIcon /><span>Xóa</span></IconButton>
                </div>
            </div>


            <div className="ioc-price">
                <p>
                    {ConvertMoneyToString(item.salePrice * item.amount)}đ
                </p>
                <span>
                    {ConvertMoneyToString(item.price * item.amount)}đ

                </span>
            </div>


        </ItemOfCartStyle>
    )
}

export default ItemOfCart