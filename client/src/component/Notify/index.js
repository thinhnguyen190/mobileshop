import { Button } from "@material-ui/core"
import { NotifyStyle } from "./Notify.styled"


const Notify = ({ message, onBtn }) => {
    return (
        <NotifyStyle>
            <div className="notify">
                <div className="notify-message">
                    {message}

                </div>
                <div className="notify-btn">

                    <Button onClick={onBtn}>OK</Button>
                </div>
            </div>

        </NotifyStyle>
    )
}

export default Notify