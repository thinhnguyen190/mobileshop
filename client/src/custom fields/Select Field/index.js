import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'
import Select from 'react-select'
SelectField.defaultProps = {
    options: [],
    label: '',
    placeholder: '',
    isdisabled: false

}

function SelectField(props) {
    const {
        field,
        options, label, placeholder

    } = props
    const { name, value } = field
    console.log(placeholder)

    const handleSelectedOptionChange = (e) => {
        const selectedValue = e.value
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    return (
        <FormGroup className="formgroup-build">
            {label && <Label for={name}>{label}</Label>}
            <Select id={name}
                {...field}
                value={options.find((option) => option.value === value)}
                onChange={(e) => handleSelectedOptionChange(e)}
                options={options}
                placeholder={placeholder}


          />

        </FormGroup>

    )
}
export default SelectField
