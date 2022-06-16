import { IconButton } from "@material-ui/core"
import { useEffect, useRef, useState } from "react"
import { ImgsOfProductDetailStyle, IOPDSbtnHandle } from "./ImgsOfProductDetailPage.styled"
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// const imgsss = [

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765724691857357_F-C1_1200x300.png"
//     ,
//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/4/637768876075372056_F-C1_1200x300.png"
//     ,
//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765917518466147_F-C1_1200x300.png"
//     ,
//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765697875939170_F-C1_1200x300.png"
//     ,
//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765645012841608_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/1/637766294477937633_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765703248716700_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765901744140786_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765727157040437_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765652947990118_F-C1_1200x300@2x.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765703248716700_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765901744140786_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765727157040437_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765652947990118_F-C1_1200x300@2x.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765703248716700_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765901744140786_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765727157040437_F-C1_1200x300.png"
//     ,

//     "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/12/31/637765652947990118_F-C1_1200x300@2x.png"

// ]
const ImgsOfProductDetailPage = (props) => {
    const { imgs, name, turnOffPage, display } = props
    const timer = useRef()
    const [imgSelected, setImgSelected] = useState(0);
    const [ statusSlider, setStatusSlider ] = useState("stop");
    useEffect(() => {
        console.log("aaaa")
        timer.current = setTimeout(() => {
            if ((imgSelected + 1) === imgs.length) {
                setImgSelected(0)

            } else {
                setImgSelected(imgSelected + 1)
            }
        }, 5000)
        if(statusSlider === "stop"){
            clearTimeout(timer.current)
        }
        return () => {
            clearTimeout(timer.current)
        }
    }, [imgSelected, imgs, statusSlider, display])


    const ControlStop = () => {
        setStatusSlider("stop")
    }

    const ControlRun = () => {
        setStatusSlider("run")
    }

    const handleSlider = (index) => {
        clearTimeout(timer)
        setImgSelected(index)
    }
    const handleClickNextSlider = () => {
        clearTimeout(timer)
        if(imgSelected === imgs.length - 1){
            setImgSelected(0);
        }else{
            setImgSelected(imgSelected + 1);
        }
    }

    const handleClickPreSlider = () => {
        console.log("handlePre-reRender")
        clearTimeout(timer)

        if(imgSelected === 0){
            setImgSelected(imgs.length - 1);
        }else{
            setImgSelected(imgSelected - 1);
        }
    }
    return (
        <ImgsOfProductDetailStyle imgsLength={imgs.length}>
            <div className="iopd-nav">
                <div className="iopd-nav__countImg">
                    {`${imgSelected + 1} / ${imgs.length}`}
                </div>
                <div className="iopd-nav__buttonhandle">
                    <IOPDSbtnHandle statusSlider={statusSlider}>
                        <div className="btnControlSlider">
                            <PlayArrowIcon fontSize="large"  className="btn btnRun" onClick={ControlRun}/>
                            <PauseIcon fontSize="large"  className="btn btnPause" onClick={ControlStop}/>
                        </div>
                        <CloseIcon  onClick={turnOffPage} fontSize="large" className="btn"/>

                    </IOPDSbtnHandle>
                </div>
            </div>
            <div className="iopd-content">
                <h3>{name}</h3>

                <div className="iopd-content__imgSelected">
                    {imgs.map((item, i) => {
                        const active = i < imgSelected ? "active" : ""
                        return <img src={item} alt="Error" className={active} key={item}/>
                    })}
                </div>

                <div className="iopd-content__listImgs">
                    {imgs.map((item, i) => {
                        let classActive = "show"

                        if((imgSelected) > 9){
                            if(i+1 <= (imgSelected -9)){
                                classActive = "hide"
                            }
                        }
                        const active = i === imgSelected ? "active" : ""
                        //const sliderMode = i < imgSelected ? "sliderMode" : ""
                        return <div className={`iopd-content__listImgs-item ${active} ${classActive}`} key={item}>
                            <img src={item} alt="Error" onClick={() => handleSlider(i)}/>
                        </div>
                    })}
                </div>

                <div className="iopd-content__btn">
                        <IconButton onClick={() => handleClickPreSlider()}><ArrowBackIcon /></IconButton>
                        <IconButton onClick={() => handleClickNextSlider()} ><ArrowForwardIcon /></IconButton>
                </div>

            </div>

        </ImgsOfProductDetailStyle>
    )
}

export default ImgsOfProductDetailPage