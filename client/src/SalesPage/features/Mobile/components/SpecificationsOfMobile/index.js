import { PhoneAndroid, Camera, CameraFront, Memory, Dns } from '@material-ui/icons'
import { SOM } from './Spe.styled'
const speInfor = [
    "Màn hình",
    "Camera sau",
    "Camera Selfie", "RAM", "Bộ nhớ trong", "CPU", "GPU",
    "Dung lượng pin",
    "Thẻ sim",
    "Hệ điều hành",
    "Xuất xứ",
    "Thời gian ra mắt"
]
const SpecificationsOfMobile = (props) => {
    const { specifications, mode } = props
    return (
        <SOM mode={mode}>
            {mode === "modeText" ?
                <div className='modeText'>
                    <ul>
                        <li><PhoneAndroid className='iconSOM' /><span>{specifications.screen}</span></li>
                        <li><Camera className='iconSOM' /><span>{specifications.rearCamera}</span></li>
                        <li><CameraFront className='iconSOM' /><span>{specifications.selfieCamera}</span></li>
                        <li><Memory className='iconSOM' /><span>{specifications.CPU}</span></li>
                        <li><Dns className='iconSOM' /><span>{specifications.memory}</span></li>

                    </ul>

                    <p>Xem chi tiết thông số kỹ thuật</p>
                </div>
                :
                <div className='modeTable'>
                    <h4>Thông số kỹ thuật</h4>
                    <table>
                        <tbody>
                        {
                            Object.entries(specifications).map((spe, i) => {
                                const check = i % 2 === 0 ? "bgGreen" : ""
                                return <tr className={check} key={spe}>
                                    <td width="32%">{speInfor[i]}</td>
                                    <td>{spe[1]}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                    <p>Xem chi tiết thông số kỹ thuật</p>

                </div>

            }

        </SOM>
    )
}

SpecificationsOfMobile.defaultProps = {
    specifications: {
        screen: "",
        rearCamera: "",
        selfieCamera: "",
        RAM: "",
        memory: "",
        CPU: "",
        GPU: "",
        PIN: "",
        SIM: "",
        OS: ""
    }


}

export default SpecificationsOfMobile