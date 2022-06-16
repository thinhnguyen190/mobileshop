
import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../ManagePage.slice'
import { AvatarOfManagerStyle } from './AvatarOfManager.styled'

const AvatarOfManager = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.manage.user)

    const [showDrop, setShowDrop] = useState(false)

    const handleLogout = () => {
        dispatch(logout())
        navigate("/manage/login")
        
    }
    return (
        <AvatarOfManagerStyle   >
            {user.infor.userName}
            <img src="https://pic.onlinewebfonts.com/svg/img_550783.png" alt="error" onClick={() => setShowDrop(state => !state)}/>

            {
                showDrop ? <div className="dropContact">
                    <Button onClick={handleLogout}>Đăng xuất</Button>
                </div> : ""

            }

        </AvatarOfManagerStyle>
    )
}

export default AvatarOfManager