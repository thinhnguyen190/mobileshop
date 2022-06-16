import { ErrorMessage } from "formik"
import { FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import { InputFieldStyle } from "./InputField.styled"

const InputField = (props) => {
    const { field, form, type, label, placeholder, disable} = props
    const { name } = field
    const { errors, touched } = form
    const showError = errors[name] && touched[name]
    return(
        <InputFieldStyle>
            <FormGroup>
                { label && <Label for={name} className="input-label">{label}</Label>}
                <Input 
                    id={name}
                    {...field}
                    placeholder = { placeholder}
                    type= {type}
                    disable={disable ? disable : ""}
                    invalid={showError}
                    className="input-ip"
                />
                <ErrorMessage name={name} component={FormFeedback} className="errorMessage"/>
            </FormGroup>
        </InputFieldStyle>
    )
}

InputField.defaultProps = {
    type: 'text',
    label: "",
    placeholder: '',
    disable: false
}

export default InputField