
import { Button } from '@material-ui/core'
import React from 'react'
import { NotifyHandleStyle } from './NotifyHandle.styled'

function NotifyHandle(props) {
    const { title, message, btnLeft, btnRight } = props
    return (
        <NotifyHandleStyle>
            <div className="notify">
                                 <div className="notify-title">{title}</div>

                                <div className="notify-message">
                                    {message}
                                </div>
                                <div className="notify-btn">
                                    <Button className="notify-btn__left " onClick={btnLeft.func}>{btnLeft.content}</Button>
                                    <Button className="notify-btn__right" onClick={btnRight.func}>{btnRight.content}</Button>

                                </div>
                            </div>
        </NotifyHandleStyle>
    )
}

export default NotifyHandle