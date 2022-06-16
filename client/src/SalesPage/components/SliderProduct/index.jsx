import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { ButtonCtrSlider } from "../../MainPage/components/AdverHot/SliderOfProductsHot/SliderOfProductHot.styled";
import { AdverIMGList, Dot, Dots, SliderP } from "./SliderProduct.styled"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRef } from "react";
import { useEffect } from "react";

const SliderProduct = (props) => {
    const { adverImgList } = props
    const timer = useRef()
    const [ imgActived, setImgActived ] = useState(0);
    useEffect(() => {
        timer.current = setTimeout(() => {
            if ((imgActived + 1) === adverImgList.length) {
                setImgActived(0)

            } else {
                setImgActived(imgActived + 1)
            }
        }, 5000)

        return () => {
            clearTimeout(timer.current)
        }
    }, [imgActived,adverImgList])

    const handleSlider = (index) => {
        clearTimeout(timer)
        setImgActived(index)
    }
    const handleClickNextSlider = () => {
        console.log("handleClickNext-reRender")
        clearTimeout(timer)

        setImgActived(imgActived + 1);
    }

    const handleClickPreSlider = () => {
        console.log("handlePre-reRender")
        clearTimeout(timer)

        setImgActived(imgActived - 1);
    }
    return (
        <SliderP>
            <AdverIMGList>
                {adverImgList.map((item,i) => {
                    const active = i < imgActived ? "active" : ""
                    return <img src={item} alt="Error" key={item + 1} className={active} />
                })}
            </AdverIMGList>
            <Dots>
                <ul>
                    {adverImgList.map((item,i) => {
                        const active = i === imgActived ? "active" : ""
                        return <Dot className={active} key={item}><button onClick={() => handleSlider(i)}/></Dot>
                    })}
                </ul>

            </Dots>
            <ButtonCtrSlider>
                            <IconButton onClick={() => handleClickPreSlider()} disabled={imgActived === 0 ? true : false}><ArrowBackIcon /></IconButton>
                            <IconButton onClick={() => handleClickNextSlider()} disabled={imgActived === adverImgList.length - 1 ? true : false}><ArrowForwardIcon /></IconButton>
            </ButtonCtrSlider>
        </SliderP>

    )
}

export default React.memo(SliderProduct)