import { Button } from "@material-ui/core"
import { SubmitButtonStyle } from "./SubmitButton.styled"



const SubmitButton = ({title, loading, color}) => {
    return(
        <SubmitButtonStyle color={color}>
            <Button type="submit" className={`btnSubmit ${loading ? "loading" : ""}`}>{ loading ? "" : title }</Button>
        </SubmitButtonStyle>
    )
}

export default SubmitButton