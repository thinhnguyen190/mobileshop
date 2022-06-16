import { IconButton } from "@material-ui/core"
import { Brand, SAF, SafSliderBrand, SafTagFillter, SafTitle, Tag } from "./SliderAndFillter.styled"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, { useState } from "react";
import { GetValueOfFilter } from "../../../untils/GetValueOfFilter";
import ClearIcon from '@material-ui/icons/Clear';
import { useDispatch, useSelector } from "react-redux";
import { filterMobileChange, resetFilterMobile } from "../../SalesPage.slice";
import CheckValueOfKeysObj from "../../../untils/CheckValueOfKeysObj";

const SliderAndFillter = (props) => {
    const filter = useSelector(state => state.sales.filterMobile)
    const dispatch = useDispatch()
    const { title, listBrand, loading } = props
    const [imgActived, setImgActived] = useState(0);

    const handleClickNextSlider = () => {
        //console.log("handleClickNext-reRender")

        setImgActived(imgActived + 1);
    }

    const handleClickPreSlider = () => {
        //console.log("handlePre-reRender")

        setImgActived(imgActived - 1);
    }

    const handleClickTag = (name, value) => {
        const action = filterMobileChange({ name, value })
        dispatch(action)
    }

    


    return (
        <SAF>
            <SafTitle loading={loading}>
                <h2>{title}</h2>
            </SafTitle>
            {CheckValueOfKeysObj(filter) === 0 ?
                <SafSliderBrand loading={loading}>
                    <div className="listBrand">
                    {listBrand.map((item, i) => {
                        const active = i < imgActived ? "active" : ""
                        return <Brand className={active} key={item.label}>
                            <img src={item.img} alt="Error" onClick={() => handleClickTag("brand", item.label)} />
                        </Brand>
                    })}
                    </div>
                    <IconButton onClick={() => handleClickPreSlider()} disabled={imgActived === 0 ? true : false} className="btnPre"><ArrowBackIcon /></IconButton>
                    <IconButton onClick={() => handleClickNextSlider()} disabled={imgActived === listBrand.length - 6 ? true : false} className="btnNext"><ArrowForwardIcon /></IconButton>

                </SafSliderBrand>
                :
                <SafTagFillter loading={loading}>
                    <div className="listTag">
                    <span>Lọc theo: </span>
                    {GetValueOfFilter(filter).map((fil) => {
                        return <Tag key={fil[1]} onClick={() => handleClickTag(fil[0], fil[1])}>
                            {fil[1]}<ClearIcon fontSize="small" />
                        </Tag>

                    })}
                    {GetValueOfFilter(filter).length > 1 ?
                        <Tag key={"delAllTag"} onClick={() => dispatch(resetFilterMobile())}>
                            Xóa tất cả<ClearIcon fontSize="small" />
                        </Tag>
                        :
                        ""
                    }
                    </div>
                </SafTagFillter>
            }
        </SAF>
    )
}

export default React.memo(SliderAndFillter)