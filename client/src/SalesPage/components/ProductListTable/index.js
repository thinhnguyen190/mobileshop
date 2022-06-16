import { Grid, IconButton } from "@material-ui/core"
import { PLT, PLTPriority, PLTPriorityChoose, PLTPriorityDiff, PLTProductList} from "./ProductListTable.styled"
import AppsIcon from '@material-ui/icons/Apps';
import ListIcon from '@material-ui/icons/List';
import HotItem from "../ItemProductOfShop";
import React, { useState } from "react";

const ProductListTable = (props) => {
    const { listProduct, loading } = props
    const [ widthProduct, setWidthProduct] = useState(4)
    return(
        <PLT loading={loading}>
            <PLTPriority loading={loading}>
                <span className="firstSpan">Ưu tiên xem:</span>
                <PLTPriorityChoose>
                    <button className="borderRadiusL">Bán chạy nhất</button>
                    <button>Trả ghóp 0%</button>
                    <button>Giá thấp</button>
                    <button>Giá cao</button>
                    <button className="borderRadiusR">Ưu đãi online</button>
                    

                </PLTPriorityChoose>
                <PLTPriorityDiff>
                    <IconButton onClick={() => setWidthProduct(4)}><AppsIcon color={widthProduct === 4 ? "secondary" : "inherit"}/></IconButton>
                    <IconButton onClick={() => setWidthProduct(12)}><ListIcon color={widthProduct === 12 ? "secondary" : "inherit"}/></IconButton>

                </PLTPriorityDiff>
            </PLTPriority>

            <PLTProductList width={widthProduct} loading={loading}>
                <Grid container>
                    {listProduct.map((pr) => {
                        return <Grid item lg={widthProduct} key={pr.name} className="productItem" xs={6} md={4}>
                            <HotItem inforProduct={pr} width={widthProduct}/>
                        </Grid>
                    })}
                </Grid>
            </PLTProductList>
        </PLT>
    )
}
export default React.memo(ProductListTable)