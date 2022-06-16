import { Button, IconButton } from "@material-ui/core"
import { ButtonCtrSlider, Img, SliderOPHStyle, SliderImg, SliderNav } from "./SliderOfProductHot.styled"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useEffect, useRef, useState } from "react";
const InforHot = [
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/10/637904570189565718_F-H1_800x300.png",
        infor: "Mở bán IP 13 promax",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/13/637907612404735662_H1_800x300.png",
        infor: "Sắm Samsung trúng quà lớn",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/14/637907930148128687_F-H1_800x300.png",
        infor: "Laptop bảo hành lên đến 10 năm",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/4/637899313649923773_H1_2X.jpg",
        infor: "Phụ kiện xịn giảm giá đến 50%",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/10/637904507761161869_F-H1_800x300.png",
        infor: "Hàng gia dụng chất lượng cao",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/15/637909097546520375_F-H1_800x300.png",
        infor: "Sản phẩm chất lượng cao",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/13/637907298968899254_F-H1_800x300.png",
        infor: "Vivo mới",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/10/637904507761161869_F-H1_800x300.png",
        infor: "Sản phẩm mới",
    },
    {
        img: "https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/6/15/637909097546520375_F-H1_800x300.png",
        infor: "Hàng tốt giá tốt",
    },
]

const SliderOPH = () => {
    const timer = useRef()
    const [imgActived, setImgActived] = useState(0)
    useEffect(() => {
        timer.current = setTimeout(() => {
            if ((imgActived + 1) === InforHot.length) {
                setImgActived(0)

            } else {
                setImgActived(imgActived + 1)
            }
        }, 3000)
        return () => {
            clearTimeout(timer.current)
        }
    }, [imgActived])

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
            <SliderOPHStyle>
                <SliderImg>
                    <Img>
                        {InforHot.map((sli, i) => {
                            const active = i < imgActived ? "active" : "dontActive"
                            return <img src={sli.img} alt="Error" className={active} key={sli.infor}/>
                        })}
                        <ButtonCtrSlider>
                            <IconButton onClick={() => handleClickPreSlider()} disabled={imgActived === 0 ? true : false}><ArrowBackIcon /></IconButton>
                            <IconButton onClick={() => handleClickNextSlider()} disabled={imgActived === InforHot.length - 1 ? true : false}>< ArrowForwardIcon /></IconButton>
                        </ButtonCtrSlider>

                    </Img>

                </SliderImg>
                <SliderNav>
                        {InforHot.map((sli, i) => {
                            let classActive = "show"

                            if((imgActived) > 3){
                                if(i+1 <= (imgActived -3)){
                                    classActive = "hide"
                                }
                            }
                            const active = i === imgActived ? "active" : "dontActive"
                            
                            return <div className={`sliderNav-item hidden ${active} ${classActive}`} key={sli.infor}>
                                <Button onClick={() => handleSlider(i)} className={`${active} ${classActive}`}>{sli.infor}</Button>
                            </div>
                        })}
                </SliderNav>
            </SliderOPHStyle>
    )
}
export default SliderOPH