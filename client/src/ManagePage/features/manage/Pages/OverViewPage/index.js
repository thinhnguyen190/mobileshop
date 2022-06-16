import React from 'react'
import TopBestSeller from '../../components/TopBestSeller'
import { OverViewPageStyle } from './OverViewPage.styled'

function OverViewPage() {
    return (
        <OverViewPageStyle>
            <div className='partOfOverViewPage main'>
                
            </div>


            <div className='partOfOverViewPage topBestSeller'>
                <TopBestSeller />
            </div>



            <div className='partOfOverViewPage'>
                <div className='nullContent money'>
                    TIỀN BẠC
                </div>
            </div>

            <div className='partOfOverViewPage'>
                <div className='nullContent archives'>
                    KHO HÀNG
                </div>
            </div>

            <div className='partOfOverViewPage'>
                <div className='nullContent events'>
                </div>
            </div>


        </OverViewPageStyle>
    )
}

export default OverViewPage