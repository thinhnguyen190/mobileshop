import React, { useEffect, useState } from 'react'
import orderApi from '../../../../../api/orderApi'
import { ItemTopBestSeller, TopBestSellerStyle } from './TopBestSeller.styled'

function TopBestSeller() {
    const [ listProduct, setListProduct ] = useState([])

    useEffect(() => {
        const fetchListProduct = async () => {
            try {
                const result = await orderApi.getTopMobileBestSell()
                console.log(result)
                setListProduct(result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchListProduct()
    },[])
    return (
        <TopBestSellerStyle>
            <div className='title'>
                TOP SẢN PHẨM BÁN CHẠY NHẤT

            </div>
            {listProduct.map((product) => {
                    return <ItemTopBestSeller key={product.name}>
                       {product.name}
                    </ItemTopBestSeller>
                })}
            
        </TopBestSellerStyle>
    )
}

export default TopBestSeller