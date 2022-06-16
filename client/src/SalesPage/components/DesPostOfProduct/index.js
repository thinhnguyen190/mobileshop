import { DesPostOfProductStyle } from "./DesPostOfProduct.styled"
import ReactHtmlParser from "react-html-parser"
import { useState } from "react"


const DesPostOfProduct = ({ productName, desPost }) => {
    const [ showAllDesPost, setShowAllDesPost ] = useState(false)
    return (
        <DesPostOfProductStyle showAll={showAllDesPost}>
            <h3>{`Đánh giá chi tiết ${productName}`}</h3>
            {ReactHtmlParser(desPost)}
            <div className="DesPost-btnShowAll">
                <button onClick={() => setShowAllDesPost((state) => !state)}>{ showAllDesPost ? "Thu gọn" : "Xem thêm" }</button>
            </div>
        </DesPostOfProductStyle>

    )
}

export default DesPostOfProduct